import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ProductRow extends Component {

    render() {
        const car = this.props.car;

        return (

            <tr>
                <td style={{textAlign: 'left', paddingBottom: '5px'}}>
                    <Link to={'./car/' + car.id} style={{color: '#fff', textDecoration: 'none'}}>{car.name}</Link>
                </td>
                <td>{car.horsepower}</td>
            </tr>
        );
    }
}

export default ProductRow;