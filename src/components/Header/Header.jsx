import './Header.css'
import logo from '../../images/logo.jpeg';

const Header = () => {
  return (
    <div className="header">
      <div className="company-name">
        <img className='logo' src={logo} alt="logo" />
        <h2>Banking</h2>
      </div>

      <div className='panel'>
        <p>Dashboard</p>
        <p>Payments & transfers</p>
        <p>Currency exchange</p>
        <p>Accounts</p>
        <p>Cards</p>
        <p>Savings</p>
        <p>Settings</p>
      </div>

      <div className="second-panel">
        <div className="second-panel-img"></div>
        <div className="second-panel-account">
          <p>New account</p>
          <p>Add funds</p>
          <p>Transfer money</p>
        </div>
        <div className="second-panel-balance">
          <p className='total-balance'>Total balance</p>
          <p className='amount'>€20,000</p>
        </div>
      </div>     

    </div>
  )
}

export default Header;