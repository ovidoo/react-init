import React, { Component } from 'react';
import AttributeRow from "./AttributeRow";
import PathProvider from '../../utils/PathProvider'
import DataProvider from '../../utils/DataProvider'

const DATA_URL = '../api/v1/car/';

class ProductDetails extends Component {

    constructor(props) {
        super();
        console.log(props);
    }

    state = {
        car: {}
    };

    componentDidMount() {
        this.fetchCar(this.props.match.params.id);
    }

    fetchCar(id) {
        const uri = PathProvider.getPath(DATA_URL + id);

        DataProvider.getData(uri)
            .then(res => {
                const car = res;
                this.setState({ car });
                console.log(this.state.car);

        });
    }

    render() {

        return (

            <div>
                    <table>
                        <AttributeRow keys={Object.keys(this.state.car)}
                                      car={this.state.car}></AttributeRow>
                        <tfoot>
                            <tr>
                                <td>
                                    <button style={{padding: '20px'}}
                                            onClick={this.props.history.goBack}>Back</button>
                                </td>
                                <td>
                                    <button style={{padding: '20px'}}>Change</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
            </div>

        );
    }
}

export default ProductDetails;