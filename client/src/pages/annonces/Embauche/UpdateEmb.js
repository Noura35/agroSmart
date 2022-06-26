import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import  embauche from '../../images/agriculteur.webp'
import '../../../App.css'
import "./Embauche.css";

function UpdateEmb () {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("")
    const[show,setShow]=useState(false)
    let { id } = useParams();
    const navigate = useNavigate()


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`/api/embauches/cardembauche/${id}`, form)
            .then(res => {
                navigate('/annonces')
            })
            .catch(err => {
                setErrors(err.response.data)
            })
             setValidated(true);


    }

    useEffect(() => {
        axios.get(`/api/embauches/cardembauche/${id}`)
            .then((res) => {
        setForm(res.data);
            })
            .catch(err => console.log(err));

    }, []);

    return (
  <section className="container " >
   <div class="alert alert-success" role="alert"  style={{display:show? "block":"none" , marginTop:"100px"}}>
  {message}
  </div>
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
        <img src={embauche} className="w-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem",height:"280px"}} alt="Sample photo"/>
        <div className="card-body p-4 p-md-5">

              <Form noValidate validated={validated} onSubmit={onSubmitHandler} >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nom de poste" name="NomEmb" value={form.NomEmb} onChange={onChangeHandler} required />
                    <Form.Control.Feedback type="invalid">{errors.NomEmb} </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Ville d'embauche" name="VilleEmb" value={form.VilleEmb} onChange={onChangeHandler} required />
                    <Form.Control.Feedback type="invalid">{errors.VilleEmb} </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Control as="textarea" rows={3} placeholder="Les compétences requises d'employé demandé" name="Competences" value={form.Competences} onChange={onChangeHandler} required />
                    <Form.Control.Feedback type="invalid">{errors.Competences} </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicmateriel">
                    <Form.Control type="text" placeholder="votre contact" name="Contact" value={form.Contact} onChange={onChangeHandler} required />
                    <Form.Control.Feedback type="invalid">{errors.Contact} </Form.Control.Feedback>
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="Submit">Modifier</button>
                    <button  className='btn4' type='reset'>Annuler</button>
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


export default UpdateEmb