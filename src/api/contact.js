
import { contactEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./cors";

const { ENQUIRY_FORM_API } = contactEndpoints;

const contact = {
  submitContactForm: async (data) => {
    let response = null;

    try {
      response = await apiConnector("POST", ENQUIRY_FORM_API, data, {
        "Content-Type": "application/json",
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default contact;
