import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PlottingPanel extends Component {

    render() {

        let alpha = this.props.alpha;
        let beta = this.props.beta;
        let x = Array.from({length: 201}, (v, i) => i/200);
        let y = Array.from(x, x => (x ** alpha) * ((1 - x) ** beta));

        return (
            <div>
                <Plot
                className="PlottingPanel-Plot"
                data={[
                    {
                        x: x,
                        y: y,
                        type: 'scatter',
                        mode: 'markers',
                        
                    }
                ]}
                layout={
                    {
                        width: 800,
                        height: 500,
                        title: 'The probability distribution of w',
                        xaxis: {
                            title: {
                                text: 'w',
                            },
                            fixedrange: true,
                        },
                        yaxis: {
                            title: {
                                text: 'p(w)',
                            },
                            fixedrange: true,
                        }
                    }
                
                }
                />
            </div>
        );
    }
}

export default PlottingPanel;