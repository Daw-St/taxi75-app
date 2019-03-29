import React from 'react';
import api from '../api/api';
import SearchBar from '../components/SearchBar';
import TableRides from '../components/Rides_Table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Popup, Grid, Segment } from 'semantic-ui-react';
import RidesPopupAdd from '../components/Rides_Popup_add';
import { connect } from 'react-redux';
import store from '../store';
import {update_rides_list} from "../actions/ride";

class Seniors extends React.Component {
    state = { records: [],
        card_id: this.props.rideSearch_term,
        pickup_date: this.props.rideSearch_pickup_date,
        pickup_time: this.props.rideSearch_pickup_time,
        status: this.props.rideSearch_status,
        creation_date: this.props.rideSearch_creation_date,
        is_asc_pdate: this.props.rideSearch_is_asc_pdate,
        is_desc_pdate: this.props.rideSearch_is_desc_pdate,
        is_asc_ptime: this.props.rideSearch_is_asc_ptime,
        is_desc_ptime: this.props.rideSearch_is_desc_ptime,
        is_asc_status: this.props.rideSearch_is_asc_status,
        is_desc_status: this.props.rideSearch_is_desc_status,
        is_asc_cdate: this.props.rideSearch_is_asc_cdate,
        is_desc_cdate: this.props.rideSearch_is_desc_cdate,
        is_asc_cId: this.props.rideSearch_is_asc_cId,
        is_desc_cId: this.props.rideSearch_is_desc_cId,
     };
    
    onSearchSubmit = async term => {

        const response = await api.get(`/rides/fill/${term}`)
        console.log(response.data.data)
        this.setState({ records: response.data.data });
        store.dispatch(update_rides_list(response.data.data));
    }

    getValid = async () => {
        let request = '';
        if( this.state.status == 1 || this.state.status == 2 || this.state.status == 3 || this.state.status == 4 || this.state.status == 5) {
            request += `&status=${this.state.status}`;
        }
        if(this.state.card_id != '') {
            request += `&card_id=${this.state.card_id}`;
        }
        if(this.state.pickup_date != '') {
            request +=  `&pickup_date=${this.state.pickup_date}`;
        }
        if(this.state.creation_date != '') {
            request += `&creation_date=${this.state.creation_date}`;
        }
        if(this.state.pickup_time != '') {
            request += `&pickup_time=${this.state.pickup_time}`;
        }
        if(this.state.is_asc_pdate == true) {
            request += `&asc_pdate=${1}`;
        }
        if(this.state.is_desc_pdate == true) {
            request += `&desc_pdate=${1}`;
        }
        if(this.state.is_asc_ptime == true) {
            request += `&asc_ptime=${1}`;
        }
        if(this.state.is_desc_ptime == true) {
            request += `&desc_ptime=${1}`;
        }
        if(this.state.is_asc_status == true) {
            request += `&asc_status=${1}`;
        }
        if(this.state.is_desc_status == true) {
            request += `&desc_status=${1}`
        }
        if(this.state.is_asc_cdate == true) {
            request += `&asc_cdate=${1}`;
        }
        if(this.state.is_desc_cdate == true) {
            request += `&desc_cdate=${1}`
        }
        if(this.state.is_asc_cId == true) {
            request += `&asc_cId=${1}`;
        }
        if(this.state.is_desc_cId == true) {
            request += `&desc_cId=${1}`
        }
        console.log( 'getVaidRides')
        console.log(request)
        const response = await api.get(`/rides/all?${request}`)
        store.dispatch(update_rides_list(response.data.data));

    }

    showAll = async () => {
        const response = await api.get(`/rides/all`)
        store.dispatch(update_rides_list(response.data.data));
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

const mapStateToProps = state => {
    return {
        rideSearch_term: state.rideSearch_term,
        rideSearch_pickup_date: state.rideSearch_pickup_date,
        rideSearch_pickup_time: state.rideSearch_pickup_time,
        rideSearch_status: state.rideSearch_status,
        rideSearch_creation_date: state.rideSearch_creation_date,
        rideSearch_is_asc_pdate: state.rideSearch_is_asc_pdate,
        rideSearch_is_desc_pdate: state.rideSearch_is_desc_pdate,
        rideSearch_is_asc_ptime: state.rideSearch_is_asc_ptime,
        rideSearch_is_desc_ptime: state.rideSearch_is_desc_ptime,
        rideSearch_is_asc_status: state.rideSearch_is_asc_status,
        rideSearch_is_desc_status: state.rideSearch_is_desc_status,
        rideSearch_is_asc_cdate: state.rideSearch_is_asc_cdate,
        rideSearch_is_desc_cdate: state.rideSearch_is_desc_cdate,
        rideSearch_is_asc_cId: state.rideSearch_is_asc_cId,
        rideSearch_is_desc_cId: state.rideSearch_is_desc_cId,
    }
}

export default connect(mapStateToProps)(Seniors);