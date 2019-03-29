import React from 'react';
import  DatePicker  from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import { Accordion, Icon, Form, Input, TextArea, Button, Checkbox, Select, Dropdown} from 'semantic-ui-react';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import store from '../store';
import api from "../api/api";
import Rides from "../containers/Rides";
import {ride_search, ride_search_card, ride_search_pickup_date, ride_search_pickup_time, ride_search_status, ride_search_creation_date,
    ride_search_is_asc_pdate_true, ride_search_is_asc_pdate_false, ride_search_is_desc_pdate_true, ride_search_is_desc_pdate_false,
    ride_search_is_asc_ptime_true, ride_search_is_asc_ptime_false, ride_search_is_desc_ptime_true, ride_search_is_desc_ptime_false, ride_search_is_asc_status_true,
    ride_search_is_asc_status_false, ride_search_is_desc_status_true, ride_search_is_desc_status_false, ride_search_is_asc_cdate_true, 
    ride_search_is_asc_cdate_false, ride_search_is_desc_cdate_true, ride_search_is_desc_cdate_false, ride_search_is_asc_cId_true, 
    ride_search_is_asc_cId_false, ride_search_is_desc_cId_true, ride_search_is_desc_cId_false, update_rides_list} from "../actions/ride";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
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
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangetime = this.handleChangeTime.bind(this);
        this.handleChangeCreation = this.handleChangeCreation.bind(this);
        //this.handleChangeEnd = this.handleChangeEnd.bind(this);
        //this.handleGenderChange = this.handleGenderChange.bind(this);
        //this.handleBlockChange = this.handleBlockChange.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(this.state);
        const data = {
            card_id: this.state.rideSearch_term,
            pickup_date: this.state.rideSearch_pickup_date,
            pickup_time: this.state.rideSearch_pickup_time,
            status: this.state.rideSearch_status,
            creation_date: this.state.rideSearch_creation_date,
            is_asc_pdate: this.state.rideSearch_is_asc_pdate,
            is_desc_pdate: this.state.rideSearch_is_desc_pdate,
            is_asc_ptime: this.state.rideSearch_is_asc_ptime,
            is_desc_ptime: this.state.rideSearch_is_desc_ptime,
            is_asc_status: this.state.rideSearch_is_asc_status,
            is_desc_status: this.state.rideSearch_is_desc_status,
            is_asc_cdate: this.state.rideSearch_is_asc_cdate,
            is_desc_cdate: this.state.rideSearch_is_desc_cdate,
            is_asc_cId: this.state.rideSearch_is_asc_cId,
            is_desc_cId: this.state.rideSearch_is_desc_cId,
        };
        store.dispatch(ride_search(data));
        const response = await api.get(`/rides/all?card_id=${this.state.card_id}&dateFrom=${this.state.pickup_date.toISOString()}&dateTo=${this.state.pickup_time.toISOString()}&status=${this.state.status}&creation_date=${this.state.creation_date.toISOString()}&is_asc_pdate=${this.state.is_asc_pdate}&is_desc_pdate=${this.state.is_desc_pdate}&is_asc_ptime=${this.state.is_asc_ptime}&is_desc_ptime=${this.state.is_desc_ptime}&is_asc_status=${this.state.is_asc_status}&is_desc_status=${this.state.is_desc_status}&is_asc_cdate=${this.state.is_asc_cdate}&is_desc_cdate=${this.state.is_desc_cdate}&is_asc_cId=${this.state.is_asc_cId}&is_desc_cId=${this.state.is_desc_cId}`);
        
        store.dispatch(update_rides_list(response.data.data));

      };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    handleSelectChangeBlock = (e, { name, value }) => {
        //store.dispatch(rides_search_status(value));
        this.setState({status: value});
    }

    handleChangeStart(date) {
        //this.setState({startDate: date})
        //this.props.Store.startDate = date;
        //this.store.dispatch(senior_search_startDate(date))
        this.setState({startDate: date})
    }

    handleChangeTime(time) {
        //this.setState({startDate: date})
        //this.props.Store.startDate = date;
        //this.store.dispatch(senior_search_startDate(date))
        this.setState({time: time})
    }

    handleChangeCreation(date) {
        //this.setState({startDate: date})
        //this.props.Store.startDate = date;
        //this.store.dispatch(senior_search_startDate(date))
        this.setState({creationDate: date})
    }

    toggleChange_is_asc_pdate = () => {
        let change = this.state.is_asc_pdate;
        change? this.setState({is_asc_pdate: false}, () => store.dispatch(ride_search_is_asc_pdate_false())):
        this.setState({is_asc_pdate: true}, () => store.dispatch(ride_search_is_asc_pdate_true()));
        }

    toggleChange_is_desc_pdate = () => {
            let change = this.state.is_desc_pdate;
            change? this.setState({is_desc_pdate: false}, () => store.dispatch(ride_search_is_desc_pdate_false())):
            this.setState({is_desc_pdate: true}, () => store.dispatch(ride_search_is_desc_pdate_true()));
        }

    toggleChange_is_asc_ptime = () => {
            let change = this.state.is_asc_ptime;
            change? this.setState({is_asc_ptime: false}, () => store.dispatch(ride_search_is_asc_ptime_false())):
            this.setState({is_asc_ptime: true}, () => store.dispatch(ride_search_is_asc_ptime_true()));
        }
    
    toggleChange_is_desc_ptime = () => {
            let change = this.state.is_desc_ptime;
            change? this.setState({is_desc_ptime: false}, () => store.dispatch(ride_search_is_desc_ptime_false())):
            this.setState({is_desc_ptime: true}, () => store.dispatch(ride_search_is_desc_ptime_true()));
        }

    toggleChange_is_asc_status = () => {
            let change = this.state.is_asc_status;
            change? this.setState({is_asc_status: false}, () => store.dispatch(ride_search_is_asc_status_false())):
            this.setState({is_asc_status: true}, () => store.dispatch(ride_search_is_asc_status_true()));
        }
    
    toggleChange_is_desc_status = () => {
            let change = this.state.is_desc_status;
            change? this.setState({is_desc_status: false}, () => store.dispatch(ride_search_is_desc_status_false())):
            this.setState({is_desc_status: true}, () => store.dispatch(ride_search_is_desc_status_true()));
        }

    toggleChange_is_desc_cdate = () => {
            let change = this.state.is_desc_cdate;
            change? this.setState({is_desc_cdate: false}, () => store.dispatch(ride_search_is_desc_cdate_false())):
            this.setState({is_desc_cdate: true}, () => store.dispatch(ride_search_is_desc_cdate_true()));
        }
    
    toggleChange_is_asc_cdate = () => {
            let change = this.state.is_asc_cdate;
            change? this.setState({is_asc_cdate: false}, () => store.dispatch(ride_search_is_asc_cdate_false())):
            this.setState({is_asc_cdate: true}, () => store.dispatch(ride_search_is_asc_cdate_true()));
        }

    toggleChange_is_desc_cdate = () => {
            let change = this.state.is_desc_cId;
            change? this.setState({is_desc_cId: false}, () => store.dispatch(ride_search_is_desc_cId_false())):
            this.setState({is_desc_cId: true}, () => store.dispatch(ride_search_is_desc_cId_true()));
        }
    
    toggleChange_is_asc_cId = () => {
            let change = this.state.is_asc_cId;
            change? this.setState({is_asc_cId: false}, () => store.dispatch(ride_search_is_asc_cId_false())):
            this.setState({is_asc_cId: true}, () => store.dispatch(ride_search_is_asc_cId_true()));
        }

    render() {
        const { activeIndex } = this.state

        const statusOptions = [
            { key: 'zm', text: 'Zmiana', value: 1},
            { key: 'zr', text: 'Zrealizowane', value: 2},
            { key: 'od', text: 'Odwołane', value: 3},
            { key: 'ni', text: 'Nie stawił się', value: 4},
            { key: 'za', text: 'Zamówione', value: 5},
        ]


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
                    <label>Wybierz dzień:</label>
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
                <Form.Field>
                    <label>Wybierz godzinę:</label>
                    <DatePicker
                        selected={this.state.time}
                        onChange={this.handleChangeTime}
                        dateFormat="HH:mm:ss"
                        showTimeSelect
                        timeFormat="HH:mm:ss"
                        timeIntervals={1}
                        dateFormat="yyyy-MM-dd h:mm"
                        timeCaption="time"
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group>
                <Form.Field control={Checkbox} label={<label>Data odbioru rosnąco</label>}
                    checked={this.props.is_asc_pdate}
                    onChange={this.toggleChange_is_asc_pdate}
                    value={this.props.is_asc_pdate}
                />
                <Form.Field control={Checkbox} label={<label>Data odbioru malejąco</label>}
                    checked={this.props.is_desc_pdate}
                    onChange={this.toggleChange_is_desc_pdate}
                    value={this.props.is_asc_pdate}
                />
                <Form.Field control={Checkbox} label={<label>Godzina odbioru rosnąco</label>}
                    checked={this.props.is_asc_ptime}
                    onChange={this.toggleChange_is_asc_ptime}
                    value={this.props.is_asc_ptime}
                />
                <Form.Field control={Checkbox} label={<label>Godzina odbioru malejąco</label>}
                    checked={this.props.is_desc_ptime}
                    onChange={this.toggleChange_is_desc_ptime}
                    valye={this.props.is_desc_ptime}
                />
                <Form.Field control={Checkbox} label={<label>Status rosnąco</label>}
                    checked={this.props.is_asc_status}
                    onChange={this.toggleChange_is_asc_status}
                    value={this.props.is_asc_status}
                />
                </Form.Group>
                <Form.Group>
                <Form.Field control={Checkbox} label={<label>Status malejąco</label>}
                    checked={this.props.is_desc_status}
                    onChange={this.toggleChange_is_desc_status}
                    valye={this.props.is_desc_status}
                />
                <Form.Field control={Checkbox} label={<label>Data utworzenia rosnąco</label>}
                    checked={this.props.is_asc_cdate}
                    onChange={this.toggleChange_is_asc_cdate}
                    value={this.props.is_asc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>Data utworzenia malejąco</label>}
                    checked={this.props.is_desc_cdate}
                    onChange={this.toggleChange_is_desc_cdate}
                    value={this.props.is_desc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>Po id karty rosnąco</label>}
                    checked={this.props.is_asc_cId}
                    onChange={this.toggleChange_is_asc_cId}
                    value={this.props.is_asc_cId}
                />
                <Form.Field control={Checkbox} label={<label>Po id karty malejąco</label>}
                    checked={this.props.is_desc_cId}
                    onChange={this.toggleChange_is_desc_cId}
                    value={this.props.is_desc_cId}
                />
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

export default connect(mapStateToProps)(SearchBar);