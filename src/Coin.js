import React, { Component } from 'react';


class Coin extends Component {

    render() {

        let face = this.props.face;

        return (

            <div>
                <i class={`Coin fas fa-circle ${face}`}></i>
            </div>
        );
    }
}

export default Coin;