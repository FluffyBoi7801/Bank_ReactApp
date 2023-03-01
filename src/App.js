import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers)

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: Number(prompt('Сколько внести?'))});
  }

  const removeCash = () => {
    dispatch({type: "WITHDRAW", payload: Number(prompt('Сколько снять?'))});
  }

  const addClient = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeClient = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>У Вас на счету {cash} монет</div>
        <div className={"flex-div"}>
          <button onClick={ () => addCash() }>Пополнить</button>
          <button onClick={ () => removeCash() }>Снять</button>
        </div>
        <div className={"flex-div"}>
          <button onClick={ () => addClient(prompt('Имя клиента?')) }>Добавить клиента!</button>
          <button onClick={ () => dispatch(fetchCustomers()) }>Получить клиентов из базы!</button>
        </div>
        {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={ () => removeClient(customer) }>{customer.name}</div>
          )}  
        </div>
        :
        <div>У банка ещё нет клиентов!</div>}
      </header>
    </div>
  );
}

export default App;
