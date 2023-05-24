import axiosRequest from "../utils/axios.util";


const signUpReq = async (data) => {
  const response = await axiosRequest("v1/auth/sign-up", "POST", data);
  console.log(response);
};

export default signUpReq;
