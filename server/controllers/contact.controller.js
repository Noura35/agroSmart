const ContactModel = require('../models/contact.models');
const ValidateContact = require('../validation/contact');

const AddContact = async (req, res) => {
    try {
        const { isValid, errors } = ValidateContact(req.body);
        if (!isValid) {

            res.status(404).json(errors);
            
        } else {
               ContactModel.findOne({ user: req.user.id })
              .then(async (Contact) => {
                if (!Contact) {
                      req.body.user = req.user.id
                      await ContactModel.create(req.body);
                      res.status(200).json({message:"success"})
                
                } else {
                     await ContactModel.findByIdAndUpdate(
                        { _id: Contact._id },
                          req.body,
                        { new:true},   
                    ).then(result => {
                        res.status(200).json(result)
                    })
                     }
            })
 
        }

    } catch (error){
      res.status(404).json(error.message) 
    }
}


const FindAllContacts = async (req,res) => {

    try {
        const data = await ContactModel.find().populate('user',["nom","prenom","email","tel","message"])
        res.status(200).json(data)
    } catch (error) {
       res.status(404).json(error.message) 

    }
}

const FindSingleContact = async (req,res) => {
   
    try {
        const data = await ContactModel.findOne({user:req.user.id}).populate('user',["nom","prenom","email","tel","message"])
        res.status(200).json(data)
    } catch (error) {
       res.status(404).json(error.message) 
    }
}

const DeleteContact = async (req,res) => {
    try {
        const data = await ContactModel.findOneAndRemove({_id:req.params.id})
        res.status(200).json({message:"deleted"})
    } catch (error) {
       res.status(404).json(error.message) 
    }
}

module.exports = {
    AddContact,
    FindAllContacts,
    FindSingleContact,
    DeleteContact
}