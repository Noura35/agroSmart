const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema;
const { Schema } = mongoose;


const ContactModel = new ContactSchema(
    {
    user:
    {
    type: Schema.Types.ObjectId,
    ref: "users",
    },
        
    nom: 'String',
    prenom:'String',
    email: 'String',
    tel: 'String',
    message: 'String',

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Contacts', ContactModel);