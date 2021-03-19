import React, { Component } from 'react';
import Coin from './Coin';

class CoinPanel extends Component {

    render() {

        let face = this.props.face;

        return (
            <div>
                <Coin className="CoinPanel-Coin" face={ face } />
            </div>
        );
    }
}

export default CoinPanel;