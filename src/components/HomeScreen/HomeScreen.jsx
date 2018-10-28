import React, {Component} from 'react';

import FilterTable from './FilterTable';
import Pagination from './FilterTable/Pagination';
import PathProvider from "../../utils/PathProvider";

const DATA_URL = './api/v1/car/?format=json';

class HomeScreen extends Component {

    constructor() {
        super();
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.fetchCars = this.fetchCars.bind(this);
    }

    state = {
        meta: {},
        cars: []
    };

    componentDidMount() {
        this.fetchCars();
    }

    fetchCars(direction) {
        let data_url = direction && this.state.meta[direction]
            ? this.state.meta[direction] :  DATA_URL;
        data_url = PathProvider.getPath(data_url);

        fetch(data_url)
            .then(response => {
                return response.json();
            })
            .then(res => {
                const meta = res.meta;
                const cars = res.objects;
                this.setState({ meta, cars });
            })
            .catch((error) => {
                console.log('AHHH! An Error!', error);
            });
    }


    handlePaginationChange(direction) {
        this.fetchCars(direction)
    }

    render() {
        return (
            <div>
            <FilterTable meta={this.state.meta}
                         cars={this.state.cars} />
            <Pagination meta={this.state.meta}
        onPaginationChange={this.handlePaginationChange}></Pagination>
            </div>
        )
    }

}

export default HomeScreen