import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ToDoList title="TO DO:" />
      </div>
    </div>
  );
}

export default App;
