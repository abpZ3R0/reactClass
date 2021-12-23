import { useEffect, useState } from 'react';
import './App.css';
import Header from './lib/components/Header/Header';
import './responsive.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("monjoy");
  const [user, setUser] = useState({});

  useEffect(()=>{
    const data = fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
                .then(res=> res.json())
                .then(data => setUser(data))
  },[count])

  return (
    <div className='ashg'>

            <Header increment={setCount} count={count} />

      <h1>{user?.title}</h1>
    
      {/* <h3>Name : {name}</h3>
      <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} />  */}

    </div>
  );
}

export default App;
