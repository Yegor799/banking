import './AccountDetails.css';

const AccountDetails = () => {
  return (
    <div className="account-details">
      <div className="account">
        <p>litasSepa</p>
        <p className='details'>Account details</p>
      </div>
      

      <div className="account-info">
        <div className="account-info-head">
          <p className='accout-name'>Account name</p>
          <p>Currency</p>
          <p>Current</p>
          <p>Reserved</p>
          <p>Available</p>
        </div>

        <div className="account-info-value">
          <div className='account-name-value'>
            <p>3215464214</p>
            <p>GB04CFZZ00994300000329</p>
          </div>
          <p>EUR</p>
          <p>€100.00</p>
          <p>€0.00</p>
          <p>€100.00</p>
        </div>
      </div>

      <div className='account-info-bottom'>
        <p>See all accounts</p>
      </div>
    </div>
  )
}

export default AccountDetails;