import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const car = this.props.car;
        const name = car.name;

        return (
            <tr>
                <td>{name}</td>
                <td>{car.horsepower}</td>
            </tr>
        );
    }
}

export default ProductRow;