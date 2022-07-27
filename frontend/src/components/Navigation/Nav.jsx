import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import {NavBar} from './Nav.style.js';
import appLogo from '../../images/logo/ghnlogo.png';

const Nav = () => {
  return (
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
        <h6>Navs</h6>        
      </NavBar>
    </Container>
  )
}

export default Nav