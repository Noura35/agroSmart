import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import spinner from '../images/loading.gif';
import { dateParser } from '../../redux/util/util';

const Article = (props) => {

    console.log(props)


    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [createdAt, setcreatedAt] = useState("");
    let { id } = useParams();


    useEffect(() => {
        axios
            .get(`/api/articles/${id}`)
            .then(res => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorname(res.data.authorname),
                setcreatedAt(res.data.createdAt)

            ])
            .catch(error => console.log(error));
    }, [props]);


    return (
        <div>
            {!title || !article || !authorname ? <img src={spinner} alt='Loading...' style={{ display: "block", width: "120px", height: "120px", margin: "0 auto" }} /> :
                <div className='container'>
                    <h2 style={{ color: "green", textAlign: "center",margin:"100px auto 30px" }}>{title}</h2>
                    <p >{article}</p>
                    <span className="badge bg-secondary p-2" style={{marginTop:"20px"}}> by {authorname}</span>
                    <span><i style={{marginLeft:"670px",fontSize:"13px"}}>{dateParser(createdAt)}</i></span>
                  <br/>
                        <a type="button" href="/articles" class="btn btn-success" style={{ width: "max-content",marginLeft:"0px" ,marginTop:"40px"}}>retour aux articles</a>
                 
                </div>
            }
        </div>
    );


};

export default Article;
