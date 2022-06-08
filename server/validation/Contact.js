const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateContact(data) {
  let errors = {};

 data.nom = !isEmpty(data.nom) ? data.nom : "";
 data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
 data.email = !isEmpty(data.email) ? data.email : "";
 data.tel = !isEmpty(data.tel) ? data.tel : "";
 data.message = !isEmpty(data.message) ? data.message : "";
  
  if (validator.isEmpty(data.nom)) {
    errors.nom = "nom requis";
    }
 if (validator.isEmpty(data.prenom)) {
    errors.prenom = "prenom requis";
  }
   if (!validator.isEmail(data.email)) {
    errors.email = "respecter le format email";
    }
     if (validator.isEmpty(data.email)) {
    errors.email = "email requis";
  }
 
  if (validator.isEmpty(data.tel)) {
    errors.tel = "tel requis";
    }
  if (validator.isEmpty(data.message)) {
    errors.message = "message requis";
  }
 
  return {
      errors,
      isValid: isEmpty(errors)
  }
};