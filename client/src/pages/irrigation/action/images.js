import axios from 'axios';

export const FindAll = async (setImage) => {
    axios.get("/api/zones")
        .then((res) => {
        setImage(res.data)
        })
        .catch(err => {
         console.log(err.message)
    })
}

export const Add = async (formDate,setImage,setErrors) => {
    axios.post("/api/zones",formDate)
        .then((res) => {
            setImage(res.data)
            setErrors({})
            
        })
        .catch(err => {
            setErrors(err.response.data)
        })
}

export const Delete = async (id,setImage) => {
    if (window.confirm("do you want to delete this image ?")) {
        axios.delete(`/api/zones/${id}`)
        .then((res) => {
            setImage(res.data)
            
        })
        .catch(err => {
            console.log(err.message)
        })
   }
}