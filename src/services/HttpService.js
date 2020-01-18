//import { forceLogout } from "../actions/auth-actions";

function getUrlWithQueryParams(url, params) {
  if (typeof params !== "object") {
    return url;
  }
  const parts = [];
  const esc = encodeURIComponent;
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value !== null && value !== undefined) {
      const part = `${esc(key)}=${esc(value)}`;
      parts.push(part);
    }
  });
  const qs = parts.join("&");
  return qs.length ? `${url}?${qs}` : url;
}

function parseJSON(response) {
  return new Promise(resolve =>
    response.json().then(json =>
      resolve({
        status: response.status,
        ok: response.ok,
        json
      })
    )
  );
}

function parseText(response) {
  return new Promise(resolve =>
    response.text().then(text =>
      resolve({
        status: response.status,
        ok: response.ok,
        text
      })
    )
  );
}

function parseResponse(response, responseType) {
  let parseFn;
  switch (responseType) {
    case "json":
      parseFn = parseJSON;
      break;
    case "text":
      parseFn = parseText;
      break;
    default:
      break;
  }

  return parseFn(response);
}

function request(url, options) {
  const { responseType, params, ...fetchOptions } = options;
  const requestUrl = getUrlWithQueryParams(url, params);

  return new Promise((resolve, reject) => {
    fetch(requestUrl, fetchOptions)
      .then(response => parseResponse(response, responseType))
      .then(response => {
        if (response.ok) {
          return resolve(response[responseType]);
        }
        if (response.status === 401) {
        }
        return reject(response[responseType]);
      })
      .catch(error =>
        reject({
          networkError: error.message
        })
      );
  });
}

class HttpService {
  static getRequest({ url, params }) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      params,
      responseType: "json",
      credentials: "include"
    };
    return request(url, options);
  }

  static postRequest({ url, body }) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      responseType: "json",
      credentials: "include"
    };
    return request(url, options);
  }

  static putRequest({ url, body }) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      responseType: "json",
      credentials: "include"
    };
    return request(url, options);
  }

  static deleteRequest({ url, body }) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json",
      credentials: "include"
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return request(url, options);
  }

  // for submitting formData
  static postFormDataRequest({ url, body }) {
    // omitting Content-Type header here to allow browswer to automatically
    // find the request boundaries
    const options = {
      method: "POST",
      body,
      responseType: "json",
      credentials: "include"
    };
    return request(url, options);
  }

  static putFormDataRequest({ url, body }) {
    const options = {
      method: "PUT",
      body,
      responseType: "json",
      credentials: "include"
    };
    return request(url, options);
  }
}

export default HttpService;
