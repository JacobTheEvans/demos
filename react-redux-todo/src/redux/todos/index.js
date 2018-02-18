export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    data
  }
}

export const removeTodo = (index) => {
  return {
    type: "REMOVE_TODO",
    index
  }
}

export const updateTodo = (index, data) => {
  return {
    type: "UPDATE_TODO",
    index,
    data
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.data];
    case "REMOVE_TODO":
      return state.filter((item, index) => index !== action.index);
    case "UPDATE_TODO":
      return state.map((item, index) => {
        if(index === action.index) {
          return action.data;
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

export default reducer;
