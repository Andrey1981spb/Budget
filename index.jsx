import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
    render() {
        return <table>
            <tr>
                <td>Date</td>
                <td>Operation</td>
                <td>Amount</td>
                <td>Item of expenditure</td>
                <td>Balance</td>
            </tr>
        </table>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById("app")
);