import React, { Component } from 'react';
import { Table, } from 'react-bootstrap';
import './TablePanel.css';

class TablePanel extends Component {

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th># of flipping</th>
                        <th>Result</th>
                        <th>Sequence</th>
                        <th>Knowledge</th>
                    </tr>
                </thead>

                <tbody>   
                    { this.props.data.map(r => <tr className="Table-Record">
                        <td className="number">
                            { r.number }
                        </td>
                        <td className="result">
                            { r.result }
                        </td>
                        <td className="sequence">
                            { r.sequence.length > 0 ? `[${r.sequence.join(', ')}]` : '-' }
                        </td>
                        <td className="knowledge">
                            { r.knowledge }
                        </td>
                    </tr>) }
                </tbody>
            </Table>
        );
    }
}

export default TablePanel;