const { cookieFields } = require('./../config/env-config');

function setupReqLocals(req, res, next) {
	res.locals.loggedInUser = req.cookies[cookieFields.USER_ID];
	next();
}

module.exports = {
	setupReqLocals,
};
