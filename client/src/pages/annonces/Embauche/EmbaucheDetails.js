import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import"./Embauche.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

 function EmbaucheDetails( {NomEmb,VilleEmb,Competences,Contact,Id ,OnDelete,user}) {
  const [embauches,setEmbauches]= useState([]);
  return (
    <MDBCol  style={{ width:"33%",textAlign:'center',padding:"10px",margin:"70px"}}>
    <MDBCard  id="h-100" className='h-100'style={{color:"#FFFFF0" , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
     
      <MDBCardBody >

     

        <MDBCardTitle style={{margin:"20px 10px 30px 10px" ,color:"#3990ff",padding:"14px",borderTop:"1px solid #5e88a0",borderBottom:"1px solid #5e88a0" }}>Nous cherchons un(e) {NomEmb} </MDBCardTitle>
        
        <MDBCardText  >
         Nous sommes situé à :
        </MDBCardText>
        <MDBCardText  style={{fontWeight:"bold"}}>
        {VilleEmb}
        </MDBCardText>

        <MDBCardText  style={{margin:"40px 10px 20px 10px"}}>
        Cet employé {Competences}
        </MDBCardText>

      <MDBCardText >
          Si vous étes interessés,vous pouvez nous contacter sur le numéro 
        </MDBCardText>

        <MDBCardText  style={{fontWeight:"bold"}}>
          {Contact}
        </MDBCardText>
          <hr style={{ color: "#5e88a0" }}></hr>
          

          {user.isConnected ? ( <div  style={{ display: "flex",justifyContent:"center" }}>
        <Link to ={`/updateemb/${Id}`} >
    <button     className='btn btn-outline-success' type="submit" style={{ width: "max-content", borderRadius:"20px" }}>Modifier</button>
    </Link>
    <button  className='btn btn-outline-danger' style={{ width: "max-content", borderRadius:"20px" }} type="reset" onClick={()=>OnDelete(Id)}>Supprimer</button>
    </div>) : " "}
       
      
      
 
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  )
}

export default EmbaucheDetails