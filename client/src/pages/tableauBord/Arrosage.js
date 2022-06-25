import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import Arroser from './imgs/Arroser.png'
import moment from "moment";
import { dateParser } from '../../redux/util/util';



const Arrosage = () => {

   const [electrovane, setElectrovane] = useState([]);
   const [time, setTime] = useState([]);
const [arrosage, setArrosage] = useState([]);


    const fetchData = async () => {
        const res = await axios.get('https://smartwaterring.herokuapp.com/sensors')
        console.log("response", res.data);
        setArrosage(res.data)

     
        const time = [];

        for (let i = 0; i < res.data.length; i++) {
            
            electrovane.unshift(res.data[i].electrovane)
            time.unshift(moment(res.data[i].date).format("LT"))

    }

        setElectrovane(electrovane);
        setTime(time);


  }
  
    useEffect(() => {
        fetchData();
},[])

  return (
<div  className='container'>
          <div xs={5} md={2} className='container' style={{margin : "120px 0"}}>
              {
                  arrosage.map((arr, i) => (
  
           arr.electrovane ?
          <Card style={{ margin: "20px 0",backgroundColor: '#d3fab7' }}>
          <Card.Img variant="top" src={Arroser} className="electrovanneImg" style={{margin:"20px 0 0 20px"}}/>
          <Card.Body>
          <Card.Title style={{color:"#00b894",fontWeight:"bold"}}>Arrosage ouvert</Card.Title>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">{dateParser(arr.date)}</small>
    </Card.Footer>
      </Card> :
          <Card style={{ margin: "20px 0", backgroundColor:'#f3cec6' }}>
        <Card.Img variant="top" src={Arroser} className="electrovanneImg" style={{margin:"20px 0 0 20px"}}/>
        <Card.Body>
          <Card.Title style={{color:"#d63031",fontWeight:"bold"}}>Arrosage arrêté</Card.Title>
          </Card.Body>
      <Card.Footer>
      <small className="text-muted">{dateParser(arr.date)}</small>
    </Card.Footer>
      </Card>
      
  ))}
      
        
</div>
    </div>
  )
}

export default Arrosage
