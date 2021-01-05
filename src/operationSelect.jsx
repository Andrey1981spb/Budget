import React from "react";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    submitToStore: (input) => dispatch({type: 'SELECT', payload: input}),
});

class OperationSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.submitToStore(event);
    };

    render() {
        return (
            <label>
                <select onChange={this.handleChange}>
                    <option value="expenditure">Expenditure</option>
                    <option value="revenue">Revenue</option>
                </select>
            </label>
        );
    }
}

export default connect(null, mapDispatchToProps)(OperationSelect)