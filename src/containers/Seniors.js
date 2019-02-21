import React from 'react';
import api from '../api/api';
import SearchBar from '../components/Seniors_SearchBar';
import TableSeniors from '../components/Seniors_Table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Popup, Grid, Segment } from 'semantic-ui-react';
import SeniorPopup from '../components/Seniors_Popup_add';
import { observer, inject } from 'mobx-react';
import './Seniors.css';

@inject('Store')
@observer
class Seniors extends React.Component {
    state = { records: [] };
    
    onSearchSubmit = async ({term, year}) => {
        console.log(term + 'poaz temrs')
        const response = await api.get(`/seniors/fill/${term}`)
        console.log(response.data.data)
       this.setState({ records: response.data.data });
    }
    showAll = async () => {
        const response = await api.get(`/seniors/all`)
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
            <SeniorPopup className="button"/>
        </Grid.Column>
      </Grid>
        <TableSeniors records={ this.state.records }/>
        Liczba wyników: { this.state.records.length }.
    </div>
    </div>
    );
    };

};

export default Seniors;