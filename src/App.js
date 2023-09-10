import React, { useState } from "react";

import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/userSlice";
const App = () => {
     const dispatch = useDispatch();
     const [newTask, setNewTask] = useState("");

     const handleAddTask = () => {
          if (newTask.trim() !== "") {
               dispatch(addTodo(newTask));
               setNewTask("");
          }
     };
     return (
          <div>
               <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
               />
               <button onClick={handleAddTask}>Add</button>
               <TodoList />
          </div>
     );
};

export default App;
