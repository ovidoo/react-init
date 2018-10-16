import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Pagination from './Pagination';

class FilterTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            paginationChanged: false,
            meta: {},
            cars: [{}]
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handlePaginationChange(response) {
        this.setState({
            paginationChanged: true,
            meta: response.meta,
            cars: response.cars
        });
    }

    render() {
        const isChanged = this.state.paginationChanged;

        if (isChanged) {
            this.props.meta = this.state.meta;
            this.props.cars = this.state.cars
        }

        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <hr/>
                <ProductTable
                    cars={isChanged ? this.state.cars : this.props.cars}
                    filterText={this.state.filterText}
                />
                <hr/>
                <Pagination meta={isChanged ? this.state.meta : this.props.meta}
                            onPaginationChange={this.handlePaginationChange}></Pagination>
            </div>
        );
    }
}

export default FilterTable;