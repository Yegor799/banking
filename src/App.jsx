import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Accounts from './pages/Accounts/Accounts';
import Payments from './pages/Payments/Payments';


function App() {  
  
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/accounts' element={<Accounts/>} />
        <Route path='/payments' element={<Payments/>} />
      </Routes>
    </div>
  );
}

export default App;
