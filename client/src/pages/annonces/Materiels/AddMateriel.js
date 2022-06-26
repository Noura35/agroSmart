import React, { useState } from "react";
import {Form } from 'react-bootstrap';
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  tracture from '../../images/tracture.jpg'
import  '../../../App.css'

function AddMateriel() {


    const [nom,setNom]=useState("");
    const [prix,setPrix]=useState("");
    const [description,setDescription]=useState("");
    const [tel,setTel]=useState("");
    const [fileName,setFileName]=useState({});
    const [message,setMessage]=useState("");
    const [validated, setValidated] = useState(false);
    const[errors,setErrors]=useState({})
    const navigate = useNavigate();
    const[show,setShow]=useState(false)



    const OnChangeFile = (e)=> {
      setFileName(e.target.files[0]);
    }
    
  const changeOnClick = e=>{
    e.preventDefault();
   const formData = new FormData ();
   formData.append("nom",nom);
   formData.append("prix",prix);
   formData.append("description",description);
   formData.append("tel",tel);
   formData.append("file",fileName);
   
    setNom("");
    setPrix("");
    setDescription("");
    setTel("");
    axios
    .post("/api/",formData)
    .then(res=>{
    setMessage(res.data.message)
    setShow(true)
    setTimeout(()=>{
    setShow(false)
    }, 4000);
  })
  .catch(err=>setErrors(err.response.data))
  setValidated(true);
    
    
  };


  return (

 <section className="container " >
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont2">
          <img src={tracture} className="w-100 h-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title2">Cher Agriculteur !</h3>

                  <p className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"13px",marginTop:"-30px"}}><span style={{ fontWeight: "bold" }}>Vous avez un équipement ?</span> <br />
                    <span style={{ fontWeight: "bold" }}>vous souhaitez le louer aux agriculteurs ?</span> <br /> AgroSmart vous donne l'occasion via ce plateforme pour le poster .<br/> Merci de complèter le formulaire ci-dessous pour poster votre materièl. </p>


              <Form  className="px-md-2" noValidate validated={validated} onSubmit={changeOnClick} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="file" filename="materielImage" className="form-control-file" onChange={OnChangeFile}  style={{ border: " 3px solid #def8ca" }} />
              <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" hasValidation>
              <Form.Control type="text" placeholder="Nom d'équipement" name="Nomeq" style={{ border: " 3px solid #def8ca" }} onChange={e=>setNom(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicmateriel">
              <Form.Control type="text" placeholder="Prix en TND" name="Priceeq" style={{ border: " 3px solid #def8ca" }} onChange={e=>setPrix(e.target.value)} required />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Control as="textarea" rows={3} placeholder="description d'équipement" name="Desceq" style={{ border: " 3px solid #def8ca" }} onChange={e=>setDescription(e.target.value)} required />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicmateriel">
              <Form.Control type="text" placeholder="Votre Tel" name="Teleq" style={{ border: " 3px solid #def8ca" }} onChange={e=>setTel(e.target.value)} required />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
                    
              <div style={{ display: "flex", justifyContent: "center" }}>
              <button  className='btn5' type="Submit" >Ajouter</button>
              <button  className='btn4' type="reset">Annuler</button>
            </div>                              
          </Form>

          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
   
</section>





  );
}
export default AddMateriel