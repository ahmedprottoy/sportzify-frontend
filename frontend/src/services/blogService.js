import axiosRequest from "../utils/axios.util";


export const createBlogReq = async (data) => {
  const url = "v1/blogs";
  const method = "POST";
  const headers = {
    "Content-Type": "multipart/form-data",
  };
console.log(data);
  const response = await axiosRequest(url, method, data, headers);
  return response;
};