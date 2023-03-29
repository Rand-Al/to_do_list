import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./AddToDo.module.css";

const AddToDo = ({ toDo, setToDo }) => {
  const [inputValue, setInputValue] = useState("");
  const saveToDo = () => {
    if (inputValue) {
      setToDo([
        ...toDo,
        {
          id: uuidv4(),
          title: inputValue,
          status: true,
        },
      ]);
      setInputValue("");
      console.log(toDo);
    }
  };

  return (
    <div>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          placeholder="Input a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          className={s.button}
          type="button"
          value="Add task"
          onClick={() => saveToDo()}
        />
      </form>
    </div>
  );
};

export default AddToDo;
