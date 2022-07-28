import React, { useEffect } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'
import { ContainerWrap } from '../../Common/PostsContainer/ContainerWrap';
import { AuthContainer } from './Login.style';
import {Link} from 'react-router-dom'

import appLogo from '../../../images/logo/ghnlogo.png';

const Login = () => {
  const {show, setShow} = useNavbar();


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
    <AuthContainer>
      <ContainerWrap>
        <h1>Login</h1>
        <h6>Stay up to date on the GHNetwork platform</h6>
        <form>
          <div className="email-field">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="password-field">
            <input type="password" placeholder="Password" />
          </div>
          <aside>
            <Link to="/">Forgot password</Link>
          </aside>
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
          <div className="separator">
            <hr/>
            <p>Or</p>
          </div>
          <div className="google-login-btn">
            <button type="submit">Login with Google</button>
          </div>
        </form>
      </ContainerWrap>
      
      <div className="new-user">
        <p>New to GHN Connect? <Link to="/register">Join Now</Link></p>
      </div>
    </AuthContainer>
  )
}

export default Login