import axios from 'axios';
import React from 'react'
import blogimak from '../../images/gros.webp'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function EditMateriel(props) {

    console.log(props)
 
    const [nom,setNom]=useState("");
    const [prix,setPrix]=useState("");
    const [description,setDescription]=useState("");
   const [tel, setTel] = useState("");
   const [fileName,setFileName]=useState("");
    const [message,setMessage]=useState("");
  let { id } = useParams();
  
   const OnChangeFile = (e) => {
        setFileName(e.target.files[0]);
      };
    
    const changeOnClick = e=>{
        e.preventDefault();
     
      const formData = new FormData();
      
   formData.append("nom",nom);
   formData.append("prix",prix);
   formData.append("description",description);
   formData.append("tel",tel);
   formData.append("materielImage", fileName);
      
  
   
    axios
    .put(`/api/materiels/${id}`,formData)
    .then(res=>setMessage(res.data))
    .catch(err=>{
      console.log(err);
    });
  };
  useEffect(() => {
      axios
          .get(`/api/materiels/${id}`)
          .then((res) => [
              setNom(res.data.nom),
              setPrix(res.data.prix),
              setDescription(res.data.description),
            setTel(res.data.tel),
            setFileName(res.data.materielImage),
  

  
          ])
          .catch(error => console.log(error));
  }, [`${id}`]);
  


  return (
    <div className="containerss" style={{ background: `url(${blogimak})`, backgroundSize: "cover", padding: "5px", opacity: ".7" }} >
    <div className="row">
      <div className="col">
      <p className="message" style={{marginTop:"0px",marginLeft:"22px" ,color:"black" , padding:"10px"}}>{message}</p>

        <Form className="emb"  style={{ marginTop: "150px", backgroundColor: "white", border: "solid green", borderRadius: "25px", opacity: "0.9" }}  onSubmit={changeOnClick} encType="multipart/form-data">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="file" name="materielImage" onChange={OnChangeFile}  style={{ border: " 3px solid #def8ca" }} encType="multipart/form-data"/>
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Nom d'équipement" name="Nomeq" style={{ border: " 3px solid #def8ca" }} value={nom} onChange={e=>setNom(e.target.value)}rerquired />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Prix en TND" name="Priceeq" style={{ border: " 3px solid #def8ca" }} value={prix} onChange={e=>setPrix(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Control as="textarea" rows={3} placeholder="description d'équipement" name="Desceq" style={{ border: " 3px solid #def8ca" }} value={description} onChange={e=>setDescription(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Votre Tel" name="Teleq" style={{ border: " 3px solid #def8ca" }}  value={tel} onChange={e=>setTel(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" className='btn2' type="Submit" >Envoyer</Button>
            <Button variant="danger" className='btn3' type="reset">Annuler</Button>
          </div>

        </Form>
      </div>
      <div className="col">
        <div style={{width:"450px"}}>
        <p style={{marginTop:"250px",fontWeight:"bold" }}><p style={{fontWeight:"bold" , color:"green" , fontSize:"20px"}}>Cher Agriculteur ! </p>Vous avez un équipement ? vous souhaitez le louer aux agriculteurs ! AgroSmart vous donne l'occasion via ce plateforme pour le poster . Merci de complèter le formulaire ci-joint pour poster votre materièl. 
        </p>
        </div>
      </div>
    </div>

  </div>




);
}

export default EditMateriel