const express = require("express");

const router = express.Router();
const { cookieFields } = require("../config/env-config");
const otpBasedAuthController = require("../controllers/otpBasedAuthController");

router.post("/v2/login", (req, res) => {
  const { userId, password } = req.body;
  if (!userId || !password) {
    return res.status(400).send({ error: "User Id or password missing" });
  }
  return otpBasedAuthController
    .loginAgent(res.locals.ptmCrm, userId, password)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.status(error ? error.status : 500).send(error);
    });
});

router.post("/v2/reset-password", (req, res) => {
  const {
    credentials: { userId, password },
    firstTimerToken
  } = req.body;
  return otpBasedAuthController
    .resetPassword(res.locals.ptmCrm, userId, password, firstTimerToken)
    .then(response => {
      res.send(response);
    })
    .catch(error => res.status(error ? error.status : 500).send(error.status));
});

router.post("/v2/verify-otp", (req, res) => {
  const { otp, initialToken } = req.body;
  return otpBasedAuthController
    .verifyOtp(res.locals.ptmCrm, initialToken, otp)
    .then(response => {
      res.send(response);
    })
    .catch(error => res.status(error ? error.status : 500).send(error.status));
});

router.post("/v2/logout", (req, res, next) => {
  const { user_id } = req.body;
  if (!user_id) {
    const err = new Error();
    err.status = 400;
    err.displayMessage = "User id is missing";
    return next(err);
  }
  return otpBasedAuthController
    .logoutAgent(user_id)
    .then(() => {
      res.clearCookie(cookieFields.SESSION_ID);
      res.clearCookie(cookieFields.INITIAL_TOKEN);
      res.status(200).send({ displayMessage: "logout is successfull" });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/v2/reload-session", (req, res) => {
  const appToken = req.cookies.app_t;
  if (!appToken) {
    return res.status(400).send({ error: "Token is missing" });
  }
  return otpBasedAuthController
    .reloadSession(res.locals.ptmCrm, appToken)
    .then(response => {
      return res.send(response);
    })
    .catch(error => res.status(error.status || 500).send(error));
});

module.exports = router;
