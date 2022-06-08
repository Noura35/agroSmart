const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateImage(req) {
  let errors = {};

 req.body.title= !isEmpty(req.body.title) ? req.body.title : "";
 req.file = !isEmpty(req.file) ? req.file : "";
 

  if (validator.isEmpty(req.body.title)) {
    errors.title = "title requis";
    }
 if (!req.file.filename) {
    errors.image = "image requis";
  }

  
  return {
      errors,
      isValid: isEmpty(errors)
  }
};