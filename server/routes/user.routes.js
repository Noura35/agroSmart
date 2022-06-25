const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');

const multer = require("multer");
const upload = multer();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddlware");

// auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);

// user display: 'block',
router.get('/',userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id",userController.updateUser);
router.delete('/:id',userController.deleteUser);
router.patch('/follow/:id',userController.follow);
router.patch('/unfollow/:id', userController.unfollow);
//profil
router.post('/profil', userController.AddProfil);
router.put("/profil/:id",userController.UpdateProfil);


//upload
router.post("/upload",upload.single('file'),uploadController.uploadProfil);





/*

const nodemailer = require("nodemailer");

router.post('/send', (req, res) => {

    const output = `
    <p>you have a new contact request</p>
    <h3>mail details</h3>
    <ul>
    <li>Name : ${req.name}</li>
    <li>email : ${req.email}</li>
    <li>company : ${req.company}</li>
    <li>message : ${req.message}</li>

    </ul>
    `;
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "foulenpfe@gmail.com", // generated ethereal user
            pass: "foulenPFE", // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    
    
    
    let mailOptions = {
        from: '"Nodemailer" <foulenpfe@gmail.com>', // sender address
        to: "belhadjamor.noura1999@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };
    // send mail with defined transport object
  
    
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
            
    });


})

*/


module.exports = router