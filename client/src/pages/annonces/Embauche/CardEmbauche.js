import React from 'react'
import { MDBRow } from 'mdb-react-ui-kit';
import { useState } from 'react';
import EmbaucheDetails from './EmbaucheDetails';
import { useEffect } from 'react';
import axios from 'axios';
import blogima from '../../images/occuper.jpg'
import { Link } from 'react-router-dom';

function CardEmbauche({user}) {
  const [embauches, setEmbauches] = useState([]);
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)


  async function affiche() {
    await axios.get('/api/embauches')
      .then(res => {
        setEmbauches(res.data)
      })
  }
  const OnDelete = (id__) => {
    if (window.confirm("vous etes sur de supprimer cet annonce !")) {
      axios.delete(`/api/embauches/${id__}`)
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);

        })
    }
  }
  useEffect(() => {
    affiche();
  }, [])
  return (

    <div style={{ marginTop: "80px " }} >

      <div style={{ background: `url(${blogima})`, backgroundSize: "cover", marginTop: "-200px" ,padding:"60px"}}>
        <div className='col' >
          <h1 style={{ color: "#b33939", fontSize: "30px", fontWeight: "bold", padding: "300px", fontFamily:"serif", marginTop: "-40px", marginLeft: "-350px" }}></h1>
          <p style={{ marginTop: "-260px",marginLeft: "-50px", padding: "0px", fontSize: "20px",fontWeight: "bold",fontFamily:"monospace" ,color:"black" , backgroundColor:"white" , opacity:"0.5"}}> AgroSmart vous donne la possibilité de touver votre embauche dans l'agriculture d'apres ces annonces ci-dessous et de trouver aussi  des employées si vous avez besoin des agriculteurs dans votre terrain en accedant au formulaire  et remplir les champs pour poster votre annonce .</p>
          <Link to={"/embauche"}>
            <button type="button" className="btn btn-success" style={{ marginLeft: "-15px", marginTop: "20px" ,width:"max-content"}}> <span>Trouver un Agriculteur</span></button>
          </Link>
        </div>
      </div>
      <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none", marginBottom: "70px" }}>
        {message}
      </div>


      <MDBRow className=' row-col-md-3 g-4' style={{ margin: "0px auto" ,backgroundColor:"#f1f2f6"  }}>

        {
          embauches.map(({ NomEmb, VilleEmb, Competences, Contact, _id }) => (
            <EmbaucheDetails NomEmb={NomEmb} VilleEmb={VilleEmb} Competences={Competences} Contact={Contact} Id={_id} OnDelete={OnDelete} user={user}/>

          ))
        }



      </MDBRow>

    </div>


  )
}
export default CardEmbauche