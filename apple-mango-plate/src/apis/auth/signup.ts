import { axiosAWSInstance } from "../axiosInstance";

export const checkEmail = async (email: string) => {
  try {
    const response = await axiosAWSInstance.get(`/jwt-login/join/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const submitSignup = async (formData: FormData) => {
  try {
    const response = await axiosAWSInstance.post(`/jwt-login/join`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
