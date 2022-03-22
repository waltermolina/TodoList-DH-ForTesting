import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { Task } from './Task';
import { generateId } from './utils';
import './App.css';

export default () => {
  
  const [tasks, setTasks] = useState([
    {
      id: generateId(),
      text: 'Aprender HTML 🦴 / CSS 🎨 / JS 🧠.'
    },
    {
      id: generateId(),
      text: 'Aprender React ⚛️.'
    },
    {
      id: generateId(),
      text: "Aprender Vue 👁️."
    },
    {
      id: generateId(),
      text: "Aprender Angular 🪨."
    }
  ]);

  const addTask = (task) => {
    setTasks(tasks => [task,...tasks])
  }

  const removeTask = (taskIdToRemove) => {
    setTasks(tasks => 
      tasks.filter(task => task.id !== taskIdToRemove))
  }

  return (
    <main>
      <header>
        <h1>🙀 Tareas Pendientes</h1>
      </header>
      <AddTask addTask={addTask} />
      <ul className="tasks">
        {
          tasks.map((task) => (
            <Task 
              removeTask={removeTask} 
              key={task.id} 
              task={task} />
          ))
        }
      </ul>
      { tasks.length == 0 && <div id="emptyListPlaceholder">(∩_∩)</div> }
      
    </main>
  );
}
