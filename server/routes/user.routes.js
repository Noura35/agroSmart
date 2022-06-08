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



/****** Contact routes *******/

const { AddContact, FindSingleContact, DeleteContact, FindAllContacts } = require('../controllers/contact.controller');

//add Contacts
router.post('/contacts',
AddContact);

//get list of Contacts
router.get('/contacts/showall',
passport.authenticate('jwt', { session: false }),
inRole(ROLES.ADMIN),
FindAllContacts);

//get one Contact
router.get('/contacts/showone',
passport.authenticate('jwt', { session: false }),
FindSingleContact);

//delete Contact
router.delete('/contacts/:id',
passport.authenticate('jwt', { session: false }),
inRole(ROLES.ADMIN),
DeleteContact);




module.exports = router;