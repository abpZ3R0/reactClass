import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './lib/components/AddTodo/AddTodo';
import Header from './lib/components/Header/Header';
import Todos from './lib/components/Todos/Todos';
import './responsive.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      const spilltedData = data.slice(0,5);
      setTodos(spilltedData)
    })
  },[]);

  const addNewTodo = (text) =>{
    const newTodo = {
      id: todos.length + 1,
      title: text
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const formattedTodo = todos.filter(todo => todo?.id !== id);
    setTodos(formattedTodo);
  }

  return (
    <div className='container mt-5'>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <AddTodo todos={todos} setTodos={setTodos} addNewTodo={addNewTodo} />
            <Todos todos={todos} deleteTodo={deleteTodo} />
          </div>
        </div>
    </div>
  );
}

export default App;
