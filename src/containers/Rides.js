import React from 'react';
import api from '../api/api';
import SearchBar from '../components/SearchBar';
import TableRides from '../components/Rides_Table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Popup, Grid, Segment } from 'semantic-ui-react';
import RidesPopupAdd from '../components/Rides_Popup_add';

class Seniors extends React.Component {
    state = { records: [] };
    
    onSearchSubmit = async term => {

        const response = await api.get(`/rides/fill/${term}`)
        console.log(response.data.data)
        this.setState({ records: response.data.data });
    }

    showAll = async () => {
        const response = await api.get(`/rides/all`)
        this.setState({ records: response.data.data });
    }

    render() {
    return (
    <div>
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <Grid columns='equal'columns={4}>
        <Grid.Column>
            <Button onClick={this.showAll} color='yellow'>Pokaż wszystkie</Button>
        </Grid.Column>
        <Grid.Column>
            <RidesPopupAdd className="button"/>
        </Grid.Column>
        </Grid>
        <TableRides records={ this.state.records }/>
        Liczba wyników: { this.state.records.length }.
    </div>
    </div>
    );
    };

};

export default Seniors;