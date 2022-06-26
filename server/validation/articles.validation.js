
const validator = require('validator'); 
const isEmpty= require('./isEmpty');


module.exports = function ValidateArticle (data){

    let errors ={};
    data.title = !isEmpty(data.title) ? data.title : "";
    data.article = !isEmpty(data.article) ? data.article : "" ;
    data.authorname = !isEmpty(data.authorname) ? data.authorname : "" ;
   



if(validator.isEmpty(data.title)){
    errors.title="Le titre est requis";
}

if(validator.isEmpty(data.article)){
    errors.article="L'article est requis";
}

if(validator.isEmpty(data.authorname)){
    errors.authorname="L'auteur est requis";
}





 return {
    errors,
    isValid:isEmpty(errors)

}
}