import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom';

import {NavBar} from './Nav.style.js';
import appLogo from '../../images/logo/ghnlogo.png';
import { useTokens } from '../../context/TokensContext.js';
import Dropdown from 'react-bootstrap/Dropdown';


const Nav = ({show}) => {
  const navigate = useNavigate()
  const {tokens,setTokens,user} = useTokens()

  const goToHomepage = ()=>{
    navigate('/')
  }

  const toDashboard = () =>{
    navigate('/dashboard')
  }

  const logOut = ()=>{
    setTokens(null)
    navigate('/')
  }

  if(!show) return null
  
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
            {!tokens && <>
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
            </>}
            {tokens && <>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <img style={{height:'30px'}} src={user?.profile_pic} alt="profile pic" /> {user?.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">
                    <p onClick={logOut} to="" style={{
                      textDecoration:'none',
                      color:'#000',
                      fontWeight:'bolder',
                      display:'inline-block',
                      marginRight:'5px',
                    }}>Logout</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                  <p onClick={toDashboard} style={{
                    textDecoration:'none',
                    color:'#000',
                    fontWeight:'bolder',
                    display:'inline-block',
                    marginRight:'5px',
                  }}>Dashboard</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              
            </>}        
          </div>      
        </NavBar>
      </Container>
    </div>
  )
}

export default Nav