import React from "react";

function Form({setInputText,todos,setTodos,inputText,setStatus}){
    //here we write javascript and functions

    function inputTextHandler(e){
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText,completed: false, id:Math.random()*1000},
        ]);
        setInputText("");
        
    };

    function statusHandler(e) {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button disabled={!inputText} onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            
        </form>
    );
}
export default Form;