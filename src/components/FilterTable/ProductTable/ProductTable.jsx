import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {

        const filterText = this.props.filterText;

        const rows = [];

        this.props.cars.forEach((car) => {
            if (car.name.indexOf(filterText) === -1) {
                return;
            }
            rows.push(
                <ProductRow
                    car={car}
                    key={car.name} />
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Horsepower</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;