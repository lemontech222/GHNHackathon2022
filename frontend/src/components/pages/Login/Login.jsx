import React, { useEffect, useState } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'
import { ContainerWrap } from '../../Common/PostsContainer/ContainerWrap';
import { AuthContainer } from './Login.style';
import {Link,useNavigate} from 'react-router-dom'
import { useTokens } from '../../../context/TokensContext';
import useRequestResource from '../../../hooks/useRequestResource';

import appLogo from '../../../images/logo/ghnlogo.png';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {getTokens} = useRequestResource({endpoint:'token'})

  const {show, setShow} = useNavbar();
  const {tokens, setTokens} = useTokens()

  const navigate=useNavigate()

  const goToHomepage = ()=>{
    navigate('/')
  }

  const submitLogin = (e)=>{
    e.preventDefault();
    const values = {
      email, password
    }
    getTokens(values)
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

  useEffect(()=>{
    if(tokens){
      navigate("/dashboard")
    }
  },[tokens,navigate])

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
          <h1>Login</h1>
          <h6>Stay up to date on the GHNetwork platform</h6>
          <form onSubmit={submitLogin}>
            <div className="email-field">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="E-mail" />
            </div>
            <div className="password-field">
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <aside>
              <Link to="/">Forgot password</Link>
            </aside>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
            <div className="separator">
              <div className="line"></div>
              <p>Or</p>
            </div>
            <div className="google-login-btn">
              <button>Login with Google</button>
            </div>
          </form>
        </ContainerWrap>
        
        <div className="new-user">
          <p>New to GHN Connect? <Link to="/register">Join Now</Link></p>
        </div>

      </AuthContainer>

    </div>
  )
}

export default Login