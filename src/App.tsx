import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

function App() {
  const counterApp = <CounterContainer />;
  const todoApp = <TodoApp />;

  return todoApp;
}

export default App;
