import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card2 from './cards/Card2';

import { UilTemperature,
    UilTear,
    UilCloudSun ,

} from '@iconscout/react-unicons';
import Card from './cards/Card';
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
    <div className='container' >
      
      
          <div className="row"  style={{margin:"150px 0 200px 0"}}>

              <div className='col'>
             <Card2
              title= {"Température d'air"}
              color={styletemp}
              barValue={temp[temp.length-1]}
              png={UilTemperature}
              series={ [
            {
                name: "Température d'air",
                data:hum,
            },
        ]}
          />
              </div>
        
              <div className="col" style={{marginLeft:"750px"}}>
                <div >
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
              title= {"Humidité d'air"}
              color={stylehum}
              barValue={hum[hum.length-1]}
              png={UilCloudSun}
              series={ [
            {
                name: "Humidité d'air",
                data:temp,
            },
        ]}
          />
             </div>
              
              </div>
             
          


          </div>
       
     

    </div>
  )
}

export default Cards
