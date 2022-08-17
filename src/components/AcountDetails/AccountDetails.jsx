import './AccountDetails.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const AUTH_TOKEN = '7ff7e0139784048a9d56420d0783e5a4';
const clientId = '1d7f3023-e257-4381-b997-bf56911e821a'


axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = 'https://client.demo.crassu.la';

const AccountDetails = () => {

  const [accounts, setAccounts] = useState(null);
  const [primary, setPrimary] = useState(null); 

   

  useEffect(() => {
    axios.get(`/api/clients/${clientId}/accounts`)
    .then(function (response) {
      setAccounts(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }, [])

  useEffect(() => {
    let primary;
    
    if (accounts) {
     primary = accounts.find(acc => acc.primary)
    }

    setPrimary(primary)
  }, [accounts])
  
  

  return (
    <>      
      {primary ?
    
        <div className="account-details">
          <div className="account">
            <p>{primary.name}</p>
            <p className='details'>Account details</p>
          </div>
      

          <div className="account-info">
            <div className="account-info-head">
              <p className='accout-name'>Account name</p>
              <p>Currency</p>
              <p>Current</p>
              <p>Reserved</p>
              <p>Available</p>
            </div>

            <div className="account-info-value">
              <div className='account-name-value'>
                <p>{primary.number} <span className='account-info-currency'>{primary.providerCurrency}</span> </p>
                <p>{primary.providerNumber}</p>
              </div>
              <p>{primary.providerCurrency}</p>
              <p>€100.00</p>
              <p>€0.00</p>
              <p>€100.00</p>
            </div>
          </div>      

          <div className='account-info-bottom'>
            <p>See all accounts</p>
          </div>

        </div>
    
        :
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
    </>
  )
}

export default AccountDetails;