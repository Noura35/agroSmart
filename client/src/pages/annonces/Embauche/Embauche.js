import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button,Form}from 'react-bootstrap';
import "./Embauche.css";
import blogimak from '../../images/travail.jpg'

function Embauche () {
  const[form , setForm]=useState({})
  const[errors,setErrors]=useState({})
  const [validated, setValidated] = useState(false);
  const[message,setMessage]=useState("")
  const[show,setShow]=useState(false)

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
  })
  .catch(err=>setErrors(err.response.data))
  setValidated(true);
}
    return (
      
      <div  style={{ background: `url(${blogimak})`, backgroundSize: "cover", padding: "5px", opacity: ".8" }}>
        <div class="alert alert-success" role="alert"  style={{display:show? "block":"none" , marginTop:"100px"}}>
  {message}
  </div>
     
<Form className="emb" noValidate validated={validated} onSubmit={onSubmitHandler} style={{ marginTop: "150px", backgroundColor: "white", border: "solid green", borderRadius: "25px", opacity: "0.9" }}>
 
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
  <Button  variant="primary"  className='btn2' type="Submit">Envoyer</Button>
  <Button   variant="danger"  className='btn3'>Annuler</Button>
  </div>
</Form>
</div>

    );
}
export default Embauche