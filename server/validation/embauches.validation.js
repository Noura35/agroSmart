

const validator = require('validator'); 
const isEmpty= require('./isEmpty');


module.exports = function ValidateEmbauche (data){

    let errors ={};
    data.NomEmb = !isEmpty(data.NomEmb) ? data.NomEmb : "";
    data.VilleEmb = !isEmpty(data.VilleEmb) ? data.VilleEmb : "" ;
    data.Competences = !isEmpty(data.Competences) ? data.Competences : "" ;
    data.Contact = !isEmpty(data.Contact) ? data.Contact : "" ;
  


if(validator.isEmpty(data.NomEmb)){
    errors.NomEmb="Le nom d'embauche est requis";
}

if(validator.isEmpty(data.VilleEmb)){
    errors.VilleEmb="Le ville d'embauche est requis";
}

if(validator.isEmpty(data.Competences)){
    errors.Competences="Les compétences d'agriculteur sont requis";
}

if(validator.isEmpty(data.Contact)){
    errors.Contact="Le contact est requis";
}



 return {
    errors,
    isValid:isEmpty(errors)

}
}