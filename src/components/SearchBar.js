import React from 'react';
import DatePicker from "react-datepicker";
import {Dropdown, Form, Input} from 'semantic-ui-react';
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import store from '../store';
import api from "../api/api";
import {ride_search, update_rides_list} from "../actions/ride";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            card_id: this.props.rideSearch_term,
            pickup_date: this.props.rideSearch_pickup_date,
            status: this.props.rideSearch_status,
            creation_date: this.props.rideSearch_creation_date,
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeCreation = this.handleChangeCreation.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            card_id: this.state.rideSearch_term,
            pickup_date: this.state.rideSearch_pickup_date,
            status: this.state.rideSearch_status,
            creation_date: this.state.rideSearch_creation_date,
        };
        store.dispatch(ride_search(data));
        const response = await api.get(`/rides/all?card_id=${this.state.card_id}&dateFrom=${this.state.pickup_date.toISOString()}&dateTo=${this.state.pickup_time.toISOString()}&status=${this.state.status}&creation_date=${this.state.creation_date.toISOString()}`);

        store.dispatch(update_rides_list(response.data.data));

      };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    handleChangeStart(date) {
        this.setState({startDate: date})
    }

    handleChangeCreation(date) {
        this.setState({creationDate: date})
    }

    render() {
        const { activeIndex } = this.state

        const statusOptions = [
            { key: 'zm', text: 'Zmiana', value: 1},
            { key: 'zr', text: 'Zrealizowane', value: 2},
            { key: 'od', text: 'Odwołane', value: 3},
            { key: 'ni', text: 'Nie stawił się', value: 4},
            { key: 'za', text: 'Zamówione', value: 5},
        ];

        return (
            <div className="ui segment">
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='ID Karty:'
                    placeholder='00000000K'
                    onChange = {(e) => {this.setState({card_id: e.target.value})}}
                    value={this.state.card_id}
                />
                <Form.Field>
                    <label>Wybierz status:</label>
                    <Dropdown
                        selection
                        name='block'
                        options={statusOptions}
                        placeholder='Zrealizowane lub nie'
                        onChange={this.handleSelectChangeBlock}
                />
                </Form.Field>
                <Form.Field>
                    <label>Data odbioru:</label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeStart}
                        dateFormat="yyyy-MM-dd"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Data utworzenia:</label>
                    <DatePicker
                        selected={this.state.creationDate}
                        onChange={this.handleChangeCreation}
                        dateFormat="yyyy-MM-dd"
                    />
                </Form.Field>
                </Form.Group>
                <Form.Button content='Wyszukaj' type='submit' />
            </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rideSearch_term: state.rideSearch_term,
        rideSearch_pickup_date: state.rideSearch_pickup_date,
        rideSearch_status: state.rideSearch_status,
        rideSearch_creation_date: state.rideSearch_creation_date,
    }
}

export default connect(mapStateToProps)(SearchBar);
