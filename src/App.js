import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Lütfen yapılacak bir şey ekleyin");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
    };
    setItems((e) => [...e, item]);
    setNewItem("");
  }

  const onChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="add an item.."
          value={newItem}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <button onClick={() => addItem()}>EKLE</button>
      </div>

      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
