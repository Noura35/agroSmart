import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import spinner from '../images/spinner1.gif';

const Article = (props) => {

    console.log(props)


    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    let { id } = useParams();


    useEffect(() => {
        axios
            .get(`/api/articles/${id}`)
            .then(res => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorname(res.data.authorname)

            ])
            .catch(error => console.log(error));
    }, [props]);


    return (
        <div>
            {!title || !article || !authorname ? <img src={spinner} alt='Loading...' style={{ display: "block", margin: "0 auto" }} /> :
                <div className='container'>
                    <h2 style={{ color: "green", textAlign: "center",margin:"100px auto 30px" }}>{title}</h2>
                    <p >{article}</p>
                    <span className="badge bg-secondary p-2"> by {authorname}</span>
                  <br/>
                        <a type="button" href="/articles" class="btn btn-success" style={{ width: "max-content",marginLeft:"0px" ,marginTop:"40px"}}>retour aux articles</a>
                 
                </div>
            }
        </div>
    );


};

export default Article;
