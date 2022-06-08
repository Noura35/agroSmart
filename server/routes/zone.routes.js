var express = require('express');
var router = express.Router();
const multer = require("multer");
var upload = multer();
const passport = require("passport");

const zoneController = require('../controllers/zone.controller');

router.get('/' , zoneController.readZone);
router.post('/' , upload.single('file'),zoneController.createZone);
router.put('/:id' , zoneController.updateZone);
router.delete('/:id', zoneController.deleteZone);


module.exports = router;
