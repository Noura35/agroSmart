
const express = require('express');
const multer=require("multer")
const router = express.Router();
const Materiels = require('../models/materiels');
/*
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../client/public/uploads/materiels");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})



const upload=multer({storage:storage});


//Request get all materiels
router.get('/materiels', (req, res) => {
    Materiels.find()
        .then(materiel => res.json(materiel))
        .catch(err => res.status(400).json(`Err: ${err}`))
});


//request add new materiel
router.post('/materiels',upload.single("materielImage"), (req, res) => {
    const newMateriel = new Materiels({
        nom: req.body.nom,
        prix: req.body.prix,
        description: req.body.description,
        tel: req.body.tel,
        materielImage:req.file.originalname ,
    });
    newMateriel
        .save()
        .then(() => res.json(" The new materiel posted successfuly !!"))
        .catch(err => res.status(400).json(`Err: ${err}`));

});

//request find materiel by id 
router.get("/materiels/:id", (req, res) => {
    Materiels.findById(req.params.id)
        .then(materiel => res.json(materiel))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

// request find and update materiel 
router.put("/materiels/:id",upload.single("materielImage"), (req, res) => {
    Materiels.findById(req.params.id)
        .then(materiel => {
            materiel.nom = req.body.nom;
            materiel.prix = req.body.prix;
            materiel.description = req.body.description;
            materiel.tel = req.body.tel;
            materiel.materielImage = req.file.originalname;
            materiel
                .save()
                .then(() => res.json("The materiel is Updated successfully !"))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});
*/
// request find by id and delete 
router.delete("/materiels/:id", (req, res) => {
    Materiels.findByIdAndDelete(req.params.id)
        .then(() => res.json("The materiel was deleted !"))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

module.exports = router;