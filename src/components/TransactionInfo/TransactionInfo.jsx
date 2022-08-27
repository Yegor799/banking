import './TransactionInfo.css';

const TransactionInfo = ({amount, currency, createdAt}) => {
  return (
    <div className='recent-activity-main'>
        <div className='date-name-amount'>
          <div className='date-name'>
            <div>
              <p className='recent-activity-month'>AUG</p>
              <p className='recent-activity-day'>11</p>
            </div>
            <p>name</p>
          </div>
          <div className="amount-time">
          <p>{amount.toFixed(2)} {currency}</p>
          <p>12:37 {createdAt?.toLocaleString().slice(-2)}</p>
          </div>

        </div>
        
       </div>
  )
}

export default TransactionInfo;