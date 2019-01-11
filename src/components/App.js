import React from 'react';
import streams from '../api/streams';
import SearchBar from './SearchBar';
import RecordList from './RecordList';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import StreamList from '../streams/StreamList';

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

        const response = await streams.get('/rides/all')
       this.setState({ images: response.data.results });
    }
    render() {
    return (
    <div>
    <div>
        <BrowserRouter>
        <div>
        <Header />
        <Route path="/StreamList" exact compnent={StreamList} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagethree" component={PageThree} />
        </div>
        </BrowserRouter> 
    </div>
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <RecordList records={ this.state.records }/>
    </div>
    </div>
    );
    };

};

export default App;