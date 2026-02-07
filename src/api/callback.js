
import { callbackEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./cors";

const { ADD_CALLBACK_REQUEST_API } = callbackEndpoints;

const callback = {
  submitCallbackRequest: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", ADD_CALLBACK_REQUEST_API, data, {
        "Content-Type": "application/json",
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default callback;
