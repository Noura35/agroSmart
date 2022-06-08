module.exports.signUpErrors = (err) => {
  let errors = { nom: "",prenom: "", email: "", password: "" };

  if (err.message.includes("nom"))
        errors.nom = "nom incorrect ou déjà pris";
 if (err.message.includes("prenom"))
    errors.prenom = "prenom incorrect ou déjà pris";


  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minium";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("nom"))
        errors.nom = "Ce nom est déjà pris";
    
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("prenom"))
    errors.prenom = "Ce prenom est déjà pris";


  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: '', password: '' }

  if (err.message.includes("email"))
    errors.email = "Email inconnu";
  
  if (err.message.includes('password'))
    errors.password = "Le mot de passe ne correspond pas"

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: '', maxSize: '' };

  if (err.message.includes("invalid file"))
    errors.format = "format incompatible";
  
  if (err.message.includes('max size'))
    errors.maxSize = "le fichier dépasse 500 Ko";

  return errors;
}