import React from 'react';
//importing components
import Todo from './Todo';

function TodoList({todos,setTodos,filteredTodos}){
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo =>(
                <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} />
            ))}
        </div>
    );


};

export default TodoList;