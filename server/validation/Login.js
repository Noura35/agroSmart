const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLogin(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


  if (!validator.isEmail(data.email)) {
    errors.email = "Respecter le format email";
    }
     if (validator.isEmpty(data.email)) {
    errors.email = "L'email est requis";
  }
 
  if (validator.isEmpty(data.password)) {
    errors.password = "Le mot de passe est requis";
    }


  return {
      errors,
      isValid: isEmpty(errors)
  }
};