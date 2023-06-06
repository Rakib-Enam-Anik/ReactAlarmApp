import React from 'react'

const Todos = (props) => {
  console.log(props.todos);
  return (
  <section>

    {
      props.todos.map((todo) => (
         <Todo todo={todo} key={todo.id} />
         ))
    }

  </section>
  );
  
};

export default Todos;
