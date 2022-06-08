import React from 'react';
import './service.css';
import { FaBlog } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import { BsMegaphone } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import 'aos/dist/aos.css';

function ServiceCarte() {
  return (
    <>
      
      <IconContext.Provider value={{ color:'#fff', size: 30 }}>
        <div className='card__section'>
          <h1 className='card__heading'>Nos services</h1>
          <p className='p'>Notre plateforme vous fournir un nombre de services au sein de monde de l'agriculture.</p>
          <div className='card__wrapper'>
            <div className='card__container'>
              
            <Link to='/articles' className='card__container-card'>
              <div className='card__container-cardInfo'>
                <div className='icons'>
                  <FaBlog />
                </div>
                <h1 >Blogs</h1>
            
                <p>L'agriculture est un secteur riche et important dans le monde... pour enrechire vos connaissances nous vous invitons à lire nos articles proposés...</p>
              </div>
              </Link>
              
            <Link to='/actualite' className='card__container-card'>


              <div className='card__container-cardInfo'>
                <div className='icons'>
                  <BiChat />
                </div>
                 <h1>Actualités</h1>
                  <p>pour suivre les nouveautés et échanger
                    vos expériences avec les autres utilisateurs n'hésitez pas de poster vos publications...</p>

              </div>
            </Link>
            <Link to='/annonces' className='card__container-card'>
              <div className='card__container-cardInfo'>
                <div className='icons'>
                  <BsMegaphone />
                </div>
                 <h1>Annonces</h1>
               
                <p>Notre plateforme vous donne l'occasion de trouver et de poster votre emnauche.Aussi de louer et de mettre en location vos équipements... </p>

              </div>
            </Link>
          </div>
        </div>
      </div>
      </IconContext.Provider>
      
      
    <div className='back'>
        
    </div>
    </>
    
  );
}
export default ServiceCarte;
