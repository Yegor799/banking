import './TransactionsHistory.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { useGetAllTransactionsQuery } from '../../redux/bankingApi';
import TransactionFullInfo from '../../components/TransactionFullInfo/TransactionFullInfo';



const TransactionsHistory = () => {

  const { data: transactions, isLoading } = useGetAllTransactionsQuery();  

  return (
    <>
      {isLoading &&
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }

      {transactions &&
        <div className='transactions-history'>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow >
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} >Status</TableCell>
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} align="right">Date</TableCell>
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} align="right">Account</TableCell>
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} align="right">Remitter/Beneficiary</TableCell>
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} align="right">Description</TableCell>
                  <TableCell sx={{ color: '#7e7779', fontSize: 14, fontWeight: 900 }} align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map(transaction => (
                  <TableRow
                    key={transaction.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TransactionFullInfo
                      status={transaction.status}
                      date={transaction.createdAt}
                      accountNumber={transaction.account.number}
                      iban={transaction.fromAccountIban}
                      description={transaction.description}
                      amount={transaction.amount}
                      currency={transaction.currency}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </>
  )
}

export default TransactionsHistory;
