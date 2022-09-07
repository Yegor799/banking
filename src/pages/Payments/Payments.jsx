import './Payments.css';
import { Routes, Route, NavLink } from "react-router-dom";
import TransactionsHistory from '../TransactionsHistory/TransactionsHistory';
import SepaPayment from '../SepaPayment/SepaPayment';

const Payments = () => {

  let activeStyle = {
    color: '#56d3a2'
  };

  return (
    <>
      <div className='payments'>
        <NavLink
          to='/payments/history'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >History</NavLink>
        <NavLink
          to='/payments/sepa'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >European</NavLink>
      </div>

      <Routes>
        <Route path='/history' element={<TransactionsHistory />} />
        <Route path='/sepa' element={<SepaPayment />} />
      </Routes>
    </>
  )
}

export default Payments;