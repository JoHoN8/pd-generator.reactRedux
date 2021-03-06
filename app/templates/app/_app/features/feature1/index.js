/*
	index is responsible for maintaining the public API for this feature
	if any other feature needs to talk to this feature then it must come
	through here
*/
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as components from './components/components';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';
import * as model from './model';

export { actions, actionTypes, model, components, constants, reducer, selectors };