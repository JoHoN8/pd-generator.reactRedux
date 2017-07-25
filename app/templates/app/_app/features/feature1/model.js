/*
things that are related to this features’s state
*/

// This is the model of our module state (e.g. return type of the reducer)
export const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

// Some utility functions that operates on our model
export const filterCompleted = todos => todos.filter(t => t.completed);

export const filterActive = todos => todos.filter(t => !t.completed);