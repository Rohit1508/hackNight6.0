/* eslint-disable no-unused-vars */
import moment from "moment";
import {
  ENDPOINTS,
  AUTH_BASE_ROUTE,
  BASE_URL
} from "../constants/apiConstants";
import HttpService from "./HttpService";

const isKycDone = userId => {
  if (userId === 123) return true;
  return false;
};

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

  static kycStatus(userid) {
    const endpoint = ENDPOINTS.kyc.kycStatus();
    const url = `${BASE_URL}/${endpoint}`;
    return new Promise((resolve, reject) => {
      resolve(isKycDone(userid));
    });
    // return HttpService.getRequest({ url });
  }

  static sendKycRequest({ pan, panName, dob, addressProof, proofId }) {
    const endpoint = ENDPOINTS.stock.sendKycRequest();
    const url = `${BASE_URL}/${endpoint}`;
    const params = {
      userId: "db527e63-bf50-457f-b99b-f48f1c7829c7",
      PAN_number: pan,
      Name_On_PAN: panName,
      DOB: dob,
      Add_Proof: addressProof,
      ProofId: proofId,
      Add_Front: null,
      Add_Back: null,
      PAN_Image: null,
      Status: null
    };
    const options = {
      url,
      body: params
    };
    return HttpService.postRequest(options);
  }
}

export default ApiService;
