const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema(

    {
    posterId: {
      type: String,
      required:true
        },      
    title: {
      type: String,
      minLength: 3,
      maxLength: 55,
   
    },
    picture: {
      type: String,
      default: "./uploads/zone/jardin.jpg"
    }
  },
  {
    timestamps: true,
  }
);

const ZoneModel = mongoose.model("zone", zoneSchema);
module.exports = ZoneModel;