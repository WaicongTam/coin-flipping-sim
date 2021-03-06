import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlottingPanel from './PlottingPanel';
import CoinPanel from './CoinPanel';
import InputPanel from './InputPanel';
import TablePanel from './TablePanel';
import './CoinFlippingSim.css';

class CoinFlippingSim extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFlipping: false,
            alpha: this.props.alpha,
            beta: this.props.beta,
            face: this.props.face,
            realProb: this.props.realProb,
            knowledge: this.props.alpha / (this.props.alpha + this.props.beta),
            sequence: this.props.sequence,
            table: this.props.table,
        }

        this.updateParameters = this.updateParameters.bind(this);

        this.handleFlipButton = this.handleFlipButton.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    static defaultProps = {
        alpha: 2,
        beta: 2,
        face: 'H',
        realProb: 0.5,
        knowledge: 0.5,
        sequence: [],
        table: [{
            number: 0,
            result: '-',
            sequence: [],
            knowledge: 0.5,
        },],
    }

    updateParameters(parameters) {
        this.setState(parameters);

        this.setState(st => {
            return {
                knowledge: st.alpha / (st.alpha + st.beta),
                table: [{
                    number: 0,
                    result: '-',
                    sequence: this.props.sequence,
                    knowledge: st.alpha / (st.alpha + st.beta),
                },]
            };
        })
    }

    handleFlipButton(e) {
        let randomNumber = Math.random();
        let newFace = randomNumber <= this.state.realProb ? 'H' : 'T';
        
        this.setState(st => {
            let newSequence = [...st.sequence, newFace]
            let newAlpha = st.alpha + (newFace === 'H' ? 1 : 0);
            let newBeta = st.beta + (newFace === 'H' ? 0 : 1);
            let newKnowledge = newAlpha / (newAlpha + newBeta);
            return {
                face: newFace,
                isFlipping: true,
                sequence: newSequence,
                alpha: newAlpha,
                beta: newBeta, 
                knowledge:newKnowledge,
                table: [...st.table, {
                    number: st.table.length,
                    result: newFace,
                    sequence: newSequence,
                    knowledge: newKnowledge,
                }]
            };
        })
    } 

    handleResetButton(e) {
        this.setState({
            alpha: this.props.alpha,
            beta: this.props.beta,
            face: this.props.face,
            isFlipping: false,
            realProb: this.props.realProb,
            sequence: this.props.sequence,
            table: this.props.table,
        });
    }

    render() {
        return (
            <div className="CoinFlippingSim">
                <div className="row" id="upper-row">
                    <div className="panel" id="CoinFlippingSim-CoinPanel">
                        <CoinPanel face={ this.state.face }/>
                    </div>

                    <div className="panel" id="CoinFlippingSim-ControlPanel">
                        <div id="CoinFlippingSim-InputPanel">
                            <InputPanel
                                alpha={ this.state.alpha }
                                beta={ this.state.beta }
                                realProb={ this.state.realProb }
                                updateParameters={ this.updateParameters }
                                isFlipping={ this.state.isFlipping }
                                reset={ this.handleResetButton }
                            />
                        </div>
                        
                        <div id="CoinFlippingSim-ButtonPanel">  
                            <button
                                onClick={ this.handleFlipButton }
                                id="flip-button">
                                Flip!
                            </button>

                            <button
                                onClick={ this.handleResetButton }
                                id="reset-button">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row" id="lower-row">
                    <div className="panel" id="CoinFlippingSim-PlottingPanel">
                        <PlottingPanel alpha={ this.state.alpha } beta={ this.state.beta } />
                    </div>

                    <div className="panel" id="CoinFlippingSim-TablePanel">
                        <TablePanel data={ this.state.table }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoinFlippingSim;