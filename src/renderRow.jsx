import React from "react";
import OperationSelect from "./operationSelect";

class RenderRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleOperation = this.handleOperation.bind(this);
    }

    handleOperation = (selected) => {
        this.props.onSelectedOperation(selected);
    };

    render() {
        return this.props.keys.map((key) => {
            var rowValue;
            if (key === 'Operation') {
                rowValue = <OperationSelect onSelectOperation={this.handleOperation}/>
            } else {
                rowValue = this.props.data[key]
            }
            return <td key={this.props.data[key]}>{rowValue}</td>
        })
    }
}

export default RenderRow;