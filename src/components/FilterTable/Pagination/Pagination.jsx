import React, { Component } from 'react';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

    }

    handlePagination(e) {
        fetch(this.props.meta[e.target.name])
            .then(response => {
                return response.json();
            })
            .then(res => {
                this.props.onPaginationChange(res);
            })
            .catch((error) => {
                console.log('AHHH! An Error!', error);
            });

    }

    render() {

        return (
            <form>
                <button style={{padding: '20px', marginRight: '10px'}}
                        type="button"
                        name="previous"
                        onClick={this.handlePagination}>Previous</button>
                <button style={{padding: '20px'}}
                        type="button"
                        name="next"
                        onClick={this.handlePagination}>Next</button>

            </form>
        );
    }
}

export default Pagination;

