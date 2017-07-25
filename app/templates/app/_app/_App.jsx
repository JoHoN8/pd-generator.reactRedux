/*
main app code
this page handles wrapper elements and router code
App Name: <%= projectName %>
*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './common/Header';
import FirstPage from './pages/FirstPage';
import './globalStyles/global';
import configureStore from './redux/store';
const store = configureStore();

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="container-fluid">
						<Header />
						<Route exact path="/" component={HomePage}/>
						<Route path="/about" component={AboutPage}/>
						<Route path="/courses" component={CoursesPage}/>
					</div>
				</Router>
			</Provider>
		);
	}
}
render(
  <App />, document.getElementById('root')
);