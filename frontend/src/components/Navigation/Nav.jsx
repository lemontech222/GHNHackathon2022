import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

import {NavBar} from './Nav.style.js';
import appLogo from '../../images/logo/ghnlogo.png';

const Nav = () => {
  return (
    <div style={{width:'100%',backgroundColor:'#fff',borderBottom:'3px solid #555'}}>
      <Container>
        <NavBar>
          <div className="app-logo">
            <img src={appLogo} alt="Ghana Hubs Network Logo" />
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search" />
            <button type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div className="navLinks">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>      
        </NavBar>
      </Container>
    </div>
  )
}

export default Nav