const mongoose = require ('mongoose');
const Schema=mongoose.Schema;


const materielSchema = new Schema({
    materielImage:{type :String, required:true},
    nom:{ type :String , required:true},
    prix:{ type :String , required:true},
    description:{type :String , required:true},
    tel:{type :String,maxlength:8,required:true}
});

const Materiels = mongoose.model("Materiels",materielSchema );
module.exports= Materiels ;