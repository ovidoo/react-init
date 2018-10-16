import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilterTable from './components/FilterTable';

const DATA_URL = './api/v1/car/?format=json';
const DATA_URL_LOCAL = 'http://localhost/api/v1/car/?format=json';

/*
* Since it's my first react app, I have done a bit of research to see how
* the code should be structured. So I discovered there's nothing better than official docs.
* https://reactjs.org/docs/thinking-in-react.html
* Coming from Angular world, man! I envy that type of official documentation
* They even teach you how to think as a dev (o_O)
* */

class App extends Component {

    state = {
        meta: {},
        cars: []
    };

    componentDidMount() {
        fetch(DATA_URL_LOCAL)
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


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FilterTable meta={this.state.meta} cars={this.state.cars} />
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}

export default App;
