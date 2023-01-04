import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";

import "./styles.css";

// <FirstApp title="Hello, I'm" subtitle="Developer Software" age={25} />

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp value={25}/> */}
    <FirstApp title="Hola, soy"/>    
  </React.StrictMode>
);
