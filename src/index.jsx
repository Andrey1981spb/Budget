import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
    render() {
        return <table>
            <tr>
                <th>Date</th>
                <th>Operation</th>
                <th>Amount</th>
                <th>Item of expenditure</th>
                <th>Balance</th>
            </tr>
        </table>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById("app")
);