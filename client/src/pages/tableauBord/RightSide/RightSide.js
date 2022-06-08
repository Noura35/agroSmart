import React from 'react'
import Updates from './Updates'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className='RightSide'>
          <div>
              <Updates/>
          </div>
          <div>
              <h4>Arroser manuellement</h4>
               <button className='btn btn-danger'> OFF</button>

          </div>
    </div>
  )
}

export default RightSide
