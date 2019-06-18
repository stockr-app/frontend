import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
            </div>
        )
    }
}
