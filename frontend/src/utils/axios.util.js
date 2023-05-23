import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://sportzify.onrender.com/api/v1/",
});

const axiosRequest = async (url, method = "GET", data = null) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosRequest;



// import axiosRequest from "./axiosRequest";

// // Example usage in a component
// const fetchData = async () => {
//   try {
//     const data = await axiosRequest("/data", "GET");
//     console.log(data);
//     // Process the response data
//   } catch (error) {
//     console.error("Error:", error.message);
//     // Handle the error
//   }
// };

// fetchData();