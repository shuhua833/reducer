import { useContext, useEffect, useReducer } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo_Actions } from "./actions/todoActions";
import { reducer } from "./reducer/todoReducer";
import { initialState } from "./store";

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  console.log(todos)
  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    dispatch({ type: Todo_Actions.ADD_TODOS, payload: data })

  };
  useEffect(() => { fetchTodo() }, [])
  return (
    <>
      {/* {todos.map(todo=>{ return <div key={todo.id}>{todo.title}</div>})} */}
      {todos.map((todo) => (
        <Todos key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
function Todos({ todo, dispatch }) {

  return (

    <div onClick={() => dispatch({ type: Todo_Actions.COMPLETE_TODO, payload: todo.id })}
      style={todo.completed ?
        { textDecoration: 'line-through', cursor: 'pointer' } :
        { cursor: 'pointer' }}>{todo.title}</div>

  )
}
export default TodoList;