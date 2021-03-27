import React, { Component } from 'react';
import './Coin.css';
import head from './coin-head.jpg';
import tail from './coin-tail.jpg';

class Coin extends Component {

    render() {

        let face = this.props.face;

        return (

            <div>
                <img
                    src={ face === 'H' ? head : tail }
                    alt={ face === 'H' ? 'Head of coin' : 'Tail of coin' }
                    className="coin-image"
                />
            </div>
        );
    }
}

export default Coin;