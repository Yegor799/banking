import './Header.css'
import logo from '../../images/logo.jpeg';
import { useGetBalancesQuery } from '../../redux/bankingApi';
import { Link } from "react-router-dom";

const Header = () => {

  const { data } = useGetBalancesQuery();

  return (
    <div className="header">
      <div className="company-name">
        <img className='logo' src={logo} alt="logo" />
        <h2>Banking</h2>
      </div>

      <div className='panel'>
        <Link to='/'>Dashboard</Link>
        <p>Payments & transfers</p>
        <p>Currency exchange</p>
        <Link to='/accounts'>Accounts</Link>
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
          <p className='amount'>€{data ? data[0].current : 0}</p>
        </div>
      </div>     

    </div>
  )
}

export default Header;