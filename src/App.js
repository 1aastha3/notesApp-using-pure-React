import './App.css';
import TodoDisplay from './Components/Display';
import Input from './Components/Input';
import React from 'react';

function App() {

  const [InputText, setInputText] = React.useState("")
  const [Todos, setTodos] = React.useState([])
  const [status, setStatus] = React.useState("All")
  const [filterTodos, setFilterTodos] = React.useState([])

  React.useEffect(()=>{
    filterHander()
  }, [Todos, status])

  function filterHander(){
    switch(status){
      case "completed":
        setFilterTodos(Todos.filter(todo => todo.completed === true))
        break;
      case "incompleted":
        setFilterTodos(Todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(Todos)
        break;  
    }
  }
  return (
    <div className="App">
      <header>
        <h1 className='header'>My Todo List</h1>
      </header>
      <Input InputText = {InputText} Todos={Todos} setTodos ={setTodos} setInputText={setInputText} setStatus = {setStatus} />
      <TodoDisplay Todos={Todos} setTodos ={setTodos} filterTodos ={filterTodos}/>
    </div>
  );
}

export default App;
