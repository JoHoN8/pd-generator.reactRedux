import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions, selectors, components} from '../index';

class Page extends React.Component {
	constructor(props) {
		super();
		this.onClickSave = this.onClickSave.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.state = {
			course: {title: ""}
		};
	}
	onTitleChange(evt) {
		const course = this.state.course;
		course.title = evt.target.value;
		this.setState({course});
	}
	onClickSave() {
		this.props.dispatch(actions.createCourse(this.state.course));
		this.setState({course: {title: ''}});
	}
	createCourses({courses}) {
		return courses.map((course, index) => {
			return <components.CourseRow key={index} title={course.title}/>;
		});
	}
	render() {
		return (
			<div>
				<h1>Courses</h1>
				<components.Form 
					displayCourses={this.createCourses(this.props)}
					onTitleChange={this.onTitleChange}
					onClickSave={this.onClickSave}
					courseFieldVal={this.state.course.title}
				/>
			</div>
		); 
	}
}
CoursesPage.propTypes = {
	dispatch: propTypes.func.isRequired,
	courses: propTypes.array.isRequired
};
export default connect(selectors.mapStateToProps)(Page);