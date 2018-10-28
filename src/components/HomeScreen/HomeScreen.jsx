import React, {Component} from 'react';

import FilterTable from './FilterTable';
import Pagination from './FilterTable/Pagination';
import PathProvider from "../../utils/PathProvider";
import DataProvider from "../../utils/DataProvider";

const DATA_URL = './api/v1/car/?format=json';

class HomeScreen extends Component {

    constructor() {
        super();
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
    }

    state = {
        meta: {},
        cars: []
    };

    componentDidMount() {
        this.fetchCars(DATA_URL);
    }

    fetchCars(data_url) {
        data_url = PathProvider.getPath(data_url);

        DataProvider.getData(data_url)
            .then(res => {
                const meta = res.meta;
                const cars = res.objects;
                this.setState({ meta, cars });
            })
    }

    handlePaginationChange(direction) {
        let data_url = direction && this.state.meta[direction]
            ? this.state.meta[direction] :  DATA_URL;

        this.fetchCars(data_url)
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