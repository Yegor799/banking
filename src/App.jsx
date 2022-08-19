import './App.css';
import Header from './components/Header/Header';
import AccountDetails from './components/AcountDetails/AccountDetails';
import RecentActivity from './components/RecentActivity/RecentActivity';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import Accounts from './pages/Accounts/Accounts';


function App() {  
  
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/accounts' element={<Accounts/>} />
      {/* <AccountDetails />
      <RecentActivity />   */}
      </Routes>
    </div>
  );
}

export default App;
