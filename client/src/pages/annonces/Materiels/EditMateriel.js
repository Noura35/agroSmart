import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  tracture from '../../images/tracture.jpg'
import  '../../../App.css'
function EditMateriel(props) {

 
    const [nom,setNom]=useState("");
    const [prix,setPrix]=useState("");
    const [description,setDescription]=useState("");
   const [tel, setTel] = useState("");
   const [fileName,setFileName]=useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const[errors,setErrors]=useState({})



  const navigate = useNavigate();

  let { id } = useParams();

   const [form, setForm] = useState({});

  
  

  
  
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
   .then(res => {
      navigate('/materiels')
       })
  .catch(err=>setErrors(err.response.data))
  setValidated(true);
    
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
<section className="container " >
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <img src={tracture} className="w-100 h-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">

                  
          <Form   noValidate validated={validated} onSubmit={changeOnClick} encType="multipart/form-data">

  

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Nom d'??quipement" htmlFor="nom" style={{ border: " 3px solid #def8ca" }} value={nom} onChange={e=>setNom(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Prix en TND" htmlFor="prix" style={{ border: " 3px solid #def8ca" }} value={prix} onChange={e=>setPrix(e.target.value)} required />
            <Form.Control.Feedback type="invalid">{errors.prix}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Control as="textarea" rows={3} placeholder="description d'??quipement" htmlFor="description" style={{ border: " 3px solid #def8ca" }} value={description} onChange={e=>setDescription(e.target.value)}  />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmateriel">
            <Form.Control type="text" placeholder="Votre Tel" htmlFor="tel" style={{ border: " 3px solid #def8ca" }}  value={tel} onChange={e=>setTel(e.target.value)} required />
            <Form.Control.Feedback type="invalid">{errors.tel}</Form.Control.Feedback>
          </Form.Group>

             <div style={{ display: "flex", justifyContent: "center" }}>
              <button  type="Submit" >Modifier</button>
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

export default EditMateriel