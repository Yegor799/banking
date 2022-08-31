import './SepaPayment.css';
import { useState, useEffect } from 'react';
import { useGetAllAccountsQuery } from '../../redux/bankingApi';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SepaPayment = () => {

  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('')

  const { data: accounts, isLoading } = useGetAllAccountsQuery();
  const [euroAccounts, setEuroAccounts] = useState(null);

  useEffect(() => {
    if (!accounts) {
      return
    }

    setEuroAccounts(accounts.filter(account => account.providerCurrency === 'EUR'))
  }, [accounts]);
  
  console.log(euroAccounts)

  const handleChange = (e) => {
      setAccount(e.target.value)
  }

  return (
    <div className='sepa-payment'>
      <h2 className='sepa-payment-title'>European transfer</h2>

      {isLoading &&
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      }

      {euroAccounts &&
        <div className='sepa-payment-select'>
          <FormControl required variant='standard' sx={{ width: '33%' }}>
            <InputLabel id="account-select">From account</InputLabel>
            <Select
              labelId="account-select"
              value={account}
              label="From account"
              onChange={handleChange}
            >

              {euroAccounts.map(account => (
                <MenuItem key={account.number} value={account.number}>
                  <p>{account.providerCurrency}</p>
                  <p>{account.number}</p>                  
                </MenuItem>
              ))}          
            </Select>
          </FormControl>
        </div>
      }
    </div>
  )
}

export default SepaPayment;