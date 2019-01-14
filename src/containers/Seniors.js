import React from 'react';
import api from '../api/api';
import SearchBar from '../components/SearchBar';
import RecordList from '../components/RecordList';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Seniors extends React.Component {
    state = { records: [] };
    
    onSearchSubmit = async term => {

        const response = await api.get(`/seniors/fill/${term}`)
        console.log(response.data.data)
       this.setState({ records: response.data.data });
    }
    render() {
    return (
    <div>
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <RecordList records={ this.state.records }/>
        Liczba wyników: { this.state.records.length }.
    </div>
    </div>
    );
    };

};

export default Seniors;