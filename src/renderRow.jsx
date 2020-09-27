import React from "react";
import OperationSelect from "./operationSelect";

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        var rowValue;
        if (key === 'Operation') {
            rowValue = <OperationSelect/>
        } else {
            rowValue = props.data[key]
        }
        return <td key={props.data[key]}>{rowValue}</td>
    })
};

export default RenderRow;