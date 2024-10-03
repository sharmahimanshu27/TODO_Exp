import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import TodoContext from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContext>
         <Todo/>
      </TodoContext>
       
    </div>
  );
}

export default App;
