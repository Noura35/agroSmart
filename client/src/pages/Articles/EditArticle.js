import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  blog from '../images/blog.gif'
import '../../App.css'



function EditArticle(props) {
   const[errors,setErrors]=useState({})
  const [title,setTitle]=useState("");
  const [article,setArticle]=useState("");
  const [authorname,setAuthorname]=useState("");
  const [message, setMessage] = useState("");
   const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  

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
 .then(res => {
         navigate('/articles')
 })
    .catch(err => {
      setErrors(err.response.data)
    });
        setValidated(true);

};
useEffect(() => {
  axios
    .get(`/api/articles/${id}`)
    .then(res => [
      setTitle(res.data.title),
      setArticle(res.data.article),
      setAuthorname(res.data.authorname)

    ])
    .catch(err => console.log(err));
}, []);


  return (
<section className="container " >
   <div class="alert alert-success" role="alert"  >
  {message}
  </div>
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
        <img src={blog} className="w-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem",height:"280px"}} alt="Sample photo"/>
        <div className="card-body p-4 p-md-5">
         <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title">MODIFIER VOTRE BLOG</h3>

              <Form  noValidate validated={validated} onSubmit={changeOnClick} encType="multipart/form-data">
               

              <Form.Group className="mb-4" hasValidation>
                <Form.Control type="text" placeholder="Nom d'éditeur" htmlFor="authorname"  style={{border:" 3px solid c9ecf8"}} value={authorname} onChange={e=>setAuthorname(e.target.value)} required />
                <Form.Control.Feedback type="invalid">{errors.authorname}</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-4" hasValidation>
                <Form.Control type="text" placeholder="Titre d'article " htmlFor="title"  style={{border:" 3px solid c9ecf8"}}  value={title} onChange={e=>setTitle(e.target.value)} required />
                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" >
                <Form.Control as="textarea" rows={3} placeholder="Le contenu d'article " htmlFor="article"  value={article} onChange={e=>setArticle(e.target.value)}  style={{border:" 3px solid c9ecf8"}}  required />
                <Form.Control.Feedback type="invalid">{errors.article}</Form.Control.Feedback>
              </Form.Group>

                 <div style={{ display: "flex", justifyContent: "center" }}>
                    <button  type="Submit">Modifier</button>
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

export default EditArticle