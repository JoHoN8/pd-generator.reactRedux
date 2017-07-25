/*
	this is  a placed to create mapStateToProps and mapDispatchToProps
	and any helpers they may need
*/
import { NAME } from './constants';
import {  } from './model';


export const mapStateToProps = (state, ownProps) => {

};
export const mapDispatchToProps = (dispatch) => {
  return {
    loadA: () => {
      dispatch();
    },
    loadB: () => {
      dispatch();
    },
  };
};