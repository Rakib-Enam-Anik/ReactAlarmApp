import React from "react";
import Todos from "./Todos";

import style from './home.module.css'

const dummyTodos = [
    {
        id : 1,
        title: "Alarm title 1",
        desc: "Alarm description is here",
    },
    {
        id : 2,
        title: "Alarm title 2",
        desc: "Alarm description is here",
    },
];

const Home = () => {
  return (
  <div className={style.container}> 
  <h1 style={{ color: "white"}}>Alarm App</h1>
    <Todos todos={dummyTodos} />
  </div>
  );
  
};

export default Home;
