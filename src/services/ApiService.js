/* eslint-disable no-unused-vars */
import moment from "moment";
import {
  ENDPOINTS,
  AUTH_BASE_ROUTE,
  BASE_URL
} from "../constants/apiConstants";
import HttpService from "./HttpService";

class ApiService {
  // Auth Api's
/*   static login(credentials) {
    const endpoint = ENDPOINTS.auth.login();
    const url = `${AUTH_BASE_ROUTE}/${endpoint}`;
    const options = { url, body: credentials };
    return HttpService.postRequest(options);
  }

  static fetchSession() {
    const endpoint = ENDPOINTS.auth.fetchSession();
    const url = `${AUTH_BASE_ROUTE}/${endpoint}`;
    return HttpService.getRequest({ url });
  }

  static logout(user_id) {
    const endpoint = ENDPOINTS.auth.logout();
    const url = `${AUTH_BASE_ROUTE}/${endpoint}`;
    const options = { url, body: { user_id } };
    return HttpService.postRequest(options);
  } */

  // Stock Api's
  static stockSettlementDetails() {
    const endpoint = ENDPOINTS.stock.settlementDetails();
    const url = `${BASE_URL}/${endpoint}`;
    return HttpService.getRequest({ url });
  }
}

export default ApiService;
