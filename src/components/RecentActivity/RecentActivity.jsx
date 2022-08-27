import './RecentActivity.css';
import { useGetAllTransactionsQuery } from '../../redux/bankingApi';
import TransactionInfo from '../TransactionInfo/TransactionInfo';
import { useEffect } from 'react';

const RecentActivity = () => {

  const { data: transactions } = useGetAllTransactionsQuery();

  console.log(transactions);  
  
  

  

  return (
    <div className='recent-activity'>

      <div className="recent-activity-head">
        <p>Recent activity</p>
        <p className='all-activity'>All activity</p>
      </div>

     { transactions && transactions.map(transaction => (
       <TransactionInfo
         key={transaction.id}
         amount={transaction.amount}
         currency={transaction.currency}
         createdAt={transaction.createdAt}
         description={transaction.description}
       />
       ))
}
      <div className="recent-activity-bottom">
        <p>More activity</p>
      </div>
      
    </div>
  )
}

export default RecentActivity;