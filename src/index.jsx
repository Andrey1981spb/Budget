import React from 'react';
import ReactDOM from 'react-dom';


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);

        const data = [
            {'Date': '', 'Operation': '', 'Amount': '', 'Item of expenditure': '', 'Balance': ''}
        ];

        this.state = {
            data: data
        }
    }

    getKeys = function () {
        return Object.keys(this.state.data[0]);
    };

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    };

    getRowsData = function () {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    render() {
        return (
            <div>
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

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
};