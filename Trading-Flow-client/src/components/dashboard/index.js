import React, {useEffect, useState} from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import Left from './left'
import Main from './main'
import Right from './right'

function Dashboard() {
  const nvidia = {
    "company_name": "NVIDIA",
    "company_ticker": "NVDA",
    "company_logo": "https://companieslogo.com/img/orig/NVDA-220e1e03.png?t=1633073585"
  }
  const [ticker, setTicker] = useState(nvidia)
  const {userLoggedIn} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!userLoggedIn){
      navigate('/login')
    }
  }, []);
  
  return (
    <div className='dashboard_page'>
      <div className='dashboard_container'>
        <Left setTicker={setTicker}/>
        <Main ticker={ticker}/>
        <Right ticker={ticker}/>
      </div>
    </div>
  )
}

export default Dashboard