// Create a to do list
/* 
-add items to todo list
-delete items to todo list
*/
import { useState } from 'react';
import Head from 'next/head';
import link from 'next/link';


export default function Home() {
  //create a state to hold the todo list items with default items like, learn react, learn nextjs, learn copilot
  // Simple unique ID generator
  const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
  const [todoList, setTodoList] = useState([
    { id: generateId(), task: 'Learn React' },
    { id: generateId(), task: 'Learn Next.js' },
    { id: generateId(), task: 'Learn Copilot' },
  ]);
  // create state for to do list
  const [newTask, setNewTask] = useState('');
  //functions tha that hqndle adding new items to the todo list
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
  setTodoList([...todoList, { id: generateId(), task: newTask }]);
      setNewTask('');
    }
  };
  //function that handles deleting items from the todo list
  const handleDeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  //render input field, button to add items, and list of todo items with delete button
  return (
    <div>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="A simple to do list app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>To Do List</h1>
        <input
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              {item.task}
              <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main> 
    </div> 
  );
}

