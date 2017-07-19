/*
this is the wrapper for content that goes on all pages
router passes compents here
*/
import React from 'react';
import PropTypes from 'prop-types';

class Wrapper extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<p>Header here...</p>
				{this.props.children}
			</div>
		);
	}
}
Wrapper.propTypes = {
	children: PropTypes.object.isRequired
};
export default Wrapper;