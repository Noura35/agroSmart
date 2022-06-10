import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import blog from '../images/blogging_picture.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';




function EditArticle(props) {
    console.log(props)
 
  const [title,setTitle]=useState("");
  const [article,setArticle]=useState("");
  const [authorname,setAuthorname]=useState("");
  const [message, setMessage] = useState("");
  
  

  let { id } = useParams();
  
const changeOnClick = e=>{
  e.preventDefault();
  const articles ={
    title,
    article,
    authorname
  };
  axios
  .put(`/api/articles/${id}`,articles)
  .then(res=>setMessage(res.data))
  .catch(err=>{
    console.log(err);
  });
};
useEffect(() => {
    axios
        .get(`/api/articles/${id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorname(res.data.authorname)

        ])
        .catch(error => console.log(error));
}, []);


  return (
    <div>
      <div className="container"  >
        <div>
        <h1 style={{ marginTop: "120px", color: "black" }}>MODIFIER VOTRE BLOG</h1>
        <h5 style={{marginTop:"10px" , marginLeft:"22px" , color:"#6dc068"}}>Cultivons nos données comme notre terre !</h5>
        </div>
        
      <div className='row'>
          <div className='col' >
          <p className="message " style={{marginTop:"30px",marginLeft:"22px" ,color:"red" , padding:"10px"}}>{message}</p>

            <Form  style={{ marginTop: "60px", marginLeft: "6px" , padding:"40px" ,border: "solid #b6e0b4" , borderRadius:"25px"}} onSubmit={changeOnClick} encType="multipart/form-data">
               
              <Form.Group className="mb-4" >
                <Form.Control type="file" size="lg"  style={{border:" 3px solid c9ecf8"}}/>
                <Form.Control.Feedback type="invalid"> </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" hasValidation>
                <Form.Control type="text" placeholder="Nom d'éditeur" htmlFor="authorname"  style={{border:" 3px solid c9ecf8"}} value={authorname} onChange={e=>setAuthorname(e.target.value)} required />
                <Form.Control.Feedback type="invalid"> </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-4" hasValidation>
                <Form.Control type="text" placeholder="Titre d'article " htmlFor="title"  style={{border:" 3px solid c9ecf8"}}  value={title} onChange={e=>setTitle(e.target.value)} required />
                <Form.Control.Feedback type="invalid"> </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" >
                <Form.Control as="textarea" rows={3} placeholder="Le contenu d'article " htmlFor="article"  value={article} onChange={e=>setArticle(e.target.value)}  style={{border:" 3px solid c9ecf8"}}  required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="primary" className='btn2' type="submit">Poster</Button>
                <Button variant="danger" className='btn3' type="reset">Annuler</Button>
              </div>
            </Form>
          </div>
          <div className='col'>
          <img src={blog} style={{marginTop:"80px" , width:"150%" , marginLeft:"100px"}}/>
          </div>
          </div>
        </div>
      </div>
 
  );
}

export default EditArticle