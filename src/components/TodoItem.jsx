import { useState } from "react";
import styles from "../styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemprop, handleChange, delTodo, setUpdate }) => {
  const [updateInput, setUpdateInput] = useState(itemprop.title);
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleEditing = () => {
    setEditing(true);
  };
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(updateInput, itemprop.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemprop.completed}
          onChange={() => handleChange(itemprop.id)}
        />
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <button onClick={() => delTodo(itemprop.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span style={itemprop.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        value={updateInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
