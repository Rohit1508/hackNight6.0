export const BASE_URL = "/api";
export const AUTH_BASE_ROUTE = "/auth";

export const ENDPOINTS = {
  auth: {
    fetchSession: () => "v2/reload-session",
    logout: () => `v2/logout`
  },

  stock: {
    sendKycRequest: () => "client/kycRequest"
  },

  kyc: {
    kycStatus: () => "client/kycStatus"
  }
};
