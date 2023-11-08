function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, status:'active' }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TASK":
    let myArray = [...state]
    let objIndex = myArray.findIndex(item=>item.id == action.id)
    myArray[objIndex].text = action.text
    return myArray;
    default:
      return state;
  }
};

export default todoReducer;