import './App.css';
import Header from './components/Header/Header';
import AccountDetails from './components/AcountDetails/AccountDetails';
import RecentActivity from './components/RecentActivity/RecentActivity';
import { useGetAllAccountsQuery } from './redux/bankingApi';

function App() {

  const { data, error, isLoading } = useGetAllAccountsQuery();
  
  return (
    <div className="container">
      <Header />
      <AccountDetails />
      <RecentActivity />      
    </div>
  );
}

export default App;
