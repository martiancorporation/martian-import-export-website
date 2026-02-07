import axios from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

export const handleResponse = (response) => {
  if (response?.status === 202) {
    toast.warning("Something went wrong", {
      description: response.data.error,
    });
    return { success: false, message: response.data.error };
  } else if (response?.response?.status === 500) {
    toast.error("Server error", {
      description: response?.message,
    });
    return { success: false, message: "Server error occurred" };
  } else if (response?.response?.status === 401) {
    toast.error("Session expired", {
      description: "Please logout and log in again.",
    });
    return { success: false, message: "Session expired" };
  } else if (response?.status === 200) {
    return { success: true, data: response?.data, message: "Success" };
  } else {
    toast.error("Unexpected error", {
      description: "Please contact server admin.",
    });
    return { success: false, message: "Unexpected error occurred" };
  }
};
