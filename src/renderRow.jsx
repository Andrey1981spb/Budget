import React from "react";
import OperationSelect from "./operationSelect";

class RenderRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.keys.map((key) => {
            var rowValue;
            if (key === 'Operation') {
                rowValue = <OperationSelect />
            } else {
                rowValue = this.props.data[key]
            }
            return <td key={this.props.data[key]}>{rowValue}</td>
        })
    }
}

export default RenderRow;