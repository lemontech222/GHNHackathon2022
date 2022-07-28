import React, { useEffect } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'
import { ContainerWrap } from '../../Common/PostsContainer/ContainerWrap';
import { AuthContainer } from '../Login/Login.style';
import {Link,useNavigate} from 'react-router-dom'

import appLogo from '../../../images/logo/ghnlogo.png';

const Register = () => {
  const {show,setShow} = useNavbar();
  
  const navigate=useNavigate()

  const goToHomepage = ()=>{
    navigate('/')
  }

  useEffect(()=>{
    if(show){
      setShow(false)
    }
  },[show,setShow])

  useEffect(() => {
    return () => {
      setShow(true)
    }
  }, [setShow])

  
  return (
    <div style={{position:'relative',border:'1px solid #eee',width:'100%'}}>
      
      <div className="logo-div" style={{
        position:'absolute',
        top:'0px',
        left:'-100px',
        height:'200px'
      }}>
        <img onClick={goToHomepage} src={appLogo} alt="Logo" style={{height:'100%',cursor:'pointer'}} />
      </div>
      <AuthContainer>
        <ContainerWrap>
          <h1>Register</h1>
          <h6>Stay up to date on the GHNetwork platform</h6>
          <form>
            <div className="names-field" style={{
                                                  display:'grid',
                                                  gridTemplateColumns:'1fr 1fr',
                                                  gap:'10px',
                                                  marginBottom:'30px'
                                                }}
            >
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="email-field">
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="password-field">
              <input type="password" placeholder="Password" />
            </div>
            <div className="confirm-password-field" style={{marginTop:'30px'}}>
              <input type="password" placeholder="Confirm password" />
            </div>
            <small style={{
              fontWeight:'light',
              textAlign:'center',
            }}>
              <p>By clicking Agree &amp; Join, you agree to the GHNConnect <Link to="/">User agreement</Link>, <Link to="/">Privacy policy</Link> and <Link to="/">Cookie policy</Link></p>
            </small>
            <div className="login-btn">
              <button type="submit">Agree &amp; Join</button>
            </div>
            <div className="separator">
              <div className="line"></div>
              <p>Or</p>
            </div>
            <div className="google-login-btn">
              <button>Continue with Google</button>
            </div>
          </form>
        </ContainerWrap>
        
        <div className="new-user">
          <p>Already on GHN Connect? <Link to="/login">Login</Link></p>
        </div>

      </AuthContainer>

    </div>
  )
}

export default Register