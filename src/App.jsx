import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  // изначально undefined

  // undefined -> 0
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count % 2 === 0) {
  //     alert("Число четное");
  //   } else {
  //     alert("Число нечетное");
  //   }
  // }, [count]); // dependency array, массив зависимостей

  console.log(count, "COUNT");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="counter">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <Counter number={count} />
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
