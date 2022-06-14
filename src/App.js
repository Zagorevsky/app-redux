import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD", payload: cash, })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET", payload: cash, })
  }




  return (
    <div className="App">
      <div>Счет:{ cash }</div>
      <button onClick={ () => addCash(Number(prompt())) }>Внести на счет</button>
      <button onClick={ () => getCash(Number(prompt())) }>Снять со счета</button>
    </div>
  );
}

export default App;
