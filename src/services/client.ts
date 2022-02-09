import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
// PUBLIC ENDPOINTS
export const publicClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getPublicResponse = (options: any): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return publicClient(options);
};

// PRIVATE ENDPOINTS

export const privateClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPrivateResponse = (options: any): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return privateClient(options);
};

privateClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token") || "";

    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };

    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

privateClient.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (!err.response) {
      return Promise.reject(err);
    }

    if (err.response.status !== 401) {
      return Promise.reject(err);
    }

    if (err.response.status === 401) {
      try {
        let token;
        const userData = await auth.currentUser;
        if (userData) {
          token = await userData.getIdToken(true);
        }
        if (token) {
          localStorage.setItem("token", token);
        }

        return Promise.resolve(privateClient(err.response.config));
      } catch (e) {
        return signOut(auth);
      }
    }
    return Promise.reject(err);
  }
);
