const MaterielModel = require("../models/materiels");
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readMateriel = (req, res) => {
  MaterielModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};



module.exports.createMateriel = async (req, res) => {
  let fileName;

  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body.nom + Date.now() + ".jpg";

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../../client/public/uploads/materiels/${fileName}`
      )
    );
  }

  const newMateriel = new MaterielModel({
    materielImage: req.file !== null ? "/uploads/materiels/" + fileName : "",
    nom: req.body.nom,
    prix: req.body.prix,
    description: req.body.description,
    tel: req.body.tel,
   
  
  });

  try {
    const materiel = await newMateriel.save();
    return res.status(201).json(materiel);
  } catch (err) {
    return res.status(400).send(err);
  }
};



module.exports.updateMateriel = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
   
    nom: req.body.nom,
    prix: req.body.prix,
    description: req.body.description,
    tel: req.body.tel,
  };

  MaterielModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};



module.exports.deleteMateriel = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

 MaterielModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};