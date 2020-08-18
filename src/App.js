import React from 'react';
import './App.css';
import Item from './components/Item';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Category />
        <Item status="todo" textColor="orange"></Item>
      </header>
    </div>
  );
}

export default App;
