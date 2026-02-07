import { visitorEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./cors";

const { TRACK_VISITOR_API } = visitorEndpoints;

const visitor = {
  trackVisitor: async () => {
    let response = null;

    try {
      response = await apiConnector(
        "POST",
        TRACK_VISITOR_API,
        {
          "Content-Type": "application/json",
        }
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default visitor;
