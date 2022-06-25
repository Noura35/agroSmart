import axios from 'axios';
import React from 'react'
import blogimak from '../../images/gros.webp'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function EditMateriel(props) {

    console.log(props)
 
    const [nom,setNom]=useState("");
    const [prix,setPrix]=useState("");
    const [description,setDescription]=useState("");
   const [tel, setTel] = useState("");
   const [fileName,setFileName]=useState("");
    const [message,setMessage]=useState("");
    const navigate = useNavigate()

  let { id } = useParams();
  
   const OnChangeFile = (e) => {
        setFileName(e.target.files[0]);
      };
    
      const changeOnClick = e => {
        e.preventDefault();
        const materiels = {
          nom,
          prix,
          description,
          tel
        };
        axios
  .put(`/api/${id}`,materiels)
  .then(res=>
    {setMessage(res.data)
      navigate('/materiels')
    })
  .catch(err=>{
    console.log(err);
  });
};
useEffect(() => {
    axios
        .get(`/api/materiels/${id}`)
        .then(res => [
            setNom(res.data.nom),
            setPrix(res.data.prix),
            setDescription(res.data.description),
            setTel(res.data.tel),

        ]
        )
        .catch(error => console.log(error));
}, []);

  return (
    <div className="containerss" style={{ background: `url(${blogimak})`, backgroundSize: "cover", padding: "5px", opacity: ".9" }} >
    <div className="row">
      <div className="col">
      <p className="message" style={{marginTop:"0px",marginLeft:"22px" ,color:"black" , padding:"10px"}}>{message}</p>

        <Form className="emb"  style={{ marginTop: "150px", backgroundColor: "white", border: "solid green", borderRadius: "25px", opacity: "0.9" }}   onSubmit={changeOnClick} encType="multipart/form-data">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="file" name="materielImage" onChange={OnChangeFile}
              style={{ border: " 3px solid #def8ca" }} encType="multipart/form-data"/>
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Nom d'équipement" htmlFor="nom" style={{ border: " 3px solid #def8ca" }} value={nom} onChange={e=>setNom(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Prix en TND" htmlFor="prix" style={{ border: " 3px solid #def8ca" }} value={prix} onChange={e=>setPrix(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Control as="textarea" rows={3} placeholder="description d'équipement" htmlFor="description" style={{ border: " 3px solid #def8ca" }} value={description} onChange={e=>setDescription(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Votre Tel" htmlFor="tel" style={{ border: " 3px solid #def8ca" }}  value={tel} onChange={e=>setTel(e.target.value)} required />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" className='btn2' type="submit" >Envoyer</Button>
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