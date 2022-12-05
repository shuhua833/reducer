import { Todo_Actions } from "../actions/todoActions"
const completeTodo = (state, id) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo;

  })
}
export const reducer = (state, action) => {
  switch (action.type) {                          //taking type from action 
    case Todo_Actions.ADD_TODOS:
      return [state, ...action.payload]       //it is stored in store {initialState in this case}

    case Todo_Actions.COMPLETE_TODO:
      return completeTodo(state, action.payload)
    // return [...completeTodo(state, action.payload)]

  }
}
