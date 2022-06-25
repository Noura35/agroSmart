const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
      prenom: {
      type: String,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      max: 1024,
      minlength: 6
    },
    
     role: {
       type: String,
       default:'USER'
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    bio :{
      type: String,
      max: 1024,
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    }
  },
  {
    timestamps: true,
  }
);



const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;