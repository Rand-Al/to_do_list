import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import AddToDo from "./components/AddToDo/AddToDo.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      title: "first to do",
      status: true,
    },
    {
      id: 2,
      title: "second to do",
      status: true,
    },
    {
      id: 3,
      title: "third to do",
      status: false,
    },
  ]);
  return (
    <div className="App ">
      <Header />

      <div className="container mx-auto">
        <h1 className="text-white text-4xl font-semibold text-center mb-10">
          Add your task below
        </h1>
        <AddToDo toDo={toDo} setToDo={setToDo} />
        <ToDoList toDo={toDo} setToDo={setToDo} />
      </div>
    </div>
  );
}

export default App;
