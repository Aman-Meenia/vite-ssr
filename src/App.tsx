import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const isBrowser = typeof window !== "undefined";

  return (
    <>
      <div className="h-8">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {isBrowser ? (
          <p>
            This page is running on the <strong>client</strong>.
          </p>
        ) : (
          <p>
            This page is running on the <strong>server</strong>.
          </p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
