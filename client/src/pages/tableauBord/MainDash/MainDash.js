import React from 'react'
import Cards from '../cards/Cards'
import './MainDash.css'
import Table from '../table/Table'

const MainDash = () => {
  return (
    <div className='MainDash'>
          <h1 style={{fontFamily: "satisfy"}}>Les Changements climatiques</h1>
      <Cards />
      <Table />
          
    </div>   
  )
}

export default MainDash
