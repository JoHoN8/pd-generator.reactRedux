/*
	actions are the helper methods that construct the objects that get passed to reducers
*/
import * as t from './actionTypes';

export const add = (text) => ({
  type: t.ADD,
  payload: { text }
});