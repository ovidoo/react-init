import React, { Component } from 'react';

class ProductRow extends Component {

    render() {
        const car = this.props.car;
        const name = car.name;

        return (
            <tr>
                <td style={{textAlign: 'left', paddingBottom: '5px'}}>
                    <a href={'/car/'+ car.id} style={{color: '#fff', textDecoration: 'none'}}>{name}</a></td>
                <td>{car.horsepower}</td>
            </tr>
        );
    }
}

export default ProductRow;