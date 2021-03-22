import React, { Component } from 'react';
import './TablePanel.css';

class TablePanel extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <th className="Table-Header"># of flipping</th>
                        <th className="Table-Header">Result</th>
                        <th className="Table-Header">Sequence</th>
                        <th className="Table-Header">Knowledge</th>
                        { this.props.data.map(r => <tr className="Table-Record">
                            <td>
                                { r.number }
                            </td>
                            <td>
                                { r.result }
                            </td>
                            <td>
                                { r.history.length > 0 ? `[${r.history.join(', ')}]` : '-' }
                            </td>
                            <td>
                                { r.knowledge }
                            </td>
                        </tr>) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablePanel;