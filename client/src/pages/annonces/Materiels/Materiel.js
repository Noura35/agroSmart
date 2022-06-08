import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import spinner from '../../images/spinner1.gif';

const Materiel = (props) => {

    console.log(props)


    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [tel, setTel] = useState("");
   const [fileName,setFileName]=useState({});
    let { id } = useParams();


    useEffect(() => {
        axios
            .get(`/api/materiels/${id}`)
            .then(res => [
                setNom(res.data.nom),
                setPrix(res.data.prix),
                setDescription(res.data.description),
                setTel(res.data.tel),
                setFileName(res.data.materielImage),

            ])
            .catch(error => console.log(error));
    }, [props]);




    return (
        <div className='containerss'>
            {!nom || !prix || !description || !tel ? <img src={spinner} alt='Loading...' style={{ display: "block", margin: "0 auto" }} /> :
                <div className='container'>
                    <div className='row'>
                        <div className='col'>

                        <img src={`/images/${fileName}`}/>
                        </div>
                        <div className="col">
                            <h2 style={{color:"blue",size:"40px",marginTop:"140px"}}>{nom}</h2>
                            <p>{prix}TND</p>
                            <p style={{marginTop:"20px"}}>{description}</p>
                            <p style={{marginTop:"20px"}}>{tel}</p>

                            <a type="button" href="/materiels" class="btn btn-success" style={{ width: "max-content",marginLeft:"-200px",marginTop:"190px" }}>Retour aux Equipements</a>
                        </div>

                        
                    </div>
                    
                </div>
            }
        </div>
    );


};

export default Materiel;
