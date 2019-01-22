import React, { Component } from 'react'
import { Form, Select } from 'semantic-ui-react'
import api from '../api/api';

class FormExampleClearOnSubmit extends Component {
  constructor(props){
    super(props)
    this.state = { card_id: '', birth_year: '', sex: '', phone_number: '' }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange = (e, { card_id, value }) => this.setState({ [card_id]: value })

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    const { card_id, birth_year, sex, phone_number } = this.state

    this.setState({ card_id: card_id, birth_year: birth_year, 
      sex: sex, phone_number: phone_number })

    console.log(this.state.card_id)
    console.log(this.state.sex)
    console.log(this.state.birth_year)
    console.log(this.state.phone_number)
    api.post(`/senior/add`,{ body: {
      'card_id': this.state.card_id,
      'sex': this.state.sex,
      'birth_year': this.state.birth_year,
      'phone_number': this.state.phone_number
    }}).then(function(response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { card_id, birth_year, phone_number, sex } = this.state

    const genderOptions = [
      { key: 'm', text: 'Mężczyzna', value: 1 },
      { key: 'k', text: 'Kobieta', value: 2 },
    ]

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input label="ID Karty" placeholder='00000000K' name='card_id' value={card_id} onChange={this.handleInputChange} />
            <Form.Input
              label="Data Urodzenia"
              placeholder='1900'
              name='birth_year'
              value={birth_year}
              onChange={this.handleInputChange}
            />
            <Form.Input 
            control={Select} 
            options={genderOptions} 
            label='Płeć'
            placeholder='Płeć' 
            search searchInput={{ id: 'form-select-control-gender' }} name='sex' value={sex} onChange={this.handleInputChange}/>
            <Form.Input 
            label='Numer Telefonu' 
            placeholder='111 222 333' 
            name='phone_number' value={phone_number} onChange={this.handleInputChange} />
            <Form.Button label="Potwierdź" content='Dodaj' />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default FormExampleClearOnSubmit