import React from "react";

// ingin membuat data awalnya
// mengkonsumsi props yang diterima
//... namanya propsTodos
//{propsTodos : todos} <--- tolong berikan saya sebuah props dg nama propsTodos
// dan tolong berikan alias dengan nama todos

const TodoList = ({ propsTodos: todos }) => {
  return (
    //kosongan penahannya biasanya div
    //Tapi di React bisa ada segmentasinya sendiri
    //namanya fragment
    <>
      <h3>Listing ToDo List</h3>
      <ul>
        {/* /*Looping terhadap si todos */}
        {/* ingin pakai JS */}
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
