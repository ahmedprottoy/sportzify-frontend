import axiosRequest from "../utils/axios.util";


export const signUpReq = async (data) => {
  const response = await axiosRequest("v1/auth/sign-up", "POST", data);
  return response;
};


export const signInReq = async (data) => {
  const response = await axiosRequest("v1/auth/sign-in", "POST", data);
 return response
};

export const signOutReq = async () => {
  const response = await axiosRequest("v1/auth/sign-out", "POST");
  console.log(response);
}

