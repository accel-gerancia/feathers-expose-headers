// From https://raw.githubusercontent.com/feathersjs/authentication/master/lib/express/expose-headers.js
module.exports = function () {
  return function exposeHeaders (req, res, next) {
    req.feathers.headers = req.headers;
    next();
  };
};
