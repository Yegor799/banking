import './App.css';
import Header from './components/Header/Header';
import AccountDetails from './components/AcountDetails/AccountDetails';
import RecentActivity from './components/RecentActivity/RecentActivity';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="container">
      <Header />
      <AccountDetails />
      <RecentActivity />
      <SignIn/>
    </div>
  );
}

export default App;
