import React, { Component } from 'react';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

    }

    handlePagination(e) {
        this.props.onPaginationChange(e.target.name);
    }

    render() {

        return (
            <form>
                <button style={{padding: '20px', marginRight: '10px', display: this.props.meta.previous ? 'inline' : 'none'}}
                        type="button"
                        name="previous"
                        onClick={this.handlePagination}>Previous</button>
                <button style={{padding: '20px', display: this.props.meta.next ? 'inline' : 'none'}}
                        type="button"
                        name="next"
                        onClick={this.handlePagination}>Next</button>

            </form>
        );
    }
}

export default Pagination;

