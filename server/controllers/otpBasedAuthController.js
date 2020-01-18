const apiService = require("../services/apiService");
const {
  API_HOST: { AUTH_V2_URL }
} = require("../config/env-config");

const loginAgentUrl = `${AUTH_V2_URL}/login`;
const verifyOtpUrl = `${AUTH_V2_URL}/validate`;
const resetPasswordUrl = `${AUTH_V2_URL}/reset/password`;
const getLogoutAgentUrl = `${AUTH_V2_URL}/logout`;
const validateSessionUrl = `${AUTH_V2_URL}/validate/token`;

function getFormattedReloadSessionResponse({ data }) {
  // eslint-disable-next-line prefer-promise-reject-errors
  let newReponse = {};
  if (data) {
    newReponse = {
      token: data.token || null,
      user_id: data.user_id || null,
      agent_id: data.agent_id || null,
      is_first_time: data.first_time || false,
      org_info: data.org || {},
      permissions: data.permissions || [],
      expires: data.exp_t || null
    };
    return newReponse;
  }
  return {
    status: 401,
    data: { meta: { message: "Invalid user or session" } }
  };
}

function loginAgent(reqLocals, userName, password) {
  const data = { user_id: userName, password };
  return apiService.post({ url: loginAgentUrl, data, reqLocals });
}

function verifyOtp(reqLocals, initialToken, otp) {
  const data = { otp };
  let headers = {};
  if (initialToken) {
    headers = { token: initialToken };
  }
  return apiService.post({ url: verifyOtpUrl, reqLocals, headers, data });
}

function resetPassword(reqLocals, userId, password, firstTimerToken) {
  const data = { user_id: userId, password };
  let headers = {};
  if (firstTimerToken) {
    headers = { token: firstTimerToken };
  }
  return apiService.post({ url: resetPasswordUrl, data, reqLocals, headers });
}

function logoutAgent(userId) {
  const data = { user_id: userId };
  return apiService.post({ url: getLogoutAgentUrl, data });
}

function reloadSession(reqLocals, sessionId) {
  const headers = { token: sessionId };
  return apiService
    .get({ url: validateSessionUrl, headers, reqLocals })
    .then(getFormattedReloadSessionResponse);
}

module.exports = {
  loginAgent,
  verifyOtp,
  resetPassword,
  logoutAgent,
  reloadSession
};
