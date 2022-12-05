import { useState, useEffect, createContext } from "react";

export const TodoContext = createContext()

function TodoProvider(props) {


    return (<></>
        // <TodoContext.Provider value={{todos, setCompleted}}>
        // {props.children}
        // </TodoContext.Provider>
    )
}
export default TodoProvider;