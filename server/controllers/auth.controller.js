const UserModel = require("../models/users.models");
const ValidateRegister = require("../validation/Register");
const ValidateLogin = require("../validation/Login");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')



module.exports.signUp = async (req, res) => {
   const { errors, isValid } = ValidateRegister(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      UserModel.findOne({ email: req.body.email }).then(async(exist) => {
        if (exist) {
          errors.email = "user exist";
          res.status(404).json(errors);
        } else {
          const hash = bcrypt.hashSync(req.body.password, 10)//hashed password and salt=10
          req.body.password = hash;
          req.body.role = "USER";
          await UserModel.create(req.body);
          res.status(200).json({ message: "success" });
        }
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports.signIn = async (req, res) => {
 const {errors,isValid} =ValidateLogin(req.body)
  try {
   
    if (!isValid) {
      res.status(404).json(errors)
      
    } else {
       UserModel.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
         errors.email="L'utilisateur n'existe pas"
        res.status(404).json(errors)
        } else {

          bcrypt.compare(req.body.password,user.password)
            .then((isMatch) => {
              if (!isMatch) {
                errors.password = 'Le mot de passe est incorrect ! ';
                res.status(404).json(errors)
              } else {
                var token = jwt.sign({ // return jwt_payload
                      id: user._id,
                      nom: user.nom,
                      prenom: user.prenom,
                      email: user.email,
                      role:user.role,
                   
                }, process.env.PRIVATE_KEY,{expiresIn:'1h'});
                  res.status(200).json({
                  message: 'success',
                  token:"Bearer " + token
                })
              }
              
          })
        }
    })
    }
  } catch (error) {
        res.status(404).json(error.message);
   }
}

