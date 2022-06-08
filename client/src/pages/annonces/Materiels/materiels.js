/*import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import spinner from '../../images/spinner1.gif'
import blogima from '../../images/plantesb.webp'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';
const Materiels = ({ cards,user }) => {

    const [materiel, setMateriel] = useState([])

    //Delete materiel by id 
    const Deletemateriel = id => {
        axios
            .delete(`/api/materiels/${id}`).then(res => alert(res.data));
        setMateriel(materiel.filter(elem => elem._id !== id));
    };


    return (
        <div className='container'>
            <div className='containerss'>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <h2 style={{ marginTop: "120px", color: "black", borderBottom: " solid 3px green" }}> Location d'equipements</h2>
                </div>
                <h3 style={{ marginTop: "10px" }}>Choisissez la location d’outils pour réaliser des économies</h3>
                <p style={{ marginTop: "12px" }}>La location d’un outil et de tout autre équipement peut s’avérer un choix judicieux pour la réalisation de votre projet. La location d’une scie à chaîne, d’une souffleuse, d’une perceuse à percussion ou d’autres items dont vous ne vous servirez qu’à de rares occasions peut vous faire économiser plusieurs centaines de dollars. Vous éviterez l’achat de l’outil, mais aussi les coûts liés à son entretien.</p>
                <h3>Nous vous louons tout ce qu’il vous avez besoin…</h3>
                <p style={{ marginTop: "12px" }}>Que ce soit pour la compaction, l’excavation, le jardinage ou la menuiserie, nous avons les outils qu’il vous faut pour tous genres de travaux. Nous offrons également un grand choix d’équipements pour vos réceptions de tout genre.</p>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {cards.map((materiel, key) => (
                    <div style={{ margin:"15px auto"}} >

                        <Card style={{ width: '20rem', marginTop: "10px" }}>
                            <Card.Img variant="top" src={`/images/${materiel.materielImage}`} style={{width:"300px",height:"240px"}} />
                            <Card.Body style={{textAlign:"center"}}>
                          
                                <Card.Title>{materiel.nom}</Card.Title>
                              
                                <Card.Text>
                                    {materiel.prix}TND
                                </Card.Text>
                                <Link  style={{textDecoration:"none"}} to={{
                            pathname: `/materiel/${materiel._id}`
                             }}>
                                <Button variant="info" style={{width:"max-content"}}>Decouvrir</Button>
                                </Link>

                                {user.isConnected ? (
                                          <div style={{display:"flex", justifeyContent:"center",marginLeft:"38px"}} >
                                            <div>
                                                <Link to= {`/materiels/${materiel._id}`} className='btn btn-outline-success' style={{ width: "max-content" }} > Edit </Link>
                                            </div>


                                            <div>
                                            <a href="#" className='btn btn-outline-danger' style={{ width: "max-content" }}   onClick={() => Deletemateriel (materiel._id)}  > Delete </a>
                                            </div>
                                        </div>
                                ) : " "}

                          
                            </Card.Body>
                           
                        </Card>

                    </div>


                ))}
            </div>
        </div>
    )
}

export default Materiels;
*/
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import spinner from '../../images/spinner1.gif'
import blogima from '../../images/plantesb.webp'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
const Materiels = ({ cards }) => {

    const [materiel, setMateriel] = useState([])

    //Delete materiel by id 
    const Deletemateriel = id => {
        axios
            .delete(`/api/materiels/${id}`).then(res => alert(res.data));
        setMateriel(materiel.filter(elem => elem._id !== id));
    };


    return (
        <div className='container'>
            <div className='containerss'>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <h2 style={{ marginTop: "120px", color: "black", borderBottom: " solid 3px green" }}> Location d'equipements</h2>
                </div>
                <h3 style={{ marginTop: "10px" }}>Choisissez la location d’outils pour réaliser des économies</h3>
                <p style={{ marginTop: "12px" }}>La location d’un outil et de tout autre équipement peut s’avérer un choix judicieux pour la réalisation de votre projet. La location d’une scie à chaîne, d’une souffleuse, d’une perceuse à percussion ou d’autres items dont vous ne vous servirez qu’à de rares occasions peut vous faire économiser plusieurs centaines de dollars. Vous éviterez l’achat de l’outil, mais aussi les coûts liés à son entretien.</p>
                <h3>Nous vous louons tout ce qu’il vous avez besoin…</h3>
                <p style={{ marginTop: "12px" }}>Que ce soit pour la compaction, l’excavation, le jardinage ou la menuiserie, nous avons les outils qu’il vous faut pour tous genres de travaux. Nous offrons également un grand choix d’équipements pour vos réceptions de tout genre.</p>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {cards.map((materiel, key) => (
                    <div style={{ margin:"15px auto"}} >

                        <Card style={{ width: '20rem', marginTop: "10px" }}>
                            <Card.Img variant="top" src={`/uploads/materiels/${materiel.materielImage}`} />
                            <Card.Body style={{textAlign:"center"}}>
                          
                                <Card.Title>{materiel.nom}</Card.Title>
                              
                                <Card.Text>
                                    {materiel.prix}TND
                                </Card.Text>
                                <Link  style={{textDecoration:"none"}} to={{
                            pathname: `/materiel/${materiel._id}`
                             }}>
                                <Button variant="info" style={{width:"max-content"}}>Decouvrir</Button>
                                </Link>

                                <div style={{display:"flex", justifeyContent:"center",marginLeft:"38px"}} >
                            <div>
                                <Link to= {`/materiels/${materiel._id}`} className='btn btn-outline-success' style={{ width: "max-content" }} > Edit </Link>
                            </div>


                            <div>
                            <a href="#" className='btn btn-outline-danger' style={{ width: "max-content" }}   onClick={() => Deletemateriel (materiel._id)}  > Delete </a>
                            </div>
                        </div>
                            </Card.Body>
                           
                        </Card>

                    </div>


                ))}
            </div>
        </div>
    )
}

export default Materiels;