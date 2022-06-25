var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();
const Materiels = require ('../models/materiels');


const materielController = require('../controllers/materiels.controller');

router.get('/' , materielController.readMateriel);


router.get("/materiels/:id",(req, res)=>{
    Materiels.findById(req.params.id)
    .then(materiel => res.json(materiel))
        .catch (err=> res.status(400).json(`Error : ${err}`));
}),
router.post('/' ,upload.single('file'), materielController.createMateriel);
router.put('/:id' , materielController.updateMateriel);
router.delete('/:id', materielController.deleteMateriel);







module.exports = router;