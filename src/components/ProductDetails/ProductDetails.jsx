import React, { Component } from 'react';
import AttributeRow from "./AttributeRow";
import PathProvider from '../../utils/PathProvider'

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

        fetch(uri)
            .then(response => {
                return response.json();
            })
            .then(res => {
                const car = res;
                this.setState({ car });
                console.log(this.state.car);
            })
            .catch((error) => {
                console.log('AHHH! An Error!', error);
            });
    }

    render() {

        return (

            <div>
                <div>
                    <button onClick={this.props.history.goBack}>back</button>
                </div>
                <form>
                    <table>
                        <AttributeRow keys={Object.keys(this.state.car)}
                                      car={this.state.car}></AttributeRow>
                    </table>
                </form>
            </div>

        );
    }
}

export default ProductDetails;