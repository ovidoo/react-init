import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductDetails from './components/ProductDetails';


const DATA_URL = './api/v1/car/?format=json';

/*
* Since it's my first react app, I have done a bit of research to see how
* the code should be structured. So I discovered there's nothing better than official docs.
* Coming from Angular world, man! I envy that type of official documentation
* They even teach you how to think as a dev (o_O)
* */

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={HomeScreen} />
                            <Route path="/car/:id" component={ProductDetails} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </header>
            </div>
        );
    }
}

function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No page  for address "<code>{location.pathname}</code>"
            </h3>
        </div>
    );
}

export default App;
