import React, { Component } from 'react';
import head from './coin-head.png';
import tail from './coin-tail.png';
import './CoinPanel.css';

class CoinPanel extends Component {

    render() {

        let face = this.props.face;

        return (
            <div className="CoinPanel">
                <img
                    src={ face === 'H' ? head : tail }
                    alt={ face === 'H' ? 'Head of coin' : 'Tail of coin' }
                    className="coin-image"/>
            </div>
        );
    }
}

export default CoinPanel;