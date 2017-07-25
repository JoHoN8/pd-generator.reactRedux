/*
  a reducer should never
  1. mutate arguments
  2. perform side effects
  3. call non-pure functions (api calls and stuff)
*/
import t from './actionTypes';
import { initialState } from './model';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE_COURSE:
      return Object.assign({}, state, );
    default:
      return state;
  }
};