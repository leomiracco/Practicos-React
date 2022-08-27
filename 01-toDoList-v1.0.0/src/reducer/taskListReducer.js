export const taskListReducer = (initialState = [], action)=>{
  switch (action.type) {
    case 'addTask':
      return [...initialState, action.payload];
    case 'removeTask':
      return initialState.filter((task)=>task.id !== action.payload);
    case 'removeAllTask':
      return initialState = [];
    default:
      return initialState;
  }
}