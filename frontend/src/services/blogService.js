import axiosRequest from "../utils/axios.util";


export const createBlogReq = async (data) => {
  const url = "v1/blogs";
  const method = "POST";
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const response = await axiosRequest(url, method, data, headers);
  return response.data;
};

export const getBlogsReq = async () => {
  const url = "v1/blogs";
  const method = "GET";
 
  const response = await axiosRequest(url, method);
  return response.data;
}

export const getBlogReq = async (id) => {
  const url = `v1/blogs/${id}`;
  const method = "GET";
 
  const response = await axiosRequest(url, method);
  return response.data;
}
