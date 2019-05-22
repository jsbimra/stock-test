import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import defaultDataSets from '../data/stocks.json';
import Layout from '../components/Layout';
import Stocks from '../components/Stocks';

const quandlAPIKey = 'oUSLiCbXATD2xbPCxnJf';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockItems: [],
            stocks: [],
            selectedStocks: []
        }

        this.handleAddMoreStock = this.handleAddMoreStock.bind(this);
    }
    componentDidMount() {
        if (defaultDataSets && defaultDataSets.datasets) {
            const defaultStock = [defaultDataSets.datasets[0]];
            this.setState({ stocks: defaultDataSets.datasets, 
                selectedStocks: defaultStock, 
                stockItems: [defaultStock[0].dataset_code]});
        }
    }
    makeEntryOfStock(name) {
        console.log('makeEntryOfStock ', name);
        const { stocks, selectedStocks } = this.state;

        const filterStock = stocks.filter(stock => stock.dataset_code === name);
        const newStockLists = [...selectedStocks, ...filterStock];
        this.setState({ selectedStocks: newStockLists });
    }

    handleAddMoreStock(e) {
        const curValue = e.target.value;
        let { stockItems } = this.state;
        if (curValue) {
            stockItems.includes(curValue) ? '' : this.makeEntryOfStock(curValue);
            stockItems.push(curValue);
            this.setState({stockItems})
        }
    }

    render() {
        const { stocks, selectedStocks } = this.state;
        // console.log(stocks, selectedStocks);

        return (
            <Layout>
                <Stocks stocks={stocks} selectedStocks={selectedStocks} handleAddMoreStock={this.handleAddMoreStock} />
            </Layout >
        )
    }
}
export default Home;