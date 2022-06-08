import React from 'react'
import Arroser from '../imgs/Arroser.png'

const Updates = () => {
  return (
    <div className='Updates'>

         
        <span>Arrosage </span>
 
      <div className="detail">
        <img src={Arroser} className="electrovanneImg"/>
        <span>Electrovanne (état)</span>
        <span>Arréter</span>
      </div>
    </div>
  )
}

export default Updates
