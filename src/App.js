import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const clients = useSelector(state => state.client.clients)
  console.log(clients)

  const addCash = (cash) => {
    dispatch({ type: "ADD", payload: cash, })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET", payload: cash, })
  }

  const addClient = (name) => {
    const client = {
      name,
      id: Date.now()
    }
    dispatch({ type: "ADD_CLIENT", payload: client })
  }

  const getClient = () => {

  }


  return (
    <div className="App">
      <div>Счет:{ cash }</div>
      <button className="Button" onClick={ () => addCash(Number(prompt())) }>Внести на счет</button>
      <button className="Button" onClick={ () => getCash(Number(prompt())) }>Снять со счета</button>
      <button className="Button" onClick={ () => addClient(prompt()) }>Добавить клиента</button>
      {/* <button className="Button" onClick={ () => getClient(prompt()) }>Удалить клиента</button> */ }
      { clients.length > 0 ?
        <div>
          { clients.map(client =>
            <div>{client.name}</div>
          )}
        </div>
        : <div>База клиентов пустая!</div> }
    </div>
  );
}

export default App;
