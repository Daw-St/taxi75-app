import React from 'react';
import {Dropdown, Form, Input} from 'semantic-ui-react';
import {senior_search, senior_search_gender, update_seniors_list} from '../actions/index';
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import store from '../store';
import api from "../api/api";

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            card_id: this.props.seniorSearch_term,
            birth_year: this.props.seniorSearch_year,
            phone_number: this.props.seniorSearch_number,
            sex: this.props.seniorSearch_gender
        };

        this.handleGenderChange = this.handleGenderChange.bind(this);
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            term: this.state.card_id,
            year: this.state.birth_year,
            number: this.state.phone_number,
            gender: this.state.sex
        };
        store.dispatch(senior_search(data));

        const response = await api.get(`/seniors/all?cart_id=${this.state.card_id}&sex=${this.state.sex}&birth_year=${this.state.birth_year}&phone_number=${this.state.phone_number}`);

        store.dispatch(update_seniors_list(response.data.data));

      };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    onFormClick = event => {
        event.preventDefault();
        this.props.onClick(this.state);
    };

    handleGenderChange = (selectedOption) => {
        this.props.Store.gender = selectedOption;
    };

    handleSelectChange = (e, { name, value }) => { this.setState({ [name]: value })
    };

    handleSelectChangeGender = (e, { name, value }) => {
        store.dispatch(senior_search_gender(value));
        this.setState({sex: value});
    };

    render() {

        const genderOptions = [
            { key: 'm', text: 'Mężczyzna', value: '1' },
            { key: 'k', text: 'Kobieta', value: '0' },
          ];

        const blockOptions = [
            { key: 't', text: 'Zablokowany', value: 1},
            { key: 'n', text: 'Nie zablokowany', value: 0}
        ];


        return (
            <div className="ui segment">
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='ID karty:'
                    placeholder='00000000K'
                    onChange = {(e) => {this.setState({card_id: e.target.value})}}
                    value={this.state.card_id}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Rok urodzenia:'
                    placeholder='1901'
                    onChange = {(e) => {this.setState({birth_year: e.target.value})}}
                    value={this.state.birth_year}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Numer telefonu:'
                    placeholder='121121121'
                    onChange = {(e) => {this.setState({phone_number: e.target.value})}}
                    value={this.state.phone_number}
                />
                <Form.Field>
                    <label>Płeć:</label>
                    <Dropdown
                        selection
                        name='gender'
                        options={genderOptions}
                        placeholder='Wybierz'
                        onChange={this.handleSelectChangeGender}
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
        seniorSearch_term: state.seniorSearch_term,
        seniorSearch_year: state.seniorSearch_year,
        seniorSearch_number: state.seniorSearch_number,
        seniorSearch_gender: state.seniorSearch_gender,
        seniorSearch_block: state.seniorSearch_block
    }
};

export default connect(mapStateToProps)(SearchBar);
