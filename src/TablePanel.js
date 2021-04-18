import React, { Component } from 'react';
import './TablePanel.css';

class TablePanel extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="number">#</th>
                        <th className="result">Result</th>
                        <th className="sequence">Sequence</th>
                        <th className="knowledge">Knowledge</th>
                    </tr>
                </thead>

                <tbody>   
                    { this.props.data.map(r => <tr className="record" key={ r.number }>
                        <td className="number">
                            { r.number }
                        </td>
                        <td className="result">
                            { r.result }
                        </td>
                        <td className="sequence">
                            { `[${r.sequence.join(', ')}]` }
                        </td>
                        <td className="knowledge">
                            { r.knowledge.toFixed(6) }
                        </td>
                    </tr>) }
                </tbody>
            </table>
        );
    }
}

export default TablePanel;