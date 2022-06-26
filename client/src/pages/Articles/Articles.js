import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import blogima from '../images/plantesb.webp'
import Navbar from './Navbar';
import spinner from '../images/loading.gif'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { dateParser } from '../../redux/util/util';

const Articles = ({ posts,user }) => {

  const[article,setArticle]= useState([])

  //Delete article by id 
  const Deletearticle=id =>{
    if (window.confirm("vous etes sur de supprimer cet article !")){
      axios
      .delete(`/api/articles/${id}`);
      setArticle(article.filter(elem => elem._id !== id));
    }
  };

    return (
        <div>
            <h2 style={{ textAlign: "center", fontSize: "80px", color: "black", background: `url(${blogima})`, backgroundSize: "auto", padding: "170px", fontFamily: "satisfy", marginBottom: "0px", color: "HighlightText" , backgroundSize:"cover"}}> Cultivons un peu !</h2>
            <Navbar user={user}/>

            {!posts.length ? <img src={spinner} alt="Loading..." style={{ display: "block", width: "120px", height: "120px", margin: "0 auto" }}/> :
                posts.map((article, key) => (

                    <div className='container' style={{width:"1000px"}} key={key}>
                       <Link  style={{textDecoration:"none"}} to={{
                            pathname: `/article/${article._id}`
                        }}>
                            <h2 style={{marginTop:"20px" , color:"green" , fontFamily:"lobster"}}>{article.title}</h2>
                        </Link >
                        <p style={{ overflow: "hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"4", WebkitBoxOrient: "vertical"}}>{article.article}</p>
                        <span className="badge bg-secondary p-2" style={{marginTop:"20px"}}> by {article.authorname}</span>
                        <span><i style={{marginLeft:"670px",fontSize:"13px"}}>{dateParser(article.createdAt)}</i></span>
                    
                        
                            {  user.role === 'ADMIN'? ( <div  style={{ display: "flex" ,margin:"30px 0"}}>
                            <Link to= {`/articles/${article._id}`} >
                            <button     className='btn btn-outline-success' type="submit" style={{ width: "max-content", borderRadius:"20px" }}>Modifier</button>
                            </Link>
                            <button  className='btn btn-outline-danger' style={{ width: "max-content", borderRadius:"20px" }} type="reset"  onClick={() => Deletearticle (article._id)}>Supprimer</button>
                            </div>) : " "}
                      
                        <hr></hr>
                    </div>



                ))},
        </div>
    )
}

export default Articles;