import './SepaPayment.css';
import { useState, useEffect } from 'react';
import { useGetAllAccountsQuery } from '../../redux/bankingApi';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SepaPayment = () => {

  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState(''); 


  const { data: accounts, isLoading } = useGetAllAccountsQuery();
  const [euroAccounts, setEuroAccounts] = useState(null);

  useEffect(() => {
    if (!accounts) {
      return
    }

    setEuroAccounts(accounts.filter(account => account.providerCurrency === 'EUR'))
  }, [accounts]);
 

  const handleChange = (e) => {
      setAccount(e.target.value)
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
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
              sx={{ marginBottom: 5 }}
            >

              {euroAccounts.map(account => (
                <MenuItem key={account.number} value={account.number}>
                  <p>{account.providerCurrency}</p>
                  <p>{account.number}</p>
                </MenuItem>
              ))}
            </Select>

            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <TextField margin="normal" fullWidth label="You send" variant="standard" value={amount} onChange={handleChangeAmount} />
              <TextField margin="normal" fullWidth label="Name" variant="standard" />
              <TextField margin="normal" fullWidth label="IBAN" variant="standard" />
              <TextField margin="normal" fullWidth label="Address" variant="standard" />
              <TextField margin="normal" fullWidth label="City" variant="standard" />
              <TextField margin="normal" fullWidth label="State" variant="standard" />
              <TextField margin="normal" fullWidth label="Postal code" variant="standard" />
              <TextField margin="normal" fullWidth label="Country" variant="standard" />
              <TextField margin="normal" fullWidth label="Description" variant="standard" />
            </Box>
            

          </FormControl>
        </div>
      }
    </div>
  )
}

export default SepaPayment;