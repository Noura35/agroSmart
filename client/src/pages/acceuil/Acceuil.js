import React from 'react'
import image1 from '../images/plantes.png'
import image2 from  '../images/plantes.png'
import image3 from   '../images/plantes.png'
import {Carousel } from 'react-bootstrap';
import './Acceuil.css';




const Acceuil = () => {

  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={4000} >
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          id='bg'
        />
        <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
          <div style={{display:"center",justifyContent:"center"}}>
            <h1 className="title" >Bienvenue chez AgroSmart</h1>
         
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
           id='bg'
        />
        <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
                    <div style={{display:"center",justifyContent:"center", margin:"20px auto"}}>

            <h1 className="title">Garantie votre confort avec nous !</h1>
            
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
           id='bg'
        />
        <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
            <div style={{display:"center",justifyContent:"center"}}>

            <h1 className="title">Arrosage des plantes en votre absence...</h1>
             
            
          </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Acceuil
