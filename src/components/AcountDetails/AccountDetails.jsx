import './AccountDetails.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import { useGetCurrentAccountInfoQuery,  useGetAllAccountsQuery} from '../../redux/bankingApi';
import AccountInfo from '../AccountInfo/AccountInfo';


const AccountDetails = () => {
  
  const [primary, setPrimary] = useState(null); 
  // const [current, setCurrent] = useState(primary)

  const { data:currentAccount } = useGetCurrentAccountInfoQuery(primary ? primary.number : '');
  const { data: accounts } = useGetAllAccountsQuery();  
  

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
            {/* <div className="account-info-head">
              <p className='accout-name'>Account name</p>
              <p>Currency</p>
              <p>Current</p>
              <p>Reserved</p>
              <p>Available</p>
            </div> */}

            <AccountInfo
              number={primary.number}
              providerCurrency={primary.providerCurrency}
              providerNumber={primary.providerNumber}
              currentBalance={currentAccount?.balances[0].current}
              reservedBalance={currentAccount?.balances[0].reserved}
              availableBalance={currentAccount?.balances[0].available}
            />

            {/* <div className="account-info-value">
              <div className='account-name-value'>
                <p>{primary.number} <span className='account-info-currency'>{primary.providerCurrency}</span> </p>
                <p>{primary.providerNumber}</p>
              </div>
              <p>{primary.providerCurrency}</p>
              <p>{currentAccount?.balances[0].current}</p>
              <p>{currentAccount?.balances[0].reserved}</p>
              <p>{currentAccount?.balances[0].available}</p>
            </div> */}
          </div>

          <div className='account-info-bottom'>
            <Link to='/accounts'>See all accounts</Link>
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