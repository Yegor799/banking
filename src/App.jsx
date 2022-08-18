import './App.css';
import Header from './components/Header/Header';
import AccountDetails from './components/AcountDetails/AccountDetails';
import RecentActivity from './components/RecentActivity/RecentActivity';



function App() {  
  
  return (
    <div className="container">
      <Header />
      <AccountDetails />
      <RecentActivity />  
      
    </div>
  );
}

export default App;
