import React from 'react';

export default class CourseRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr><td>{this.props.course.title}</td></tr>
        )
    }

    courseRows() {
        return (
            <tr><td>Course Row</td></tr>
        )
    }
}
export default CourseRow;
