const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLogin(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


  if (!validator.isEmail(data.email)) {
    errors.email = "respecter le format emai";
    }
     if (validator.isEmpty(data.email)) {
    errors.email = "email requis";
  }
 
  if (validator.isEmpty(data.password)) {
    errors.password = "password requis";
    }


  return {
      errors,
      isValid: isEmpty(errors)
  }
};