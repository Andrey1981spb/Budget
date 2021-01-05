import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RenderRow from './renderRow';
import styles from './styles.css';
import Provider from "react-redux/es/components/Provider";
import configureStore from './store/configureStore';
import connect from "react-redux/es/connect/connect";
import {setEmptyData} from "./actions/emptyData";

const store = configureStore();

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.getDataFromState = this.getDataFromState.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.addRow = this.addRow.bind(this);
    }

    getDataFromState = function () {
        let propsContent = this.props;
        let itemsStored = propsContent.itemsProp;
        return itemsStored;
    };

    getKeys = function () {
        let itemsStored = this.getDataFromState();
        return Object.keys(itemsStored[0]);
    };

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key) => {
            return <th key={key}>{key.toLowerCase()}</th>
        })
    };

    getRowsData = () => {
        let itemsStored = this.getDataFromState();
        var keys = this.getKeys();
        return itemsStored.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    };

    addRow = function () {
        store.dispatch(setEmptyData())
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

const mapStateToProps = (store) => {
    return {itemsProp: store.items}
};

export default connect(mapStateToProps)(Table)

ReactDOM.render(
    <Provider store={store}>
        <Table/>,
    </Provider>,
    document.getElementById("app")
);