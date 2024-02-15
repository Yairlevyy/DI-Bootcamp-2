import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase.js';
import { useAuth } from '../../../context/authContext';
import data_companies from "../../../data/companies.js"
import { useNavigate } from 'react-router-dom';
import './left.css'

function Ticker({company_logo,company_name,company_ticker, setTicker}){
  const handleClick = () => {
    setTicker({company_logo,company_name,company_ticker, setTicker})
  };
  return(
    <div className='ticker' onClick={handleClick}>
      <img src={company_logo}/>
      <div className='ticker_details'>
        <h4>{company_name}</h4>
        <p>{company_ticker}</p>
      </div>
    </div>
  )
};

function Left({setTicker, setData}){
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDataArray = data_companies.filter(
    (item) =>
      item.company_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='left_container'>
        <div className='header'>
          <h3>TradingFlow</h3>
          <div className='account'>
            <h4>{currentUser ? currentUser.email.split('@')[0] : 'username'}</h4>
            <p onClick={() => { auth.signOut().then(() => { navigate('/login') }) }}>Logout</p>
          </div>
        </div>

        <div className='body'>
          <input 
            type='text' 
            placeholder='Ex: Apple'
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className='ticker_container'>
            {
              filteredDataArray.map((company)=>(
                <Ticker company_logo={company.company_logo} company_name={company.company_name} company_ticker={company.company_ticker} setTicker={setTicker} setData={setData}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Left