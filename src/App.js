import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilterTable from './components/FilterTable';
import Pagination from './components/FilterTable/Pagination';

const DATA_URL = './api/v1/car/?format=json';

/*
* Since it's my first react app, I have done a bit of research to see how
* the code should be structured. So I discovered there's nothing better than official docs.
* Coming from Angular world, man! I envy that type of official documentation
* They even teach you how to think as a dev (o_O)
* */

class App extends Component {

    constructor() {
        super();
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    state = {
        meta: {},
        cars: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData(direction) {
        const data_url = direction && this.state.meta[direction] ? this.state.meta[direction] : DATA_URL;

        fetch(data_url)
            .then(response => {
                return response.json();
            })
            .then(res => {
                const meta = res.meta;
                const cars = res.objects;
                console.log(cars);
                this.setState({ meta, cars });
            })
            .catch((error) => {
                console.log('AHHH! An Error!', error);
            });
    }

    handlePaginationChange(direction) {
        this.fetchData(direction)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FilterTable meta={this.state.meta}
                                 cars={this.state.cars} />
                    <Pagination meta={this.state.meta}
                                onPaginationChange={this.handlePaginationChange}></Pagination>
                </header>
            </div>
        );
    }
}

export default App;
