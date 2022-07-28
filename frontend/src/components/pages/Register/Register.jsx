import React, { useEffect } from 'react'
import { useNavbar } from '../../../context/NavigationsContext'

const Register = () => {
  const {show,setShow} = useNavbar();


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
    <h1>Register</h1>
  )
}

export default Register