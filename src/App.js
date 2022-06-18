import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "./store/cashReducer.js";
import { addClient, getClient } from "./store/clientReducer.js";
import { Timer } from "./components/Timer.js";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const clients = useSelector((state) => state.client.clients);

  const add = (cash) => {
    dispatch(addCash({ cash }));
  };

  const get = (cash) => {
    dispatch(getCash({ cash }));
  };

  const clientAdd = (name) => {
    const client = {
      name,
      id: Date.now(),
    };
    dispatch(addClient(client));
  };

  const clientDel = (client) => {
    dispatch(getClient(client));
  };

  return (
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
      <button className="button" onClick={() => clientAdd(prompt())}>
        Добавить клиента
      </button>
      {clients.length > 0 ? (
        <div>
          {clients.map((client) => (
            <div key={client.id} onClick={() => clientDel(client.id)}>
              {client.name}
            </div>
          ))}
        </div>
      ) : (
        <div>База клиентов пустая!</div>
      )}
      <div>
        <Timer></Timer>
      </div>
    </div>
  );
}

export default App;
