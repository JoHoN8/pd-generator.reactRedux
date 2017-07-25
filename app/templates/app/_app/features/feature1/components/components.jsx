import React from 'react';
import propTypes from 'prop-types';

export function CourseRow(props) {
	return  (
		<div>{props.title}</div>
	);
}
CourseRow.propTypes = {
	title: propTypes.string.isRequired
};

export function ShowCourse({items}) {
	return (
		<div className="courseDisplay">{items}</div>
	);
}
ShowCourse.propTypes = {
	items: propTypes.array.isRequired
};

export function Form(props) {
	
	return (
		<div>
			{<ShowCourse items={props.displayCourses}/>}
			<h2>Add Course</h2>
			<input 
				type='text' 
				onChange= {props.onTitleChange}
				value={props.courseFieldVal}/>
			<input 
				type='submit' 
				onClick= {props.onClickSave}
				value="Save"/>
		</div>
	);
}

Form.propTypes = {
	dispatch: propTypes.func.isRequired,
	displayCourses: propTypes.array.isRequired,
	onTitleChange: propTypes.func.isRequired,
	onClickSave: propTypes.func.isRequired,
	courseFieldVal: propTypes.string
};