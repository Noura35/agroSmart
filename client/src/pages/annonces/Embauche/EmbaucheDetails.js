import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

 function EmbaucheDetails( {NomEmb,VilleEmb,Competences,Contact,Id ,OnDelete,user}) {
  const [embauches,setEmbauches]= useState([]);
  return (
    <MDBCol  style={{ width:"33%",textAlign:'center',padding:"10px",margin:"60px"}}>
    <MDBCard className='h-100'style={{ backgroundImage:"linear-gradient(180deg, #096bad, #96c1de)", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
     
      <MDBCardBody >

      <MDBCardTitle style={{fontSize:"16px",color:"white"}}>
         Nous recrutons un 
        </MDBCardTitle>

        <MDBCardTitle style={{margin:"20px 10px 70px 10px" ,color:"white" }}> {NomEmb} </MDBCardTitle>
        
        <MDBCardText style={{color:"white"}}>
         Nous sommes situé à: {VilleEmb}
        </MDBCardText>

        <MDBCardText  style={{margin:"40px 10px 20px 10px",color:"white"}}>
         Nous sommes à la recherche d'un employé qui est  :{Competences}
        </MDBCardText>

        <MDBCardText  style={{margin:"40px 10px 20px 10px",color:"white"}}>
          Si vous étes interessés,vous pouvez nous contacter sur le numéro :{Contact}
        </MDBCardText>
          <hr style={{ color: "white" }}></hr>
          

          {user.isConnected ? ( <div  style={{ display: "flex",justifyContent:"center" }}>
        <Link to ={`/updateemb/${Id}`} >
    <button     className='btn btn-outline-success' type="submit" style={{ width: "max-content" }}>Modifier</button>
    </Link>
    <button  className='btn btn-outline-danger' style={{ width: "max-content" }} type="reset" onClick={()=>OnDelete(Id)}>Supprimer</button>
    </div>) : " "}
       
      
      
 
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  )
}

export default EmbaucheDetails