import React, { Component } from 'react';
import { Form, } from 'react-bootstrap';
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

        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value.length === 0 ? '' : parseInt(e.target.value),
        });

        this.setState(st => {
            this.props.updateParameters(st);
        });
    }

    render() {

        return (
            <Form className="InputPanel">
                <Form.Group>
                    <Form.Label htmlFor="realProb">Real probability</Form.Label>
                    <Form.Control
                        id="realProb"
                        name="realProb"
                        value={ this.props.realProb }
                        disabled={ this.props.isFlipping }
                        onChange={ this.handleChange }
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="alpha">Alpha</Form.Label>
                    <Form.Control
                        id="alpha"
                        name="alpha"
                        value={ this.props.alpha }
                        disabled={ this.props.isFlipping }
                        onChange={ this.handleChange }
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Beta</Form.Label>
                    <Form.Control
                        id="beta"
                        name="beta"
                        value={ this.props.beta }
                        disabled={ this.props.isFlipping }
                        onChange={ this.handleChange }
                    />
                </Form.Group>
            </Form>
        )
    }
}

export default InputPanel;