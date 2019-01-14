import React from 'react';
import api from '../api/api';
import SearchBar from './SearchBar';
import RecordList from './RecordList';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import StreamList from '../streams/StreamList';
import LoginForm from './LoginForm';
import TableRecords from './TableRecords';
import Seniors from '../containers/Seniors';

const PageTwo = () => {
    return (
        <div>Page two
        <Link to="/">Przejdź na stronę glowna</Link>
        <Link to="/pagethree">Przejdź na stronę trzecia</Link>
        </div>
    );
};

const PageThree = () => {
    return (
        <div>Page three
        <Link to="/">Przejdź na stronę glowna</Link>
        <Link to="/pagetwo">Przejdź na stronę druga</Link>
        </div>
    );
};
class App extends React.Component {
    state = { records: [] };
    
    onSearchSubmit = async term => {

        const response = await api.get(`/seniors/fill/${term}`)
        console.log(response.data.data)
       this.setState({ records: response.data.data });
    }
    render() {
    return (
    <div>
    <div>
        <BrowserRouter>
        <div>
        <Menu />
        <Route path="/StreamList" exact component={StreamList} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagethree" component={PageThree} />
        <Route path="/loginform" component={LoginForm} />
        <Route path="/tablerecord" component={TableRecords} />
        <Route path="/seniors" component={Seniors} />
        </div>
        </BrowserRouter> 
    </div>
    </div>
    );
    };

};

export default App;