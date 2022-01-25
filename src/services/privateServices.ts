import { UPDATE_USER } from "../types/auth.types";
import { getPrivateResponse } from "./client";

// USER REQUESTS

export const getAllUsers = (): any => {
  const options = {
    method: "GET",
    url: "user/all",
  };
  return getPrivateResponse(options);
};

export const getUserById = (id: number): any => {
  const options = {
    method: "GET",
    url: `user/${id}`,
  };
  return getPrivateResponse(options);
};

export const deleteUser = (id: number): any => {
  const options = {
    method: "DELETE",
    url: `user/${id}`,
  };
  return getPrivateResponse(options);
};

export const getLoguedUserInfo = (): any => {
  const options = {
    method: "GET",
    url: "user/me",
  };
  return getPrivateResponse(options);
};

export const updateUser = (userData: UPDATE_USER): any => {
  const options = {
    method: "PUT",
    url: "user",
    ...userData,
  };
  return getPrivateResponse(options);
};

// DEVICES REQUESTS
export const getUserDevices = (uniqueId?: string, id?: number): any => {
  const options = {
    method: "GET",
    url: "device/my-devices",
    uniqueId,
    id,
  };
  return getPrivateResponse(options);
};

export const registerMyDevice = (data: any): any => {
  const options = {
    method: "POST",
    url: "device/my-devices",
    data,
  };
  return getPrivateResponse(options);
};

export const deleteMyDevice = (id: number): any => {
  const options = {
    method: "DELETE",
    url: `device/my-devices/${id}`,
  };
  return getPrivateResponse(options);
};

export const getDeviceByIdAndUser = (
  uniqueId?: string,
  id?: number,
  page?: number,
  limit?: number
): any => {
  const options = {
    method: "GET",
    url: `device`,
    uniqueId,
    id,
    page,
    limit,
  };
  return getPrivateResponse(options);
};

export const registerDeviceToUser = (userId: number, data: any): any => {
  const options = {
    method: "POST",
    url: `device/${userId}`,
    data,
  };
  return getPrivateResponse(options);
};

export const deleteDevice = (id: number): any => {
  const options = {
    method: "DELETE",
    url: `device/${id}`,
  };
  return getPrivateResponse(options);
};

// TELEMETRY REQUESTS

export const getTelemetryFromAllDevices = (
  startDate: string,
  endDate: string
): any => {
  const options = {
    method: "GET",
    url: `telemetry/my-device/?startDate=${startDate}&endDate=${endDate}`,
  };
  return getPrivateResponse(options);
};

export const getTelemetryByUserDevice = (
  startDate: string,
  endDate: string,
  id: number
): any => {
  const options = {
    method: "GET",
    url: `telemetry/my-device/${id}?startDate=${startDate}&endDate=${endDate}`,
  };
  return getPrivateResponse(options);
};

export const getTelemetryByUser = (
  userId: number,
  startDate: string,
  endDate: string
): any => {
  const options = {
    method: "GET",
    url: `telemetry`,
    startDate,
    endDate,
    userId,
  };
  return getPrivateResponse(options);
};

export const getTelemetryByDeviceId = (
  startDate: string,
  endDate: string,
  id: number
): any => {
  const options = {
    method: "GET",
    url: `telemetry/${id}`,
    startDate,
    endDate,
  };
  return getPrivateResponse(options);
};
