import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // withCredentials: true,
});

const axiosRequest = async (url, method = "GET", data = null, headers={}) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosRequest;
