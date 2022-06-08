const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

 data.nom = !isEmpty(data.nom) ? data.nom : "";
 data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
 data.role = !isEmpty(data.role) ? data.role : "";
 data.bio = !isEmpty(data.bio) ? data.bio : "";
 data.email = !isEmpty(data.email) ? data.email : "";

  if (validator.isEmpty(data.nom)) {
    errors.nom = "nom requis";
    }
 if (validator.isEmpty(data.prenom)) {
    errors.prenom = "prenom requis";
  }

     if (validator.isEmpty(data.role)) {
    errors.role = "role requis";
  }
 
  if (validator.isEmpty(data.bio)) {
    errors.bio = "bio requis";
  }
 
   if (validator.isEmpty(data.email)) {
    errors.email = "addresse requis";
  }
  return {
      errors,
      isValid: isEmpty(errors)
  }
};