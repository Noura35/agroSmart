import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import spinner from '../../images/loading.gif';

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
            {!nom || !prix || !description || !tel ? <img src={spinner} alt='Loading...' style={{ display: "block", width: "120px", height: "120px", margin: "0 auto" }} /> :
                <div className='container'>
                    <div className='row'>
                        <div className='col'>

                        <img src={`${fileName}`} style={{width:"400px",height:"350px",margin:"130px 60px 30px 30px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}/>
                        </div>
                        <div className="col">
                            <h2 style={{color:"#3587b9",size:"50px",marginTop:"140px",textTransform: "capitalize"}}>{nom}</h2>
                            <p style={{fontWeight:"bold",fontSize:"18px",marginTop:"20px",color:"rgb(5, 168, 5)"}}>{prix}TND</p>
                            <p style={{marginTop:"50px"}}>{description}</p>
                            <p style={{marginTop:"20px"}}> pour plus d'informations : <span style={{fontWeight:"bold"}}>{tel}</span> </p>

                            <Link to="/materiels"><button  className="btn5" style={{ width: "max-content",marginTop:"30px"}}> Retour aux Equipements </button></Link>
                        </div>

                        
                    </div>
                    
                </div>
            }
        </div>
    );


};

export default Materiel;
