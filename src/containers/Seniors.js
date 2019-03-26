import React from 'react';
import api from '../api/api';
import SearchBar from '../components/Seniors_SearchBar';
import TableSeniors from '../components/Seniors_Table';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Popup, Grid, Segment } from 'semantic-ui-react';
import SeniorPopup from '../components/Seniors_Popup_add';
import './Seniors.css';
import { connect } from 'react-redux';
import store from '../store';
import {update_seniors_list} from "../actions";

class Seniors extends React.Component {
    state = {
        records: [],
            is_asc_cdate: this.props.seniorSearch_is_asc_cdate,
            is_desc_cdate: this.props.seniorSearch_is_desc_cdate,
            is_asc_cId: this.props.seniorSearch_is_asc_cId,
            is_desc_cId: this.props.seniorSearch_is_desc_cId,
            is_asc_byr: this.props.seniorSearch_is_asc_byr,
            is_desc_byr: this.props.seniorSearch_is_desc_byr,
            card_id: this.props.seniorSearch_term,
            birth_year: this.props.seniorSearch_year,
            phone_number: this.props.seniorSearch_number,
            sex: this.props.seniorSearch_gender,
            blocked: this.props.seniorSearch_block,
            date_from: this.props.seniorSearch_startDate,
            date_to: this.props.seniorSearch_endDate
         };

    onSearchSubmit = async ({term, year}) => {
        console.log(term + 'poaz temrs')
        const response = await api.get(`/seniors/fill/${term}`)
        console.log(response.data.data)
        store.dispatch(update_seniors_list(response.data.data));
    }

    getValid = async () => {
        let request = '';
        if( this.state.sex == 1 || this.state.sex == 0) {
            request += `&sex=${this.state.sex}`;
        }
        if(this.state.card_id != '') {
            request += `&card_id=${this.state.card_id}`;
        }
        if(this.state.birth_year != '') {
            request +=  `&birth_year=${this.state.birth_year}`;
        }
        if(this.state.phone_number != '') {
            request += `&phone_number=${this.state.phone_number}`;
        }
        if(this.state.blocked == 1 || this.state.blocked == 0) {
            request += `&blocked=${this.state.blocked}`;
        }
        if(this.state.is_asc_cdate == true) {
            request += `&asc_cdate=${1}`;
        }
        if(this.state.is_desc_cdate == true) {
            request += `&desc_cdate=${1}`;
        }
        if(this.state.is_asc_cId == true) {
            request += `&asc_cId=${1}`;
        }
        if(this.state.is_desc_cId == true) {
            request += `&desc_cId=${1}`;
        }
        if(this.state.is_asc_byr == true) {
            request += `&asc_byr=${1}`;
        }
        if(this.state.is_desc_byr == true) {
            request += `&desc_byr=${1}`
        }
        console.log( 'getVaidSeniors')
        console.log(request)
        const response = await api.get(`/seniors/all?dateFrom=${this.state.date_from}&dateTo=${this.state.date_to}${request}`)
        store.dispatch(update_seniors_list(response.data.data));

    }

    showAll = async () => {
        const response = await api.get(`/seniors/all`)
        store.dispatch(update_seniors_list(response.data.data));
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
        <TableSeniors records={ this.props.seniors_list }/>
        Liczba wyników: { this.props.seniors_list.length }.
    </div>
    </div>
    );
    };

};

const mapStateToProps = state => {
    return {
        seniorSearch_term: state.seniorSearch_term,
        seniorSearch_year: state.seniorSearch_year,
        seniorSearch_number: state.seniorSearch_number,
        seniorSearch_gender: state.seniorSearch_gender,
        seniorSearch_block: state.seniorSearch_block,
        seniorSearch_is_asc_cdate: state.seniorSearch_is_asc_cdate,
        seniorSearch_is_desc_cdate: state.seniorSearch_is_desc_cdate,
        seniorSearch_is_asc_cId: state.seniorSearch_is_asc_cId,
        seniorSearch_is_desc_cId: state.seniorSearch_is_desc_cId,
        seniorSearch_is_asc_byr: state.seniorSearch_is_asc_byr,
        seniorSearch_is_desc_byr: state.seniorSearch_is_desc_byr,
        seniorSearch_startDate: state.seniorSearch_startDate,
        seniorSearch_endDate: state.seniorSearch_endDate,
        seniors_list: state.seniors
    }
}
export default connect(mapStateToProps)(Seniors);
