import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            meta: {},
            cars: [{}]
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {

        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <hr/>
                <ProductTable
                    cars={this.props.cars}
                    filterText={this.state.filterText}
                />
                <hr/>
            </div>
        );
    }
}

export default FilterTable;