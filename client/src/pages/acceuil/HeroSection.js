import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = ({
    lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img,alt,imgStart,btnstatus,to,
}) => {
  return (
    <>
    <div className={lightBg ? 'lightbg' : 'darkBg'}>


        <div className='container'>
                <div className="row home__hero-row"
                style={{display:'flex', flexDirection : imgStart === 'start' ? 'row-reverse':'row'}}>

                    <div className='col'>

                        <div className="home__hero-text-wrapper">
                            <div className='top-line'>{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle': 'home__hero-subtitle dark ' }>{description}</p>    
                              <Link to={to}>
                                   <button  className={btnstatus ? 'btn1' : ''} >{buttonLabel}</button>
                              </Link>
                        </div>      
                    </div>

                    <div className='col'>
                          <div className='home__hero-img-wrapper'>
                              <img src={img} alt={alt} className='home__hero-img' />
                                  
                        
                        </div>

                    </div>

                </div>
        </div>
    </div>
      
    </>
  )
}

export default HeroSection
