import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Input from '../components/Input'
import List from '../components/List'
import '../App.css';

function TodoList() {
    

  const [inputText,setInputText]=useState('');  
  const [todos,setTodos]=useState([]);

  return (
    <div className="App">
      <h1 >My Todo List </h1>
      <div style={{textAlign:"center"}}>


      <button style={{backgroundColor:'#FFE6EE', padding:'5px',  marginTop:'20px'}}>


      <Link style={{ textDecoration: 'none' }} to="/">Go to Homepage</Link>
      </button>
      </div>
      
      <Input todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <List todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      

    </div>
  );
}

export default TodoList;
