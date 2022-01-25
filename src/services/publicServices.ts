import { getPublicResponse } from "./client";

export const signup = (data: any): any => {
  const options = {
    method: "POST",
    url: "user/register",
    data,
  };
  return getPublicResponse(options);
};

export const signupRRSS = (data: any): any => {
  const options = {
    method: "POST",
    url: "user/social/register",
    data,
  };
  return getPublicResponse(options);
};
