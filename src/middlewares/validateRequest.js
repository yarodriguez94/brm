const { validationResult } = require("express-validator");

const validateRequest = (req, resp , next ) => {

   const params =  validationResult(req)  
  if (!params.isEmpty()) {
    return resp.status(400).json(params);
  }

  next();
};

module.exports = {

    validateRequest,
}