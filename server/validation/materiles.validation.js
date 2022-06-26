

const validator = require('validator'); 
const isEmpty= require('./isEmpty');


module.exports = function ValidateMateriel(data){

    let errors ={};
    data.nom = !isEmpty(data.nom) ? data.nom : "";
    data.prix = !isEmpty(data.prix) ? data.prix : "" ;
    data.description = !isEmpty(data.description) ? data.description : "" ;
    data.tel = !isEmpty(data.tel) ? data.tel : "" ;
  


if(validator.isEmpty(data.nom)){
    errors.nom="Le nom de matériel est requis";
}

if(validator.isEmpty(data.prix)){
    errors.prix="Le prix est requis";
}

if(validator.isEmpty(data.description)){
    errors.description="La description de materiel est requis";
}

if(validator.isEmpty(data.tel)){
    errors.tel="Le contact est requis";
}



 return {
    errors,
    isValid:isEmpty(errors)

}
}