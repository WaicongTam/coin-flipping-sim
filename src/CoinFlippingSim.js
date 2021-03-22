import React, { Component } from 'react';
import PlottingPanel from './PlottingPanel';
import CoinPanel from './CoinPanel';
import InputPanel from './InputPanel';
import TablePanel from './TablePanel';

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

        this.updateParameters = this.updateParameters.bind(this);

        this.handleFlipButton = this.handleFlipButton.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    static defaultProps = {
        alpha: 2,
        beta: 2,
        face: 'head',
        realProb: 0.5,
        table: [
            {
                number: 0,
                result: '-',
                history: [],
                knowledge: 0.5,
            },
        ],
    }

    updateParameters(parameters) {
        this.setState(parameters);
    }

    handleFlipButton(e) {
        let randomNumber = Math.random();
        let newFace = randomNumber >= this.state.realProb ? 'head' : 'tail';
        let newHistory = [...this.state.table.slice(-1)[0].history, newFace]
        this.setState({
            face: newFace,
            table: [...this.state.table, {
                number: this.state.table.length,
                result: newFace,
                history: newHistory,
            }],
        });
    }

    handleResetButton(e) {
        this.setState({
            alpha: this.props.alpha,
            beta: this.props.beta,
            face: this.props.face,
            realProb: this.props.realProb,
            table: this.props.table,
        });
    }

    render() {
        return (
            <div className="CoinFlippingSim">
                <div className="CoinFlippingSim-CoinPanel">
                    <CoinPanel face={ this.state.face }/>
                </div>

                <div>
                    <InputPanel
                        alpha={ this.state.alpha }
                        beta={ this.state.beta }
                        realProb={ this.state.realProb }
                        updateParameters={ this.updateParameters }
                        reset={ this.handleResetButton }
                    />
                </div>

                <div className="CoinFlippingSim-PlottingPanel">
                    <PlottingPanel alpha={ this.state.alpha } beta={ this.state.beta } />
                </div>

                <div>
                    <button onClick={ this.handleFlipButton }>
                        Flip!
                    </button>

                    <button onClick={ this.handleResetButton }>
                        Reset
                    </button>
                </div>

                <TablePanel data={ this.state.table }/>
            </div>
        );
    }
}

export default CoinFlippingSim;