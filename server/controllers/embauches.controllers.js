const embauches = require ('../models/embauches.models')
const ValidateEmbauche = require('../validation/embauches.validation')

const AddEmbauche = async (req,res)=>{

    const{errors,isValid}=ValidateEmbauche(req.body)

    try{
        if(!isValid){
            res.status(404).json(errors)
        }else{
            await embauches.create(req.body)
            res.status(201).json({message: 'annonce added with access'})
        }
       
    }
    catch(error){
    console.log(error.message)
    }
};

const FindAllEmbauches = async (req,res)=>{
    try{
        const data = await embauches.find()
        res.status(201).json(data)
    }
    catch(error){
    console.log(error.message)
}
}

const FindSinglEmbauche = async (req,res)=>{
    try{
        const data = await embauches.findOne({_id:req.params.id})
        res.status(201).json(data)
    }
    catch(error){
    console.log(error.message)
}
}


const UpdateEmbauche = async (req, res) => {
    const { errors, isValid } = ValidateEmbauche(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
   
    
            const data = await embauches.findOneAndUpdate({ _id: req.params.id },
                req.body,
                { new: true }
            )
            res.status(201).json(data)
    
        }
    }catch(error){
    console.log(error.message)
    }
}

const DeleteEmbauche = async (req,res)=>{
    try{
        await embauches.findOneAndRemove({_id:req.params.id})
        res.status(201).json({message:'Annonce deleted with success'})
    }
    catch(error){
    console.log(error.message)
}
}

module.exports={
    AddEmbauche,
    FindAllEmbauches,
    FindSinglEmbauche,
    UpdateEmbauche,
    DeleteEmbauche


}