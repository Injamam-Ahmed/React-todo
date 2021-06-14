import React,{useState, useEffect} from 'react';
import './App.css';
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //use effect
  useEffect( () =>{
    getLocalTodos();
  },[] );

  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]  );

  //functions
  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  }

  //save to local storage
  function saveLocalTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  function getLocalTodos() {
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else
    {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h3>InZII's Todo List</h3>
      </header>
      <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      
    </div>
  );
}

export default App;
