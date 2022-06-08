import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            
            {
              user.role=="ADMIN" ?(<li className="nav-item">
            <Link className="nav-link" to="/addarticle">Add Article</Link>
          </li>) : ""
            }
          
          </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar