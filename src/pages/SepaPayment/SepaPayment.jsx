import './SepaPayment.css';
import { useState, useEffect } from 'react';
import { useGetAllAccountsQuery } from '../../redux/bankingApi';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import { sepaPayment } from '../../api/api';
import Modal from '../../components/Modal/Modal';


const SepaPayment = () => {

  const [euroAccounts, setEuroAccounts] = useState(null);
  const [fromAccount, setFromAccount] = useState('');
  const [amount, setAmount] = useState(''); 
  const [recipientName, setRecipientName] = useState('');
  const [recipientIban, setRecipientIban] = useState('');
  const [details, setDetails] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [beneficiaryType, setBeneficiaryType] = useState(1);
  const [recipientSwift, setRecipientSwift] = useState('');

  const [succeessfulPayment, setSucceessfulPayment] = useState(null);
  const [paymentWithError, setPaymentWithError] = useState(null);  
  const [isActive, setIsActive] = useState(false);
  
  
  const { data: accounts, isLoading } = useGetAllAccountsQuery();  

  useEffect(() => {
    if (!accounts) {
      return
    }

    setEuroAccounts(accounts.filter(account => account.providerCurrency === 'EUR'))
  }, [accounts]); 

  useEffect(() => {
    if (succeessfulPayment || paymentWithError) {
      setIsActive(true)
    }    
  }, [succeessfulPayment, paymentWithError]);

  const handleChange = (e) => {
      setFromAccount(e.target.value)
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleChangeRecipientName = (e) => {
    setRecipientName(e.target.value)
  }

  const handleChangeRecipientIban = (e) => {
    setRecipientIban(e.target.value)
  }

  const handleChangeRecipientSwift = (e) => {
    setRecipientSwift(e.target.value)
  }

  const handleChangeDetails = (e) => {
    setDetails(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sepaPayment(fromAccount, currency, amount, recipientName, recipientIban, details, beneficiaryType, recipientSwift)
      .then(res => {
        setSucceessfulPayment(res)
      })
      .catch(err => {
      setPaymentWithError(err)
    })
  }

  const handleClose = () => {
    setIsActive(false);
  };

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
          <Box component="form" onSubmit={handleSubmit}>
            <FormControl variant='standard' sx={{ width: 400 }}>
              <InputLabel id="account-select">From account</InputLabel>
              <Select
                required
                labelId="account-select"
                value={fromAccount}
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
            </FormControl>
              
            <TextField required margin="normal" fullWidth label="You send" variant="standard" value={amount} onChange={handleChangeAmount} />
            <TextField required margin="normal" fullWidth label="Name" variant="standard" value={recipientName} onChange={handleChangeRecipientName} />
            <TextField required margin="normal" fullWidth label="IBAN" variant="standard" value={recipientIban} onChange={handleChangeRecipientIban} />
            <TextField required margin="normal" fullWidth label="Swift" variant="standard" value={recipientSwift} onChange={handleChangeRecipientSwift} />
            <TextField required margin="normal" fullWidth label="Description" variant="standard" value={details} onChange={handleChangeDetails} />
              
            <Button sx={{ marginTop: 5, backgroundColor: '#3ac690', '&:hover': { backgroundColor: '#3ac690' } }} fullWidth type='submit' variant="contained">Send</Button>
            
          </Box>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isActive}
            onClick={handleClose}
          >
            {paymentWithError && <Modal error={true} />}
            {succeessfulPayment && <Modal error={false} />}
          </Backdrop>
        </div>
      }
    </div>
  )
}

export default SepaPayment;