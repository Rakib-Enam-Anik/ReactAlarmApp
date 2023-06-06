import React from "react";

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
  <div>
    <Todos todos={dummyTodos} />
  </div>
  );
  
};

export default Home;
