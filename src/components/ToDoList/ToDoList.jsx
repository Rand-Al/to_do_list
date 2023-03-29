import { useState } from "react";
import s from "./ToDoList.module.css";
const ToDoList = ({ toDo, setToDo }) => {
  const [isEdit, setIsEdit] = useState("");
  const [value, setValue] = useState("");
  const deleteItem = (itemId) => {
    const newToDo = [...toDo].filter((item) => item.id !== itemId);
    setToDo(newToDo);
  };
  const changeStatus = (itemId) => {
    let newToDo = [...toDo].map((item) => {
      if (item.id === itemId) {
        item.status = !item.status;
      }
      return item; //? Зачем нужно возвращать?
    });
    setToDo(newToDo);
  };
  const editItem = (itemId, title) => {
    setIsEdit(itemId);
    setValue(title);
  };
  const changeValue = (itemId) => {
    const newToDo = [...toDo].map((item) => {
      if (item.id === itemId) {
        item.title = value;
      }
      return item;
    });
    setToDo(newToDo);
    setIsEdit(false);
  };
  if (toDo.length > 0) {
    return (
      <div className={s.main}>
        {toDo.map((item) => (
          <div key={item.id} className=" flex gap-3">
            {isEdit === item.id ? (
              <div className="bg-white flex-auto h-9 rounded">
                <input
                  className={s.change}
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            ) : (
              <div
                className={
                  item.status === true
                    ? `${s.uncompleted} ${s.item}`
                    : `${s.completed}  ${s.item}`
                }
              >
                {item.title}
              </div>
            )}
            {isEdit === item.id ? (
              <button
                className={`${s.btn_save} ${s.btn} ${s.shadow}`}
                onClick={() => changeValue(item.id)}
              >
                Save
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  className={`${s.btn_del} ${s.btn} ${s.shadow}`}
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
                <button
                  className={`${s.btn_complete} ${s.shadow} ${s.btn}`}
                  onClick={() => changeStatus(item.id)}
                >
                  {item.status === true ? "Complete" : "Uncomplete"}
                </button>
                <button
                  className={`${s.btn_edit} ${s.shadow} ${s.btn}`}
                  onClick={() => editItem(item.id, item.title)}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center text-white font-bold">
        There are no tasks to do. You can add it with input above.
      </div>
    );
  }
};

export default ToDoList;
