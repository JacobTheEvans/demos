import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => (
  <div>
    <Header brand="Todo App" slogan="Get them things done!" />
    <Todos/>
  </div>
)

export default App;
