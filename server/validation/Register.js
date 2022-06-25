
const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRegister(data) {
  let errors = {};

 data.nom = !isEmpty(data.nom) ? data.nom : "";
 data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
 data.email = !isEmpty(data.email) ? data.email : "";
 data.password = !isEmpty(data.password) ? data.password : "";
 data.confirm = !isEmpty(data.confirm) ? data.confirm : "";

  if (validator.isEmpty(data.nom)) { // isEmpty one fct of validator
    errors.nom = "Le nom  est requis";
    }
 if (validator.isEmpty(data.prenom)) {
    errors.prenom = "Le prenom  est requis";
  }
  if (!validator.isEmail(data.email)) { // isEmail one fct of validator
    errors.email = "Respecter le format email";
    }
     if (validator.isEmpty(data.email)) {
    errors.email = "L'email  est requis";
  }
 
  if (validator.isEmpty(data.password)) {
    errors.password = "Le mot de passe  est requis";
    }
    
    if(!validator.equals(data.password,data.confirm))
    {
     errors.confirm = "Le mot de passe ne correspond pas";
    }

 if (validator.isEmpty(data.confirm)) {
    errors.confirm = "La confirmation  est requis";
  }


  return {
      errors,
      isValid: isEmpty(errors)
  }
};