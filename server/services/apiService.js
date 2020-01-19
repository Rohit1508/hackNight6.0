const axios = require("axios");
const { SERVER_NAME } = require("../config/env-config");

function generateRequestOptions({ headers = {}, reqLocals, ...options }) {
  const updatedOptions = { ...options };

  updatedOptions.headers = {
    ...headers,
    "x-pmmodule-name": SERVER_NAME,
    "content-type": "application/json",
    "org-type": "INTERNAL"
  };

  if (reqLocals) {
    updatedOptions.headers["x-cms-user-id"] = reqLocals.loggedInUser || "";
  }

  return updatedOptions;
}

function request(options) {
  const requestOptions = generateRequestOptions(options);
  return axios(requestOptions);
}

const apiService = {
  get: options =>
    new Promise((resolve, reject) => {
      request(options)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error);
        });
    }),

  post: options =>
    new Promise((resolve, reject) => {
      const requestOptions = {
        method: "post",
        ...options
      };
      request(requestOptions)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response));
    }),

  postForm: ({ formData = {}, ...options }) =>
    new Promise((resolve, reject) => {
      const requestOptions = {
        method: "post",
        data: formData,
        headers: (formData.getHeaders && formData.getHeaders()) || {},
        ...options
      };
      request(requestOptions)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response));
    }),

  put: options =>
    new Promise((resolve, reject) => {
      const requestOptions = {
        method: "put",
        ...options
      };
      request(requestOptions)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response));
    }),

  putForm: ({ formData = {}, ...options }) =>
    new Promise((resolve, reject) => {
      const requestOptions = {
        method: "put",
        data: formData,
        headers: (formData.getHeaders && formData.getHeaders()) || {},
        ...options
      };
      request(requestOptions)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response));
    }),

  delete: options =>
    new Promise((resolve, reject) => {
      const requestOptions = {
        method: "delete",
        ...options
      };
      request(requestOptions)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response));
    }),

  getAll: (...requests) =>
    new Promise((resolve, reject) => {
      axios
        .all(requests.map(reqParams => request(reqParams)))
        .then(
          axios.spread((...list) => {
            resolve(list);
          })
        )
        .catch(error => {
          reject(error.response);
        });
    }),

  keyMap: (inputObject, keyMapping, outputObject = {}) => {
    const mappedObject = { ...outputObject };

    Object.entries(keyMapping).forEach(([outputKey, inputkey]) => {
      /**
       * Use Object prototype's hasOwnProperty method.
       * This will work even if the inputObject doesn't have any prototype methods.
       */
      if (Object.prototype.hasOwnProperty.call(inputObject, inputkey)) {
        mappedObject[outputKey] = inputObject[inputkey];
      } else {
        const mappingFunction = keyMapping[outputKey];
        if (typeof mappingFunction === "function") {
          mappedObject[outputKey] = mappingFunction(inputObject);
        }
      }
    });

    return mappedObject;
  }
};

module.exports = apiService;
