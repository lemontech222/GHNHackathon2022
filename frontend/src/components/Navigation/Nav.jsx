import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom';

import {NavBar} from './Nav.style.js';
import appLogo from '../../images/logo/ghnlogo.png';

const Nav = () => {
  const navigate = useNavigate()

  const goToHomepage = ()=>{
    navigate('/')
  }
  
  return (
    <div style={{
                width:'100%',
                backgroundColor:'#fff',
                borderBottom:'3px solid #555',
                marginBottom:'20px'
              }}>
      <Container>
        <NavBar>
          <div className="app-logo">
            <img onClick={goToHomepage} src={appLogo} alt="Ghana Hubs Network Logo" />
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search" />
            <button type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div className="navLinks">
            <Link to="/login" style={{
              textDecoration:'none',
              color:'#000',
              fontWeight:'bolder',
              display:'inline-block',
              marginRight:'5px',
            }}>Login</Link>
            <Link to="/register" style={{
              textDecoration:'none',
              color:'#fff',
              fontWeight:'bolder',
              backgroundColor:'#34ABDE',
              padding:'5px 8px',
              marginLeft:'5px',
              borderRadius:'5px'
            }}>Register</Link>
          </div>      
        </NavBar>
      </Container>
    </div>
  )
}

export default Nav