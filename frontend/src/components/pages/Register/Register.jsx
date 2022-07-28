import React, { useState, useEffect } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'
import { ContainerWrap } from '../../Common/PostsContainer/ContainerWrap';
import {DesgnationButtons} from './Register.style';
import { AuthContainer } from '../Login/Login.style';
import {Link,useNavigate} from 'react-router-dom'
import useRequestResource from '../../../hooks/useRequestResource';
import axios from 'axios';

import appLogo from '../../../images/logo/ghnlogo.png';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [hubDesgnation, setHubDesgnation] = useState({set:false,value:'register_hub'})
  const [startupDesgnation, setStartupDesgnation] = useState({set:true,value:'register_startup'})
  const [innovatorDesgnation, setInnovatorDesgnation] = useState({set:false,value:'register'})

  const [designation, setDesignation] = useState('')

  const {show,setShow} = useNavbar();
  const {addUser} = useRequestResource({endpoint:''});
  
  const navigate=useNavigate()

  const goToHomepage = ()=>{
    navigate('/')
  }

  const toggleHubDesgnation = ()=>{
    setHubDesgnation({...hubDesgnation,set:true})
    setInnovatorDesgnation({...innovatorDesgnation,set:false})
    setStartupDesgnation({...startupDesgnation,set:false})
  }

  const toggleInnovatorDesgnation = ()=>{
    setInnovatorDesgnation({...innovatorDesgnation,set:true})
    setStartupDesgnation({...startupDesgnation,set:false})
    setHubDesgnation({...hubDesgnation,set:false})
  }
  
  const toggleStartupDesgnation = ()=>{
    setStartupDesgnation({...startupDesgnation,set:true})
    setInnovatorDesgnation({...innovatorDesgnation,set:false})
    setHubDesgnation({...hubDesgnation,set:false})
  }

  const submitRegister = (e)=>{
    e.preventDefault();
    if(password1 !== password2){
      console.log('passwords do not match!')
      return
    }
    const values = {
      email:email,
      username:username,
      first_name:firstName,
      last_name:lastName,
      password:password1
    }
    if(hubDesgnation.set){
      axios.post(`api/users/${hubDesgnation.value}/`,values)
        .then((res)=>{
          navigate('/login')
        })
        .catch((error)=>console.log(error))
    }
    if(startupDesgnation.set){
      axios.post(`api/users/${startupDesgnation.value}/`,values)
        .then((res)=>{
          navigate('/login')
        })
        .catch((error)=>console.log(error))
    }
    if(innovatorDesgnation.set){
      axios.post(`api/users/${innovatorDesgnation.value}/`,values)
        .then((res)=>{
          navigate('/login')
        })
        .catch((error)=>console.log(error))
    }
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
          <div className="auth-heading">
            <h1>Register</h1>
            <div className="desgnation-btns">
              <DesgnationButtons onClick={toggleHubDesgnation} designation={hubDesgnation}>Hub</DesgnationButtons>
              <DesgnationButtons onClick={toggleStartupDesgnation} designation={startupDesgnation}>Startup</DesgnationButtons>
              <DesgnationButtons onClick={toggleInnovatorDesgnation} designation={innovatorDesgnation}>Innovator</DesgnationButtons>
            </div>            
          </div>
          
          <h6>Stay up to date on the GHNetwork platform</h6>
          <form onSubmit={submitRegister}>
            <div className="names-field" style={{
                                                  display:'grid',
                                                  gridTemplateColumns:'1fr 1fr',
                                                  gap:'10px',
                                                  marginBottom:'30px'
                                                }}
            >
              <input type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
              <input type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </div>
            <div className="email-field">
              <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="username-field">
              <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className="password-field">
              <input type="password" placeholder="Password" value={password1} onChange={(e)=>setPassword1(e.target.value)} />
            </div>
            <div className="confirm-password-field" style={{marginTop:'30px'}}>
              <input type="password" placeholder="Confirm password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
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