import React, { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({}) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

    const addTask = () => {
        setTasks([{ id: Date.now(), text: newTask, completed: false }, ...tasks]);
        setNewTask('');
    };
  
    const toggleTaskStatus = (taskId) => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    const removeTask = (taskId) => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);

    };
  return (
    
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
    <div className="container">
    <button onClick={toggleTheme} class="mode btn btn-primary"><i class="bi bi-moon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg></i></button>

            <h3>Lista zadań</h3>
      <input type="text" class="form-control" placeholder="Podaj zadanie" value={newTask} onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" class="btn btn-primary" onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map(task => (
          <div class="licontainer" key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)}
            />
            <span class = "margen"style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>   
            <button onClick={() => removeTask(task.id)}>Usuń</button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default List;