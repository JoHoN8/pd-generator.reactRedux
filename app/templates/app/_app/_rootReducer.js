import { combineReducers } from 'redux';
import f1 from './features/feature1';

export default combineReducers({
  [f1.constants.NAME]: f1.reducer
});