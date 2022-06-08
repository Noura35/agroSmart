import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {IoFingerPrint} from 'react-icons/io5'
import { IconContext } from "react-icons";
import {IoIosArrowDropup} from 'react-icons/io'


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Qui sommes-nous?</h2>
            <p>AgroSmart est une application web à pour but d'irriguer d'une façon intelligente les espaces vertes et les controller à distance.Aussi elle fournit à ses utilisateurs des services : blogs,annonces,actualités...</p>
            <div style={{marginLeft:"10px"}}>
                 <IconContext.Provider value={{ size: 40 }}>
                   <IoFingerPrint />
                </IconContext.Provider>

             </div>       
          </div>
          <div className='footer-link-items'>
            <h2>Explorer</h2>
            <Link to='/'>Acceuil</Link>
            <Link to='/aricles'>Blogs</Link>
            <Link to='/annonces'>Annonces</Link>
            <Link to='/actualite'>Actualités</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Suivez-nous</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Link to='/'>+216 72 999 999</Link>
            <Link to='/'>+216 72 999 998</Link>
            
          </div>
        </div>

        <a href='#' className='position-absolute buttom-0 end-0 p-5'>
                 <IconContext.Provider value={{ size: 45}}>
                <IoIosArrowDropup />
            </IconContext.Provider>
        </a>
      </div>


      <section className='copy-right'>        
          &copy;2022 AgroSmart.tous les droits sont conservées
      </section>
    </div>
  );
}

export default Footer;
