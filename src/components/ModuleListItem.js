import React, {Component} from "react";

export default class ModuleListItem extends Component {

    getInitialState = () => {
        return {highlight:false};
    };

    onClick = (event) => {
        this.setState({highlight:true});
    };

    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}

                <span className="pull-right">

                    <button className="btn btn-primary btn-sm col-xs-1 btn-group"
                            onClick={() =>  this.props.editModule(this.props.module.id)}>
                        Edit
                    </button>
                    <button className="btn btn-danger  btn-sm col-xs-1 btn-group"
                            onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this module?')) {
                                    this.props.deleteModule(this.props.module.id)
                                }}}>
                        Delete
                    </button>
                </span>
            </li>
        );
    }
}