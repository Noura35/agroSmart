import React from 'react';
import { CardsData } from '../Data.js/Data';
import Card from './Card';
import "./cards.css";

const Cards = () => {
  return (
    <div className='Cards'>
      {
        CardsData.map(( card, id )=>{
        return (
          <div className='parentContainer'>

            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              png={card.png}
              series={card.series}

            />
          </div>
        )
        })
     }
 
    </div>
  )
}

export default Cards
