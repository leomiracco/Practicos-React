export const taskListReducer = (initialState = [], action)=>{
  
  switch (action.type) {
    case 'addTask':
      if(JSON.parse(localStorage.getItem('taskList')).length > 0){
        initialState = JSON.parse(localStorage.getItem('taskList'));
        return [...initialState, checkRepeatedNumber(initialState, action.payload)];
      }else{
        return [...initialState, action.payload];
      }
    case 'removeTask':
      return initialState.filter((task)=>task.id !== action.payload);
    case 'removeAllTask':
      return initialState = [];
    default:
      return initialState;
  }
}

const checkRepeatedNumber = (initialState, payload)=>{
  for (let i = 0; i < initialState.length; i++) {
    if(payload.id === initialState[i].id){
      console.log(payload.id);
      checkRepeatedNumber(initialState, payload.id++);
    }
  }
  return payload;
}