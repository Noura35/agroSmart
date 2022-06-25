import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AddArticle = () => {

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [message, setMessage] = useState("");
  const[errors,setErrors]=useState({})
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const changeOnClick = e => {
    e.preventDefault();
    const articles = {
      title,
      article,
      authorname
    };
    setTitle("");
    setArticle("");
    setAuthorname("");
    axios
      .post('/api/articles', articles)
      .then(res => 
        {setMessage(res.data)
          navigate('/articles')
        })
      .catch(err=>setErrors(err.response.data))
      setValidated(true);
  };
  return (
    <div>
      <div className="container"  >
        <div>
          <h1 style={{ marginTop: "140px", color: "black" }}>CREER VOTRE BLOG</h1>
          <h5 style={{ marginTop: "10px", marginLeft: "22px", color: "#6dc068" }}>Cultivons nos données comme notre terre !</h5>
        </div>




        <p className="message  " style={{ marginTop: "30px", marginLeft: "22px", color: "success", padding: "10px" }}>{message}</p>

        <Form  className="emb" noValidate validated={validated} style={{ marginTop: "80px",textAlign:'center', padding: "40px", border: "solid #b6e0b4", borderRadius: "25px" }} onSubmit={changeOnClick} encType="multipart/form-data">

          <Form.Group className="mb-4" hasValidation>
            <Form.Control type="text" placeholder="Nom d'éditeur" htmlFor="authorname" style={{ border: " 3px solid c9ecf8" }} onChange={e => setAuthorname(e.target.value)} required />
            <Form.Control.Feedback type="invalid">authorname est requis</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" hasValidation>
            <Form.Control type="text" placeholder="Titre d'article " htmlFor="title" style={{ border: " 3px solid c9ecf8" }} onChange={e => setTitle(e.target.value)} required />
            <Form.Control.Feedback type="invalid">titre est requis </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" >
            <Form.Control as="textarea" rows={3} placeholder="Le contenu d'article " htmlFor="article" onChange={e => setArticle(e.target.value)} style={{ border: " 3px solid c9ecf8" }} required />
            <Form.Control.Feedback type="invalid">article est resquis</Form.Control.Feedback>
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" className='btn2' type="submit">Poster</Button>
            <Button variant="danger" className='btn3' type="reset">Annuler</Button>
          </div>
        </Form>




      </div>

    </div>

  );
}

export default AddArticle