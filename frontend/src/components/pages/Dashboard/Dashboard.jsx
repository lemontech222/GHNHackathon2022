import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTokens } from '../../../context/TokensContext'

const Dashboard = () => {
    const navigate = useNavigate()
    const {user,tokens} = useTokens()

    useEffect(()=>{
        if(!tokens){
            navigate('/login')
        }
        if(user.is_hub_admin){
            navigate('hub')
        }else if(user.is_startup_admin){
            navigate('startup')
        }else {
            navigate('/')
        }
    },[tokens,user,navigate])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard