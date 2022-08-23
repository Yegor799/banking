import './Accounts.css';
import { useGetAllAccountsQuery } from '../../redux/bankingApi';
import AccountInfo from '../../components/AccountInfo/AccountInfo';


const Accounts = () => {

  const { data: accounts } = useGetAllAccountsQuery();

  console.log(accounts)

  return (
    <>      
        {accounts && accounts.map(acc => (
          <div className="accounts" key={acc.number}>
          <AccountInfo            
            number={acc.number}
            providerCurrency={acc.providerCurrency}
            providerNumber={acc.providerNumber}
            // currentBalance={100}
            // reservedBalance={100}
            // availableBalance={100}
            />
            </div>
        ))}      
    </>
  )
}

export default Accounts;