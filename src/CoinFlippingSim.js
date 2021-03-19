import React, { Component } from 'react';
import PlottingPanel from './PlottingPanel';
import CoinPanel from './CoinPanel';

class CoinFlippingSim extends Component {

    render() {
        return (
            <div className="CoinFlippingSim">
                <div className="CoinFlippingSim-CoinPanel">
                    <CoinPanel face="head"/>
                </div>
    
                <div className="CoinFlippingSim-PlottingPanel">
                    <PlottingPanel alpha="2" beta="2" />
                </div>
            </div>
        );
    }
}

export default CoinFlippingSim;