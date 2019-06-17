export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}
export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};