// useState
import React, { useState } from "react";

// let counter = 0;
//gunakan state

const ToDoIncrement = () => {
  //buat fungsi untuk nambahin counter
  //   gunakan useState untuk deklarasiin counter
  // mengembalikan 2 index array
  //index array ke-0 = variable statenya
  //index ke-1 = nama sebuah fungsi yang akan digunakan untuk memutasi variable
  const [counter, setCounter] = useState(0);

  function buttonNambahClickHandler() {
    console.log(counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }
  //render
  return (
    <>
      {/* cetak si counter */}
      <span style={{ marginRight: "1em" }}>{counter}</span>
      <span>
        {/* menambah event on Click */}
        <button onClick={buttonNambahClickHandler}>Nambah</button>
      </span>
    </>
  );
};

export default ToDoIncrement;
