import './TransactionInfo.css';

const TransactionInfo = () => {
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
            <p>+€15.00</p>
            <p>12:37 PM</p>
          </div>

        </div>
        
       </div>
  )
}

export default TransactionInfo;