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
          
          <AccountInfo
            number={primary.number}
            providerCurrency={primary.providerCurrency}
            providerNumber={primary.providerNumber}
            currentBalance={currentAccount?.balances[0].current}
            reservedBalance={currentAccount?.balances[0].reserved}
            availableBalance={currentAccount?.balances[0].available}
          />

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