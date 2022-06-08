import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import blogima from '../images/plantesb.webp'
import Navbar from './Navbar';
import spinner from '../images/spinner1.gif'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Articles = ({ posts,user }) => {

  const[article,setArticle]= useState([])

  //Delete article by id 
  const Deletearticle=id =>{
      axios
      .delete(`/api/articles/${id}`).then( res=>alert(res.data));
      setArticle(article.filter(elem => elem._id !== id));
  };

    return (
        <div>
            <h2 style={{ textAlign: "center", fontSize: "60px", color: "black", background: `url(${blogima})`, backgroundSize: "auto", padding: "170px", fontFamily:"monospace", marginBottom: "0px", color: "HighlightText" , backgroundSize:"cover"}}> Cultivons un peu !</h2>
            <Navbar user={user}/>

            {!posts.length ? <img src={spinner} alt="Loading..." style={{ display: "block", margin: "0 auto" }} /> :
                posts.map((article, key) => (

                    <div className='container' key={key}>
                       <Link  style={{textDecoration:"none"}} to={{
                            pathname: `/article/${article._id}`
                        }}>
                            <h2 style={{marginTop:"20px" , color:"green" , fontSize:""}}>{article.title}</h2>
                        </Link >
                        <p style={{ overflow: "hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"4", WebkitBoxOrient: "vertical"}}>{article.article}</p>
                        <span className="badge bg-secondary p-2"> by {article.authorname}</span>


            {
  
                user.role === 'ADMIN' ? (  <div className='row my-5' >
                            <div className='col-sm-2'>
                                <Link to= {`/articles/${article._id}`} className='btn btn-outline-success' style={{ width: "max-content" }} > Edit Article</Link>
                            </div>


                            <div className='col-sm-2'>
                                <a href="#" className='btn btn-outline-danger' style={{ width: "max-content" }}  onClick={() => Deletearticle (article._id)}> Delete Article</a>
                            </div>
                        </div>) : ""
              }                       
                      
                        <hr></hr>
                    </div>



                ))},
        </div>
    )
}

export default Articles;