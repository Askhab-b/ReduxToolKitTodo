import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.css";
import { add, remove } from "./features/counterReducer";

function App() {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();
  const [text, setText] = useState("")


  const handleAddTodo = () => {
    dispatch(add(text));
    setText("")
  }

  const handleDeleteTodo = (index) => {
  dispatch(remove(index))
  }

  


  return <div className={styles.app}>
  <input value={text} onChange={(e) => setText(e.target.value)}></input>
  <button onClick={handleAddTodo}>Добавить</button>
  {todos.map((item, index) => {
  return (
    <div>{item}
    <button key={index} onClick={() => handleDeleteTodo(index)}>Удалить todo</button>
    <input type="checkbox"/>
    </div>
    
  )
  })}



    
  </div>;
}

export default App;




const arr = [{
  id: 234,
  name: "dfdsfsdf",
  age: 19
}]