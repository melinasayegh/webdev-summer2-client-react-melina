import React from 'react';
import { Link } from 'react-router-dom';

export default class CourseRow extends React.Component {

    render() {
        return (

            <tr>
                <td>
                    <i className="fa fa-angle-double-right"/>
                </td>
                <td>
                    <Link to="/course/${this.props.course.id}/edit">
                        {this.props.course.title}
                    </Link>
                </td>

                <td>
                    {this.props.course.owner}
                </td>

                <td>
                    {new Date(this.props.course.created).toLocaleString()}
                </td>

                <td>
                    {new Date(this.props.course.modified).toLocaleString()}
                </td>

                <td>
                    <div>
                        <button className="btn btn-primary btn-sm col-xs-2 btn-group"
                                onClick={() => this.props.editCourse(this.props.course.id)}>
                            Edit
                        </button>
                        <button className="btn btn-danger  btn-sm col-xs-2 btn-group"
                                onClick={() => this.props.deleteCourse(this.props.course.id)}>
                            Delete
                        </button>

                    </div>
                </td>
            </tr>
        )
    }
}