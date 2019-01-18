import React from 'react';
import api from '../api/api';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import StreamList from '../streams/StreamList';
import LoginForm from './LoginForm';
import TableRecords from './TableRecords';
import Seniors from '../containers/Seniors';
import Rides from '../containers/Rides';
import Logs from '../containers/Logs';

class App extends React.Component {

    render() {
    return (
    <div>
    <div>
        <BrowserRouter>
        <div>
        <Menu />
        <Route path="/StreamList" exact component={StreamList} />
        <Route path="/loginform" component={LoginForm} />
        <Route path="/tablerecord" component={TableRecords} />
        <Route path="/seniors" component={Seniors} />
        <Route path="/rides" component={Rides} />
        <Route path="/logs" component={Logs} />
        </div>
        </BrowserRouter> 
    </div>
    </div>
    );
    };

};

export default App;