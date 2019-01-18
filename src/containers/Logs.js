import React from 'react';
import api from '../api/api';
import SearchBar from '../components/SearchBar';
import TableLogs from '../components/Logs_Table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class Seniors extends React.Component {
    state = { records: [] };
    
    onSearchSubmit = async term => {
        const response = await api.get(`/logs/all`)
        this.setState({ records: response.data.data });
    }

    showAll = async () => {
        const response = await api.get(`/logs/all`)
        this.setState({ records: response.data.data });
    }

    render() {
    return (
    <div>
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <Button onClick={this.showAll} color='yellow'>Pokaż wszystkie</Button>
        <TableLogs records={ this.state.records }/>
        Liczba wyników: { this.state.records.length }.
    </div>
    </div>
    );
    };

};

export default Seniors;