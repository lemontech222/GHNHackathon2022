import React, { useState, useEffect } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'
import { ContainerWrap } from '../../Common/PostsContainer/ContainerWrap';
import {DesgnationButtons} from './Register.style';
import { AuthContainer } from '../Login/Login.style';
import {Link,useNavigate} from 'react-router-dom'
import useRequestResource from '../../../hooks/useRequestResource';

import appLogo from '../../../images/logo/ghnlogo.png';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [hubDesgnation, setHubDesgnation] = useState({set:false,value:'hub'})
  const [startupDesgnation, setStartupDesgnation] = useState({set:true,value:'hub'})
  const [innovatorDesgnation, setInnovatorDesgnation] = useState({set:false,value:'hub'})

  const [designation, setDesignation] = useState('')

  const {show,setShow} = useNavbar();
  // const {addUser} = useRequestResource({endpoint:''});
  
  const navigate=useNavigate()

  const goToHomepage = ()=>{
    navigate('/')
  }

  // const submitRegister = (e)=>{
  //   e.preventDefault();
  //   if(password1 !== password2){
  //     console.log('passwords do not match!')
  //     return
  //   }
  //   const values = {
  //     firstName,lastName,email,password1,password2
  //   }
  //   addUser(values,designation, ()=>{
  //     console.log('registeration successful')
  //     navigate('/login')
  //   })
  // }

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
              <DesgnationButtons designation={hubDesgnation}>Hub</DesgnationButtons>
              <DesgnationButtons designation={startupDesgnation}>Startup</DesgnationButtons>
              <DesgnationButtons designation={innovatorDesgnation}>Innovator</DesgnationButtons>
            </div>            
          </div>
          
          <h6>Stay up to date on the GHNetwork platform</h6>
          <form>
            <div className="names-field" style={{
                                                  display:'grid',
                                                  gridTemplateColumns:'1fr 1fr',
                                                  gap:'10px',
                                                  marginBottom:'30px'
                                                }}
            >
              <input type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
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