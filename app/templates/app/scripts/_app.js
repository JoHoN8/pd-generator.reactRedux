/**
	app name <%= projectName %>
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

//class component
class App extends React.Component{
	render() {
		return (
			<div>
			</div>
		);
	}
};

//function component
const App = () => {
  return (
  	<div>
  	</div>
  );
};

App.propTypes = {
    className: PropTyes.string.isRequired,
    headerText: PropTyes.string.isRequired
};

ReactDOM.render(<App />, document.getElementById('root'));