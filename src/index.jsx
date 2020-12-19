import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RenderRow from './renderRow';
import styles from './styles.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.addRow = this.addRow.bind(this);
        this.setOperation = this.setOperation.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.state.data[0]);
    };

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key) => {
            return <th key={key}>{key.toLowerCase()}</th>
        })
    };

    getRowsData = () => {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} onSelectedOperation={this.setOperation(index)}/></tr>
        })
    };

    setOperation = (index, selected) => {
        let existRow = this.state.data[index];
        if (selected!=undefined){
            existRow.Operation = selected;
            this.setState({data: existRow});
        }
    };

    addRow = function () {
        let existRows = this.state.data;
        existRows.push({'Date': '', 'Operation': '', 'Amount': '', 'Item_of_expenditure': '', 'Balance': ''});
        this.setState({data: existRows});
    };

    render() {
        return (
            <div className={styles}>
                <table>
                    <thead>
                    <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                    <button onClick={this.addRow}>
                        Add new row
                    </button>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <Table/>,
    document.getElementById("app")
);