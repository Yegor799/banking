import './TransactionInfo.css';
import { useState, useEffect } from 'react';

const TransactionInfo = ({ amount, currency, createdAt, description }) => {
  
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];  

  useEffect(() => {
        
    if (!createdAt) {
      return
    }
    
    const transactionTime = new Date(createdAt);

    setMonth(transactionTime.getMonth());
    setDay(transactionTime.getUTCDate());
    setHours(transactionTime.getHours());
    setMinutes(transactionTime.getMinutes());
   
  }, [createdAt])
  

  return (
    <div className='recent-activity-main'>
      <div className='date-name-amount'>
        <div className='date-name'>
          <div>
            <p className='recent-activity-month'>{monthNames[month]}</p>
            <p className='recent-activity-day'>{day}</p>
          </div>
          <p>{description}</p>
        </div>
        <div className="amount-time">
          <p>{amount.toFixed(2)} {currency}</p>
          <p>{hours}:{minutes}</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionInfo;