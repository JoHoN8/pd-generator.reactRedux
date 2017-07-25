import { combineReducers } from 'redux';
import formFeature from '../features/courseForm/';

export default combineReducers({
  [formFeature.constants.NAME]: formFeature.reducer.couseReducer
});