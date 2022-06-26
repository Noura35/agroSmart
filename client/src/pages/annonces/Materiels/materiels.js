import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import spinner from '../../images/loading.gif';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "./Materiels.css"
import image1 from '../../images/etape1.jpg'
import image2 from '../../images/etape2.jpg'
import image3 from '../../images/etape2.webp'
import image4 from '../../images/etape4.webp'
import { FiEdit } from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { IconContext } from "react-icons";




import { Card, Carousel } from 'react-bootstrap';
const Materiels = ({ cards, user }) => {
    console.log(cards)
    const [materiel, setMateriel] = useState([])
    const [filter, setFilter] = useState('');
   

    //Delete materiel by id 
    const Deletemateriel = id => {
        if (window.confirm("vous etes sur de supprimer  cet équipement !")) {
        axios
            .delete(`/api/${id}`);
        setMateriel(materiel.filter(elem => elem._id !== id));
    }
    };


    const searchText = (event) => {
        
        setFilter(event.target.value);
        console.log(event.target.value)
    }
    
    let datasearch = cards.filter(materiel => {
        return Object.keys(materiel).some(key =>
           // materiel[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            materiel[key]
            )
    });


    return (
        <div className='containers'>
            <Carousel fade={true} pause={false}>
                <Carousel.Item interval={3000}  >
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center' >
                        <div style={{ display: "center", justifyContent: "center", backgroundColor: "white", opacity: "0.7",marginTop:"100px" }} >
                            <h1 style={{ color: "#f1c40f", fontFamily: "satisfy",fontWeight: "bold",margin:"20px" }}>Louer son materiel agricole, bien plus qu'un enjeu économique </h1>
                            <Link to={"/addmateriel"}>
                                <button type="button" className="btn btn-success" style={{ width: "max-content", margin: "20px auto" }}><span>Poster votre materiel</span></button>
                            </Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="second slide"

                    />
                    <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
                        <div style={{ display: "center", justifyContent: "center", backgroundColor: "white", opacity: "0.7",marginTop:"100px"}}>
                            <h1 style={{  color: "#f1c40f", fontFamily: "satisfy", fontWeight: "bold" ,margin:"20px"}}>Louer son materiel agricole, bien plus qu'un enjeu économique </h1>
                            <Link to={"/addmateriel"}>
                                <button type="button" className="btn btn-success" style={{ width: "max-content", margin: "20px auto" }}><span>Poster votre materiel</span></button>
                            </Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
                        <div style={{ display: "center", justifyContent: "center", backgroundColor: "white", opacity: "0.7",marginTop:"100px"}}>
                            <h1 style={{ color: "#f1c40f", fontFamily: "satisfy", fontWeight: "bold" ,margin:"20px"}}>Louer son materiel agricole, bien plus qu'un enjeu économique </h1>
                            <Link to={"/addmateriel"}>
                                <button type="button" className="btn btn-success" style={{ width: "max-content", margin: "20px auto" }}><span>Poster votre materiel</span></button>
                            </Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
                        <div style={{ display: "center", justifyContent: "center", backgroundColor: "white", opacity: "0.7",marginTop:"100px"}}>
                            <h1 style={{ color: "#f1c40f", fontFamily: "satisfy", fontWeight: "bold",margin:"20px" }}>Louer son materiel agricole, bien plus qu'un enjeu économique </h1>
                            <Link to={"/addmateriel"}>
                                <button type="button" className="btn btn-success" style={{ width: "max-content", margin: "20px auto" }}><span>Poster votre materiel</span></button>
                            </Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className='container'>
                <div className='mat' >

                <div>
                <h2 style={{ marginTop: "20px", color: "#c46203" , fontSize:"40px",fontFamily: "satisfy"}}> Location d'equipements</h2>
                </div>
                <h3 style={{ marginTop: "30px" , color:"#e58e26",fontFamily:"cursive",fontSize: "25px"}}>Choisissez la location d’outils pour réaliser des économies</h3>
                <p style={{ marginTop: "20px" }}>La location d’un outil et de tout autre équipement peut s’avérer un choix judicieux pour la réalisation de votre projet. La location d’une scie à chaîne, d’une souffleuse, d’une perceuse à percussion ou d’autres items dont vous ne vous servirez qu’à de rares occasions peut vous faire économiser plusieurs centaines de dinares. Vous éviterez l’achat de l’outil, mais aussi les coûts liés à son entretien.</p>
                <h3  style={{ marginTop: "30px" , color:"#e58e26",fontFamily:"cursive",fontSize: "25px"}}>Nous vous louons tout ce qu’il vous avez besoin…</h3>
                <p style={{ marginTop: "20px" }}>Que ce soit pour l'agriculture,le récoltes, le jardinage, nous avons les outils qu’il vous faut pour tous genres de travaux. Nous offrons également un grand choix d’équipements pour vos réceptions de tout genre.</p>
                </div>
            </div>
            <div style={{ backgroundColor: "#f1f2f6" }}>
                <div className='col-12 mb-18'>
                    <div className='mb-8 col-4 mx-auto'>
                        <input type="text" placeholder="Rechercher..." value={filter} onChange={searchText.bind(this)} style={{ border: "1px solid green" }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#f1f2f6" }}>
                    {!cards.length ? <img src={spinner} alt="Loading..." style={{ display: "block", width: "120px", height: "120px", margin: "0 auto" }} /> :

                        datasearch.map((materiel, key) => (
                            <div style={{ margin: "15px auto" }} >

                                <div style={{ width: '19rem', marginTop: "10px" }}>
                                    <Card.Img variant="top" src={`${materiel.materielImage}`} style={{ width: "300px", height: "240px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} />
                                    <Card.Body >

                                        <Card.Title>{materiel.nom}</Card.Title>

                                        <Card.Text>
                                            {materiel.prix}TND/J
                                        </Card.Text>
                                              <div style={{ display: "flex",marginTop:"30px" }} >
                                        <Link style={{ textDecoration: "none" }} to={{
                                            pathname: `/materiel/${materiel._id}`
                                        }}>
                                            <button className="btn5" variant="info" style={{ width: "max-content", marginRight: "20px" }}>Decouvrir</button>
                                        </Link>

                                        {user.isConnected ? (
                                                <div style={{marginLeft:"35px"}}>
                                                <Link to={`/materiels/${materiel._id}`} onClick={Deletemateriel} style={{marginRight:"20px"}}>
                                                <IconContext.Provider value={{ size: 22, color:"#b2bec3"}}>
                                                <FiEdit />
                                                </IconContext.Provider>
                                                 </Link>                                                                          


                                                <Link to="#" style={{ marginRight: "20px" }}>
                                                <IconContext.Provider value={{ size: 25, color:"#e74c3c"}}>
                                                <RiDeleteBin5Line />
                                                </IconContext.Provider>
                                                </Link>
                                                </div>
                                              

                                         
                                           
                                        ) : " "}
 </div>

                                    </Card.Body>

                                </div>

                            </div>


                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Materiels;