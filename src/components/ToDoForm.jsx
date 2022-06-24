import React, { useState } from "react";

//component TodoForm

const ToDoForm = (props) => {
  const [inputTodo, setInputTodo] = useState("");

  //function ketika form bisa disubmit
  const localSubmitHandler = (event) => {
    //tolong jangan di refresh
    event.preventDefault();

    console.log(inputTodo);
    props.propsSubmitHandler(inputTodo);

    //mengosongkan input setelah di submit
    setInputTodo('');
  };

  //function yg akan dijalankan saat input berubah
  const inputOnChangeHandler = (event) => {
    //comot data dari inputannya
    const dataDariInput = event.target.value;

    console.log(dataDariInput);
    // set value dari input todo
    setInputTodo(dataDariInput);
  };
  //render
  return (
    //Bikin tampilannya (bikin Formulir)
    <form action="" onSubmit={localSubmitHandler}>
      <div style={{ marginBottom: "0.5em" }}>
        <label style={{ marginRight: "0.5em" }} htmlFor="todoText">
          Input ToDO yang baru
        </label>
        <input type="text" name="todo-text" id="todoText" onChange={inputOnChangeHandler} value={inputTodo} />
      </div>
      <div>
        <button type="submit">Tambah Todo</button>
      </div>
    </form>
  );
};

export default ToDoForm;
