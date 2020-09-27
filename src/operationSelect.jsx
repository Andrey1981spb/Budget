import React from "react";

class OperationSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'expenditure'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="expenditure">Expenditure</option>
                    <option value="revenue">Revenue</option>
                </select>
            </label>
        );
    }
}

export default OperationSelect;