import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utils';

export function AddTask(props) {
  const [text,setText] = useState('')
  const handleTextChange = ({target}) => {
    const {value} = target
    setText(value)
  }
  const handleSubmit = () => {
    event.preventDefault();
      if (text.length){
        const task = {
          id : generateId(),
          text: text
        }
        props.addTask(task)
        setText('')
      }
  }
  return (
    <form onSubmit={handleSubmit} className="addTask">
      <input
        type="text"
        aria-label="¿Qué tarea vamos a recordar?"
        placeholder="¿Qué tarea vamos a recordar?"
        value = {text}
        onChange = {handleTextChange}
      />
      <button className="addTaskBtn">💾</button>
    </form>
  );
}
