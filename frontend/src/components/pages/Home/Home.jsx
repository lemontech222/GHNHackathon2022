import React, { useEffect, useState } from 'react'
import { useTokens } from '../../../context/TokensContext'
import useRequestResource from '../../../hooks/useRequestResource'

const Home = () => {
  const {tokens} = useTokens()
  const {getResourceCount, resourceCount} = useRequestResource({endpoint:'users/innovators/count',tokens:{tokens}})
  console.log(resourceCount)

  useEffect(()=>{
    getResourceCount()
  },[getResourceCount])

  return (
    <h1>Home</h1>
  )
}

export default Home