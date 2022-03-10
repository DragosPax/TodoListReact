import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from '../components/Input'
import List from '../components/List'
import '../App.css';


function Home() {

 

  return (
    <div className="App">
      <h1>Home Page</h1>
      <div style={{textAlign:"center"}}>
      <button style={{backgroundColor:'#FFE6EE', padding:'5px',  marginTop:'20px'}}>
      <Link style={{ textDecoration: 'none' }} to="/TodoList">Go to To-do-List</Link>
      </button>
      </div>
      

    </div>
  );
}

export default Home;
