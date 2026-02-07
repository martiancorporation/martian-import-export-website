const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// CONTACT FORM ENDPOINTS

export const contactEndpoints = {
  ENQUIRY_FORM_API: BASE_URL + "/v1/enquiry/add_enquiry",
};

// VISITOR ENDPOINT

export const visitorEndpoints = {
  TRACK_VISITOR_API: BASE_URL + "/v1/visitor/track_visitor",
};

// CALLBACK FORM ENDPOINTS
export const callbackEndpoints = {
  ADD_CALLBACK_REQUEST_API:
    BASE_URL + "/v1/callback-request/add_callback_request",
  GET_ALL_CALLBACK_REQUEST_API:
    BASE_URL + "/v1/callback-request/get_all_callback_request",
};
