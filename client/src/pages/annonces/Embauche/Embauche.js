import axios from "axios";
import React from "react";
import { useState } from "react";
import {Form}from 'react-bootstrap';
import "./Embauche.css";
import  tracture from '../../images/agriculteur.webp'
import '../../../App.css'
import { useNavigate } from "react-router-dom";

function Embauche () {
  const[form , setForm]=useState({})
  const[errors,setErrors]=useState({})
  const [validated, setValidated] = useState(false);
  const[message,setMessage]=useState("")
  const[show,setShow]=useState(false)
   const navigate = useNavigate()

  const onChangeHandler = (e)=>{
  setForm({
  ...form ,
  [e.target.name]:e.target.value
  });
  console.log(form)
};

const onSubmitHandler =(e)=>{
  e.preventDefault ();
  axios.post('/api/embauches',form)
  .then(res=>{
    setMessage(res.data.message)
    setShow(true)
    setTimeout(()=>{
    setShow(false)
    }, 4000);
  }).then(res=>{navigate('/annonces')})
  .catch(err=>setErrors(err.response.data))
  setValidated(true);
}
    return (
      <section className="container " >
             <div class="alert alert-success" role="alert"  style={{display:show? "block":"none" , marginTop:"100px"}}>
  {message}
  </div>
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont3">
          <img src={tracture} className="w-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem",height:"280px"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title3">Bienvenue !</h3>

<Form noValidate validated={validated} onSubmit={onSubmitHandler} >
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Control type="text" placeholder="Nom de poste"  name="NomEmb"  onChange={onChangeHandler} required/>
 <Form.Control.Feedback type="invalid">{errors.NomEmb} </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Control type="text" placeholder="Ville d'embauche" name="VilleEmb"  onChange={onChangeHandler} required/>
  <Form.Control.Feedback type="invalid">{errors.VilleEmb} </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" > 
    <Form.Control as="textarea" rows={3}  placeholder="Les compétences requises d'employé demandé" name="Competences"  onChange={onChangeHandler} required/>
    <Form.Control.Feedback type="invalid">{errors.Competences} </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicmateriel">
  <Form.Control type="text" placeholder="votre contact" name="Contact"   onChange={onChangeHandler} required />
  <Form.Control.Feedback type="invalid">{errors.Contact} </Form.Control.Feedback>
  </Form.Group>

  <div  style={{ display: "flex",justifyContent:"center" }}>
  <button   className='btn5' type="Submit">Envoyer</button>
  <button    className='btn4' type="reset">Annuler</button>
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
export default Embauche