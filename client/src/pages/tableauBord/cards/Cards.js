import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./cards.css";
import {
    UilTemperature,
    UilTear,
    UilCloudSun ,

} from '@iconscout/react-unicons';
const Cards = () => {
    const [hum, setHum] = useState([]);
    const [humsol, setHumsol] = useState([]);
    const [temp, setTemp] = useState([]);
    const [electrovane, setElectrovane] = useState([]);


    const fetchData = async () => {
        const res = await axios.get('https://smartwaterring.herokuapp.com/sensors')
        console.log("response", res.data);
        
        const hum = [];
        const humsol= [];
        const temp = [];

        for (let i = 0; i < res.data.length; i++) {
            hum.unshift(res.data[i].hum)
            temp.unshift(res.data[i].temp)
            humsol.unshift(res.data[i].humsol)
            electrovane.unshift(res.data[i].electrovane)

    }

        setHumsol(humsol);
        setTemp(temp);
        setHum(hum);
        setElectrovane(electrovane);


    }

    useEffect(() => {
        fetchData();
},[])

const styletemp={
                   backGround: "linear-gradient(180deg,#ffda79,#fad390 100%)",
                   boxShadow:"0px 10px 20px 0px #f9d598"
  }
  
 const stylehum={
                    backGround: "linear-gradient(180deg,#bb67ff,#c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
                }

const stylehumsol={
                 backGround: "linear-gradient(180deg,#ff919d,#fc929d 100%)",
                 boxShadow:"0px 10px 20px 0px #fdc0c7",
                }

  return (
    <div className='Cards'>
      
      
          <div className='parentContainer'>

           
          
            <Card
              title= {"Humidité de l'air"}
              color={stylehum}
              barValue={hum[hum.length-1]}
              png={UilCloudSun}
              series={ [
            {
                name: "Humidité de l'air",
                data:hum,
            },
        ]}
          />
          

             <Card
              title= {"Humidité de sol"}
              color={stylehumsol}
              barValue={humsol[humsol.length-1]}
              png={UilTear}
              series={ [
            {
                name: "Humidité de sol",
                data:humsol,
            },
        ]}
            />
           <Card
              title= {"Température d'air"}
              color={styletemp}
              barValue={temp[temp.length-1]}
              png={UilTemperature}
              series={ [
            {
                name: "Température d'air",
                data:temp,
            },
        ]}
          />

          </div>
       
     

    </div>
  )
}

export default Cards
