import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Input from './components/Input';
import List from './components/List'
import './App.css';
import Home from './Pages/Home';
import TodoList from './Pages/TodoList';


function App() {

  

  return (
    <Router>
    <div className="App">
      
      <Route path="/" exact component={Home} /> 
      <Route path="/TodoList" component={TodoList} />

    </div>
    </Router>
  );
}

export default App;
