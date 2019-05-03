import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Seniors from '../containers/Seniors';
import Rides from '../containers/Rides';

class App extends React.Component {

    render() {
        return (
        <div>
        <div>
            <BrowserRouter>
            <div>
                <Menu />
                <Route path="/" exact component={Rides} />
                <Route path="/seniors" component={Seniors} />
                <Route path="/rides" component={Rides} />
            </div>
            </BrowserRouter>
        </div>
        </div>
        );
    };

};

export default App;
