import './AccountInfo.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useGetCurrentAccountInfoQuery } from '../../redux/bankingApi';

const AccountInfo = ({
  number,
  providerCurrency,
  providerNumber,
  // currentBalance,
  // reservedBalance,
  // availableBalance
}) => {

  const { data } = useGetCurrentAccountInfoQuery(number ? number : '');

  console.log(data)

  return (
    <div className='account-info'>
      {data ? 
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account number</TableCell>
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
              <TableCell align="center">{data.balances.current}</TableCell>
              <TableCell align="center">{0}</TableCell>
              <TableCell align="center">{0}</TableCell>
            </TableRow>
          
          </TableBody>
        </Table>
        </TableContainer>
        :   
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
    </div>
  );
}

export default AccountInfo;