import React from "react";
import {useState} from "react";
import "./Form.css";

export default function Form() {
    const [arr, setArr] = useState([])
    if (localStorage.getItem("Items") === null) {
        localStorage.setItem("Items", JSON.stringify(arr));
    }
    else{
       
    }
  

  let reciepeDetails = () => {

    let obj = {
        title:document.getElementById("title").value,
        ingredients:document.getElementById("ingredients").value,
        time:document.getElementById("time").value,
        img:document.getElementById("imgUrl").value,
        instruction:document.getElementById("instruction").value
    }
    arr.push(obj)
    localStorage.setItem("Items", JSON.stringify(arr));
    window.location.href ="http://localhost:3000/?#"
  };
  return (
    <div className="form">
      <form action="#">
        <input id="title" type="text" placeholder="Enter Reciepe Name" />
        <input
          id="ingredients"
          type="text"
          placeholder="Enter ingredients Name"
        />
        <input id="time" type="text" placeholder="Time Taken to cook" />
        <input id="imgUrl" type="text" placeholder="Image Link" />
        <input id="instruction" type="text" placeholder="Instruction" />
        <button onClick={reciepeDetails}>Submit</button>
      </form>
    </div>
  );
}
