import React, { useEffect, useState } from 'react'
import Updates from './Updates'
import './RightSide.css'
import axios from 'axios';


const RightSide = () => {
    const [electrovane, setElectrovane] = useState([]);

    const fetchData = async () => {
      const res = await axios.get('https://smartwaterring.herokuapp.com/electrovanne')
      console.log("electrovane state :", res.data);
      setElectrovane(res.data);
  }




const declenche = e=>{
  e.preventDefault();
 
  axios
  .post('https://smartwaterring.herokuapp.com/electrovanne/on')

};

const arrete = e=>{
  e.preventDefault();
 
  axios
    .post('https://smartwaterring.herokuapp.com/electrovanne/off')
 
};



    useEffect(() => {
        fetchData();
},[])
  return (
    <div className='RightSide'>
          <div>
              <Updates/>
          </div>
          <form >
        <h4  style={{fontFamily: "satisfy",margin:"15px"}}>Arrosage à distance</h4>
        
  
         
            <button onClick={arrete} className='off' > OFF </button>
            <button onClick={declenche} className='on'> ON </button> 
                  


        </form>
        
    </div>
  )
}

export default RightSide
