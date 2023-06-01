import axiosRequest from "../utils/axios.util";

export const getUserDataReq = async (username) => {
  const url = `v1/users/${username}`;
  const method = "GET";
  const response = await axiosRequest(url, method);
  return response.data;
};

export const updateUserDataReq = async (data) => {
  const url = `v1/users/${username}`;
  const method = "PUT";
  const response = await axiosRequest(url, method, data, headers);
  return response.data;
};

export const updatePasswordReq = async (data) => {
  const url = `v1/users/password/${username}`;
  const method = "PUT";
  const response = await axiosRequest(url, method, data);
  return response.data;
};

export const getUserBlogReq = async () => {
  const url = `v1/users/blogs/${username}`;
  const method = "GET";
  const response = await axiosRequest(url, method);
  return response.data;
};

export const updateUserImageReq = async (data, username) => {
  const url = `v1/users/image/${username}`;
  const method = "POST";
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const response = await axiosRequest(url, method, data, headers);
  return response.data;
};

export const deleteUserImageReq = async () => {
  const url = `v1/users/image/${username}`;
  const method = "DELETE";
  const response = await axiosRequest(url, method);
  return response.data;
};
