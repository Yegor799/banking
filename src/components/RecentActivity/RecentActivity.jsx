import './RecentActivity.css';
import { useGetAllTransactionsQuery } from '../../redux/bankingApi';
import { Link } from 'react-router-dom';
import TransactionInfo from '../TransactionInfo/TransactionInfo';

const RecentActivity = () => {

  const { data: transactions } = useGetAllTransactionsQuery();   

  return (
    <div className='recent-activity'>

      <div className="recent-activity-head">
        <p>Recent activity</p>
        <p className='all-activity'>All activity</p>
      </div>

      {transactions && transactions.map(transaction => (
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
        <Link to='payments/history'>More activity</Link>
      </div>
      
    </div>
  )
}

export default RecentActivity;