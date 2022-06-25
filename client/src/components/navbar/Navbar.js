import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.css'
import logo from "../../pages/images/logo.png"
import { useDispatch } from 'react-redux';
import { Logout } from '../../redux/actions/authAction';
import { FaRegUser } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


const Navigation = ({ user }) => {

  const dispatch = useDispatch()
  
  const LogoutHandler=()=>{

        dispatch(Logout())


  }





  return (
    <div >
 <Navbar   fixed='top' bg="white" expand="lg" className="navi" >
  <Container fluid >
          <Navbar.Brand href="/" >
          <img src={logo} style={{width:50}} />          
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto my-2 my-lg-0">
        <Nav.Link href="/"><div className="class">Accueil</div></Nav.Link>
            
              <Nav.Link href="/tableaubord"><div className="class">Tableaux de bord</div></Nav.Link>
              <Nav.Link  href="/articles"><div className="class">Blogs</div></Nav.Link>
              <Nav.Link  href="/actualite"><div className="class">Actualités</div></Nav.Link>


              <div className="class">
                <NavDropdown title={<span id="class1">Annonces</span>} id="nav-dropdow" >
                <NavDropdown.Item href="/materiels">Equipments</NavDropdown.Item>
                <NavDropdown.Item href="/annonces">Embauche</NavDropdown.Item>
              </NavDropdown>
              </div>
              <Nav.Link href="/contact"><div className="class">Contactez-nous</div></Nav.Link> 
              {

                user.role === 'ADMIN' ? (<Nav.Link href="/admin"><div className="class" style={{color:"#fff",backgroundColor:"#d63031",padding:"5px 15px",borderRadius :"5px"}}>Admin</div></Nav.Link>) : ""
              }

             </Nav>


              {
                user.isConnected ? (
                  <>
                  <span style={{fontWeight:"bold",color:"#34495e",fontSize :"15px",textTransform: "capitalize",fontStyle:"italic"}}>Bienvenue {user.nom}</span>
                  
                    <Dropdown >
                   <Dropdown.Toggle style={{width:"max-content",marginRight:'80px',backgroundColor:"#fff",color:"#92ce67", fontSize: "18px",border:"none"}}>
                      <FaRegUser />
                    </Dropdown.Toggle>

                  <Dropdown.Menu tyle={{width:"max-content"}}>
                    <Dropdown.Item href="/profile">Profile et Compte</Dropdown.Item>
                    <Dropdown.Item href="#"  onClick={LogoutHandler}>Se déconnecter</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>                  

                  </>
                ) : 
                  
                (<>
                  
                      <Link to="/login"><button  type="submit" style={{marginRight:'20px'}} >Se connecter</button></Link>
                      <Link to="/signup"><button type="submit" className='btn1'>S'inscrire</button></Link>
                  </>)
              }

              

          </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
  )
}

export default Navigation
