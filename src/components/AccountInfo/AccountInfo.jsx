import './AccountInfo.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const AccountInfo = ({
  number,
  providerCurrency,
  providerNumber,
  currentBalance,
  reservedBalance,
  availableBalance
}) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Account name</TableCell>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Current</TableCell>
            <TableCell align="center">Reserved</TableCell>
            <TableCell align="center">Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>          
            <TableRow
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}            
            >
              <TableCell component="th" scope="row">
                <p>{number} <span className='account-info-currency'>{providerCurrency}</span> </p>
                <p>{providerNumber}</p>
              </TableCell>
            <TableCell align="center">{providerCurrency}</TableCell>
              <TableCell align="center">{currentBalance}</TableCell>
              <TableCell align="center">{reservedBalance}</TableCell>
              <TableCell align="center">{availableBalance}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AccountInfo;