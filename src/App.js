import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import AddToDo from "./components/AddToDo/AddToDo.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import { data } from "./data.js";
import Footer from "./components/Footer/Footer";

function App() {
  const [toDo, setToDo] = useState(data);
  return (
    <div className="App flex flex-col">
      <Header />
      <div className="container mx-auto flex-auto">
        <h1 className="text-white text-4xl font-semibold text-center mb-10">
          Add your task below
        </h1>
        <AddToDo toDo={toDo} setToDo={setToDo} />
        <ToDoList toDo={toDo} setToDo={setToDo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
