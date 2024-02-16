import React, {useState} from 'react';
import Form from './form'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const putToDo = (value) => {
    value ? setTodos([...todos, {id: Date.now(), text: value, }]) : alert('error')
  }

  return (
    <div className="wrapper">
      <div className='container'>
        <h1 className='title'>ToDoList</h1>
        <Form
          putToDo={putToDo}
        />
        <ul className='todos'>
          {
            todos.map(todo => {
              return(
                <li className='todo' key={todo.id}>
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
export default App;
