import React from 'react'
import HeroSection from './HeroSection'
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour} from "./Data"
import ServiceCarte from "./service"
import Acceuil from './Acceuil'
import VideoDesc from './VideoDesc';



const Home = () => {
  return (
    <>
      <Acceuil />
      <ServiceCarte />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <VideoDesc />
      <HeroSection {...homeObjFour} />


    </>
  )
}

export default Home
