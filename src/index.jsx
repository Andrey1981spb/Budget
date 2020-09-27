import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RenderRow from './renderRow';
import styles from './styles.css';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {'Date': '', 'Operation': '', 'Amount': '', 'Item_of_expenditure': '', 'Balance': ''}
            ]
        };
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.addRow = this.addRow.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.state.data[0]);
    };

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toLowerCase()}</th>
        })
    };

    getRowsData = function () {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    };

    addRow = function () {
        this.state.data.push(this.state.data);
    };

    render() {
        return (
            <div className={styles}>
                <button onClick={this.addRow}>
                    Add new row
                </button>
                <table>
                    <thead>
                    <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <Table/>,
    document.getElementById("app")
);

