import React, { Component } from 'react';
import './InputPanel.css';

class InputPanel extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            realProb: this.props.realProb,
            alpha: this.props.alpha,
            beta: this.props.beta,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });

        this.setState(st => {
            this.props.updateParameters(st);
        })
    }

    render() {

        return (
            <form className="InputPanel">
                <label htmlFor="realProb">Real probability</label>
                <input
                    id="realProb"
                    name="realProb"
                    value={ this.state.realProb }
                    onChange={ this.handleChange }
                />
                <label htmlFor="alpha">Alpha</label>
                <input
                    id="alpha"
                    name="alpha"
                    value={ this.state.alpha }
                    onChange={ this.handleChange }
                />
                <label>Beta</label>
                <input
                    id="beta"
                    name="beta"
                    value={ this.state.beta }
                    onChange={ this.handleChange }
                />
            </form>
        )
    }
}

export default InputPanel;