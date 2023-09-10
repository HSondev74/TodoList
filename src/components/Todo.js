import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleComplete } from "../redux/userSlice";

const Todo = ({ todo }) => {
     const dispatch = useDispatch();
     const [isEditing, setIsEditing] = useState(false);
     const [newValue, setNewValue] = useState(todo.text);

     const handleEditClick = () => {
          setIsEditing(true);
     };
     const handleToggleComplete = () => {
          dispatch(toggleComplete(todo.id));
     };
     const handleSaveEdit = () => {
          dispatch(editTodo({ id: todo.id, text: newValue }));
          setIsEditing(false);
     };
     const handleCancelEdit = () => {
          setIsEditing(false);
          setNewValue(todo.text);
     };
     const handleDelete = () => {
          dispatch(removeTodo(todo.id));
     };
     return (
          <li>
               {isEditing ? (
                    <>
                         <input
                              type="text"
                              value={newValue}
                              onChange={(e) => setNewValue(e.target.value)}
                         />
                         <button onClick={handleSaveEdit}>Save</button>
                         <button onClick={handleCancelEdit}>Cancel</button>
                    </>
               ) : (
                    <>
                         <span>{todo.text}</span>
                         <p>
                              <input
                                   type="checkbox"
                                   checked={todo.completed}
                                   onClick={handleToggleComplete}
                              />
                              completed
                         </p>
                         <button onClick={handleEditClick}>Edit</button>
                         {todo.completed ? (
                              <button onClick={handleDelete}>Delete</button>
                         ) : (
                              <button>Delete</button>
                         )}
                    </>
               )}
          </li>
     );
};

export default Todo;
