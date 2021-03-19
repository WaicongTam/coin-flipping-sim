import React, { Component } from 'react';
import PlottingPanel from './PlottingPanel';
import CoinPanel from './CoinPanel';

class CoinFlippingSim extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alpha: this.props.alpha,
            beta: this.props.beta,
            face: this.props.face,
            realProb: this.props.realProb,
            table: this.props.table,
        }
    }

    static defaultProps = {
        alpha: 2,
        beta: 2,
        face: 'head',
        realProb: 0.5,
        table: [
            {
                'result': '-',
                'history': '-',
                'knowledge': 0.5,
            },
        ]
    }

    render() {
        return (
            <div className="CoinFlippingSim">
                <div className="CoinFlippingSim-CoinPanel">
                    <CoinPanel face={ this.state.face }/>
                </div>
    
                <div className="CoinFlippingSim-PlottingPanel">
                    <PlottingPanel alpha={ this.state.alpha } beta={ this.state.beta } />
                </div>
            </div>
        );
    }
}

export default CoinFlippingSim;