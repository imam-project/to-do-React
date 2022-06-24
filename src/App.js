import React, { useState } from "react";
// import logo from "./logo.svg";
// import './App.css';

import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import ToDoIncrement from "./components/ToDOIncrement";

function App() {
  //taruh state todos di app
  //const todos = ["Belajar React Fundamental", "Ngoding component sampai bisa"];
  
  const [todos, setTodos] = useState(["Belajar React Fundamental", "Ngoding component sampai bisa"]);

  // fungsi untuk nambahin todos
  const formSubmitHandler = (todoYangBaru) => {
    console.log(todoYangBaru);

    //karna todos immutable tidak boleh melakukan todos.push
    // harus membuat array yg baru
    //ditambahkan dengan data toodYangBaru
    setTodos([...todos, todoYangBaru]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section>
        <ToDoIncrement />
      </section>

      <section style={{ margin: "1em 0em" }}>
        <ToDoForm propsSubmitHandler = {formSubmitHandler}/>

        {/* nge-props */}
        <TodoList propsTodos= {todos}/>
      </section>

      <footer>
        <h3>Dibuat oleh bagas &copy; 2022</h3>
      </footer>
    </div>
  );
}

export default App;
