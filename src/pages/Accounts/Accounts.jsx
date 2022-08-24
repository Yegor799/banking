import './Accounts.css';
import { useGetAllAccountsQuery } from '../../redux/bankingApi';
import AccountInfo from '../../components/AccountInfo/AccountInfo';


const Accounts = () => {

  const { data: accounts } = useGetAllAccountsQuery();  

  return (
    <>
      {accounts && accounts.map(acc => (
        <div className="accounts" key={acc.number}>
          <AccountInfo
            number={acc.number}
            providerCurrency={acc.providerCurrency}
            providerNumber={acc.providerNumber}
          />
        </div>
      ))}
    </>
  )
}

export default Accounts;