import './RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className='recent-activity'>

      <div className="recent-activity-head">
        <p>Recent activity</p>
        <p className='all-activity'>All activity</p>
      </div>

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

      <div className="recent-activity-bottom">
        <p>More activity</p>
      </div>
      
    </div>
  )
}

export default RecentActivity;