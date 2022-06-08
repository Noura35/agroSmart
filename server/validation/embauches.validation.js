

const validator = require('validator'); 
const isEmpty= require('./isEmpty');


module.exports = function ValidateEmbauche (data){

    let errors ={};
    data.NomEmb = !isEmpty(data.NomEmb) ? data.NomEmb : "";
    data.VilleEmb = !isEmpty(data.VilleEmb) ? data.VilleEmb : "" ;
    data.Competences = !isEmpty(data.Competences) ? data.Competences : "" ;
    data.Contact = !isEmpty(data.Contact) ? data.Contact : "" ;
  

   // if(!validator.isEmail(data.Email)){
       // errors.Email=" Format required Email";
   // }

if(validator.isEmpty(data.NomEmb)){
    errors.NomEmb="required nameEmb";
}

if(validator.isEmpty(data.VilleEmb)){
    errors.VilleEmb="required VilleEmb";
}

if(validator.isEmpty(data.Competences)){
    errors.Competences="required Competences";
}

if(validator.isEmpty(data.Contact)){
    errors.Contact="required Contact";
}



 return {
    errors,
    isValid:isEmpty(errors)

}
}