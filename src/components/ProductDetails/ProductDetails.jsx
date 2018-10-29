import React, { Component } from 'react';
import AttributeRow from "./AttributeRow";
import PathProvider from '../../utils/PathProvider'
import DataProvider from '../../utils/DataProvider'

const DATA_URL = '../api/v1/car/';

class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.handleUpdateCar = this.handleUpdateCar.bind(this);
    }

    state = {
        car: {},
        newCar: {},
        id: '',
        updated: false
    };

    componentDidMount() {
        this.fetchCar(this.props.match.params.id);
        this.setState({id: this.props.match.params.id});
    }

    fetchCar(id) {
        const uri = PathProvider.getPath(DATA_URL + id);

        DataProvider.getData(uri)
            .then(res => {
                const car = res;
                this.setState({ car });

        });
    }

    handleDetailChange(event) {
        const car = Object.assign(this.state.car, event); // PATCH not working for the API
        this.setState({newCar: car});
    }

    handleUpdateCar() {
        const uri = PathProvider.getPath(DATA_URL + this.state.id + '/');

        fetch(uri, {
            crossDomain: true,
            method: 'PUT',
            "headers": {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify( this.state.newCar )
        })
            .then( res => res && this.setState({updated: true}))
            .catch(err => console.log(err));
    }

    render() {

        /*
        * TODO: Warn the user when navigating away
        * if changes were made without saving
        * */
        return (
            <div>
                <table>
                    <AttributeRow keys={Object.keys(this.state.car)}
                                  car={this.state.car}
                                  onCarDetailsChange={this.handleDetailChange}></AttributeRow>
                    <tfoot>
                        <tr>
                            <td colSpan={2} style={{textAlign: 'center',
                                display: this.state.updated ? 'inline' : 'none'}}>Update successful!</td>
                        </tr>
                        <tr>
                            <td>
                                <button style={{padding: '20px'}}
                                        onClick={this.props.history.goBack}>Back</button>
                            </td>
                            <td>
                                <button style={{padding: '20px'}} onClick={this.handleUpdateCar}>Change</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        );
    }
}

export default ProductDetails;