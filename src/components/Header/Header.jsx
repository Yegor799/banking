import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/logo.jpeg';
import { useGetBalancesQuery, useGetPersonDetailsQuery } from '../../redux/bankingApi';
import { NavLink } from "react-router-dom";


const Header = () => {

  let activeStyle = {
    color: '#56d3a2'
  };

  const { data: balances } = useGetBalancesQuery();
  const { data: personDetails } = useGetPersonDetailsQuery();  
  
  return (
    <div className="header">
      <div className='header-info'>
        <div className="company-name">
          <img className='logo' src={logo} alt="logo" />
          <h2>Banking</h2>
        </div>

        <div className='person-details'>
          <div className="person-icon">
            <PersonIcon />
          </div>
          
          <p>{personDetails && personDetails.name}</p>
        </div>
      </div>

      <div className='header-panel'>
        <NavLink
          to='/'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >Dashboard</NavLink>
        <NavLink
          to='/payments'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >Payments & transfers</NavLink>
        <NavLink
          to='/accounts'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >Accounts</NavLink>
      </div>

      <div className="second-panel">
        <div className="second-panel-img"></div>
        <div className="second-panel-account">
          <NavLink
            to='/payments'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >Transfer money</NavLink>
        </div>
        <div className="second-panel-balance">
          <p className='total-balance'>Total balance</p>
          <p className='amount'>€{balances && balances.length !== 0 ? balances[0].current : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;