const mongoose = require ('mongoose');
const Schema =mongoose.Schema ;

const EmbaucheSchema = new Schema({
    NomEmb : String,
    VilleEmb : String,
    Competences : String,
    Contact : Number 
   
},{timestamps:true})


module.exports=mongoose.model ('embauches', EmbaucheSchema)