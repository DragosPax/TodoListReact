import React from 'react'
import classes from './input.module.css'

const Input =({setInputText ,inputText,todos,setTodos})=>
{
    const inputTextHandler=(e)=>{
    
       setInputText(e.target.value);
    };

    const buttonHandler=(e)=>{
        e.preventDefault();

        setTodos([
            ...todos,{text:inputText, id: Math.random()*1000}
        ]);

        setInputText('');

    };

    return(
        <div className={classes.all}>
            <label  className={classes.flabel} for='input'>Enter the todo</label>
            <input value={inputText}  onChange={inputTextHandler} className={classes.finput}  type="text" id='input'/>
            <button onClick={buttonHandler}  className={classes.fbutton} >Add</button>
        </div>

    );
}

export default Input;