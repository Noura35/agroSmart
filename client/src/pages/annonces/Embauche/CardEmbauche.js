import React from 'react'
import { MDBRow } from 'mdb-react-ui-kit';
import { useState } from 'react';
import EmbaucheDetails from './EmbaucheDetails';
import { useEffect } from 'react';
import axios from 'axios';
import blogima from '../../images/occuper.jpg'
import { Link } from 'react-router-dom';
import { GiFarmTractor } from 'react-icons/gi';
import { HiOutlineDocumentSearch} from 'react-icons/hi';

function CardEmbauche({ user }) {
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

      <div style={{ background: `url(${blogima})`, backgroundSize: "cover", marginTop: "-200px", padding: "120px" }}>
        <div className='col' >
          <h1 style={{ color: "#b33939", fontSize: "30px", fontWeight: "bold", padding: "300px", fontFamily: "serif", marginTop: "-40px", marginLeft: "-350px" }}></h1>
          <p style={{ marginTop: "-260px", marginLeft: "-90px", padding: "10px", fontSize: "20px", fontWeight: "bold", fontFamily: "monospace", color: "black", backgroundColor: "white", opacity: "0.5" }}> AgroSmart vous donne la possibilité de touver votre embauche dans l'agriculture d'apres ces annonces ci-dessous et de trouver aussi  des employées si vous avez besoin des agriculteurs dans votre terrain en accedant au formulaire  et remplir les champs pour poster votre annonce .</p>

        </div>
      </div>
      <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none", marginBottom: "70px" }}>
        {message}
      </div>
      <div className='row' style={{ padding: "100px"  }}>
      
        <div className='col' style={{borderRight:"2px solid green"}}>
        <Link to="/embauche" style={{ textDecoration: "none" }}>
          <GiFarmTractor style={{ width: "100%", height: "80px", color: "green" }}></GiFarmTractor>
          <p style={{ textAlign: "center", fontSize: "18px" }}>Creer votre alerte si tu es  </p>
          <p style={{ textAlign: "center", fontSize: "18px" }}>entrain de chercher un agriculteur pour votre terrain </p>
          
            <p style={{ textAlign: "center", fontSize: "15px",color:"#94572c" }}>Je cree mon alerte </p>
            </Link>
        </div>
     

        <div className='col'>
        <Link to="/annonces" style={{ textDecoration: "none" }}>
          <HiOutlineDocumentSearch style={{ width: "100%", height: "80px", color: "green" }}></HiOutlineDocumentSearch>
          <p style={{ textAlign: "center", fontSize: "18px" }}>Commencer votre recherche si tu es  </p>
          <p style={{ textAlign: "center", fontSize: "18px" }}>entrain de chercher une embauche d'agriculture </p>
        
            <p style={{ textAlign: "center", fontSize: "15px",color:"#94572c" }}>Rechercher maintenant </p>
          </Link>
        </div>
      </div>
      <MDBRow className=' row-col-md-3 g-4' style={{ margin: "0px auto", backgroundColor: "#f1f2f6" }}>

        {
          embauches.map(({ NomEmb, VilleEmb, Competences, Contact, _id }) => (
            <EmbaucheDetails NomEmb={NomEmb} VilleEmb={VilleEmb} Competences={Competences} Contact={Contact} Id={_id} OnDelete={OnDelete} user={user} />

          ))
        }



      </MDBRow>

    </div>


  )
}
export default CardEmbauche