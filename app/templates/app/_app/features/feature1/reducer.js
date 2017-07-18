import t from './actionTypes';
import type { State } from './model';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export (state = initialState, action: any): State => {
  switch (action.type) {
    case t.ADD:
      return [
      ];
  }
};