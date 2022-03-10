import React from 'react'
import classes from './list.module.css'
import Item from './Item';

const List =({inputText,todos,setTodos})=> 
{
console.log(todos);

    return(
        <div className={classes.all2}>
        <ul className={classes.list}>
            
        {todos.map(todo=>(
            <Item text={todo.text} id={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
        ))}


        </ul>
        </div>
    )


}

export default List;