import './TransactionFullInfo.css';
import TableCell from '@mui/material/TableCell';

const TransactionFullInfo = ({status, date, accountNumber, iban, description, amount, currency}) => {

  const transactionStatuses = ['draft', 'pending', 'completed', 'declined']
  return (    
    <>
      <TableCell >{transactionStatuses[status]}</TableCell>
      <TableCell align="right">{new Date(date).toLocaleString()}</TableCell>
      <TableCell align="right">{accountNumber}</TableCell>
      <TableCell align="right">{iban}</TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">{amount} {currency}</TableCell>
      </>   
  )
}

export default TransactionFullInfo;