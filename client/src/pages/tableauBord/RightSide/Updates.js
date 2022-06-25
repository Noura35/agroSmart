import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Arroser from '../imgs/Arroser.png'

const Updates = () => {

   
    const [electrovane, setElectrovane] = useState([]);


    const fetchData = async () => {
      const res = await axios.get('https://smartwaterring.herokuapp.com/electrovanne')
      console.log("electrovane state :", res.data);
      setElectrovane(res.data);
  }
  
    useEffect(() => {
        fetchData();
},[])

  return (
    <div className='Updates'>

         
        <span>Arrosage </span>
 
      <div className="detail">
        <img src={Arroser} className="electrovanneImg"/>
        <span>Electrovanne (état)</span>
        {
          electrovane ? <span>ouvert</span> : <span>arrêté</span>
        }
     
      </div>
    </div>
  )
}

export default Updates
