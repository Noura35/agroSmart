import React from 'react'
import Cards from '../cards/Cards'
import './MainDash.css'
import Arroser from '../imgs/Arroser.png'
import Table from '../table/Table'

const MainDash = () => {
  return (
    <div className='MainDash'>
          <h1>Les Changement climatiques</h1>
      <Cards />
      <Table />
          
    </div>   
  )
}

export default MainDash
