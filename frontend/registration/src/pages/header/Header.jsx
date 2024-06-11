import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body">
      <Container className='container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <ul className="flex flex-col gap-4 lg:flex-row ">
                            <li>
            <NavLink  
             to="/"
            className={({isActive}) =>
              `block py-2 pr-4 pl-3 
              duration-200 border-b border-gray-100
              ${isActive ? "active" : "text-black"} 
              hover:bg-gray-50 lg:hover:bg-transparent 
              lg:border-0 hover:text-blue-700 lg:p-0`
            }>Home</NavLink>
            </li>
                            <li>
            <NavLink  
            to="/register"
            className={({isActive}) =>
              `block py-2 pr-4 pl-3 
              duration-200 border-b border-gray-100 
              ${isActive ? "active" : "text-black"}
              hover:bg-gray-50 lg:hover:bg-transparent 
              lg:border-0 hover:text-blue-700 lg:p-0 `
            }>Register</NavLink>
            </li>
            <li>
            <NavLink to="/login" className={(isActive) =>
              `block py-2 pr-4 pl-3 
              duration-200 border-b border-gray-100
               
              hover:bg-gray-50 lg:hover:bg-transparent 
              lg:border-0 hover:text-blue-700 lg:p-0`
            }>Login</NavLink>
            </li>
          
           
            
            </ul>
            {/* <NavLink to="/" className={(isActive)=>{
                  `${isActive ? "text-blue" : ""}`
            }} style={{}}>Home</NavLink>
            <Link to="/FindJob" className='link'>Find Job</Link>
            <Nav.Link href="#pricing" className='link'> Talent</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Explore</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Resources</Nav.Link>
            <Nav.Link href="#pricing" className='link'>About</Nav.Link> */}
            <NavDropdown.Divider />

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header