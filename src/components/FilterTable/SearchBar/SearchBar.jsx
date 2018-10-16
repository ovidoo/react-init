import React, { Component } from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {

        return (
            <form>
                <input
                    style={{padding: '10px', marginTop: '10px'}}
                    type="text"
                    placeholder="Filter..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}

export default SearchBar;