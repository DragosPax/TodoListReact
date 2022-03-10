import React from 'react'

const Item =({text,setTodos,todos,todo}) => {

    const deleteButtonHandler=()=>{
        setTodos(todos.filter((el)=> el.id !==todo.id))

    }

    return(
        <div style={{textAlign:'center'}}>
        <li className='item'>{text}</li>
            <button onClick={deleteButtonHandler}   style={{marginLeft:'155px', backgroundColor:'#FE6862'}} >Delete</button>
        </div>
            
    )

}

export default Item;