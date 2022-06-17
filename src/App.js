import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "./store/cashReducer.js";
import store from "./store/index.js";
import { Provider } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  // const clients = useSelector(state => state.client.clients)

  const add = (cash) => {
    dispatch(addCash({ cash }));
  };

  const get = (cash) => {
    dispatch(getCash({ cash }));
  };

  // const addClient = (name) => {
  //   const client = {
  //     name,
  //     id: Date.now()
  //   }
  //   dispatch({ type: "ADD_CLIENT", payload: client })
  // }

  // const delClient = (client) => {
  //   dispatch({ type: "DEL_CLIENT", payload: client.id })
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <div>Счет:{cash}</div>
        <div>
          <button
            className="button button_cash"
            onClick={() => add(Number(prompt()))}
          >
            +
          </button>
          <button
            className="button button_cash"
            onClick={() => get(Number(prompt()))}
          >
            -
          </button>
        </div>
        {/* <button className="button" onClick={ () => addClient(prompt()) }>Добавить клиента</button>

      { clients.length > 0 ?
        <div>
          { clients.map(client =>
            <button className="button button_del" onClick={ () => delClient(client) }>{ client.name }</button>
          ) }
        </div>
        : <div>База клиентов пустая!</div> } */}
      </div>
    </Provider>
  );
}

export default App;
