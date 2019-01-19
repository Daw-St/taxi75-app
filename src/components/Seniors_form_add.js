import React, { Component } from 'react'
import { Form, Select } from 'semantic-ui-react'
import api from '../api/api';
class FormExampleClearOnSubmit extends Component {
  state = { card_id: '', birth_year: '', sex: '', phone_number: '' }

  handleChange = (e, { card_id, value }) => this.setState({ [card_id]: value })

  handleSubmit = () => {
    const { card_id, birth_year, sex, phone_number } = this.state

    this.setState({ card_id: card_id, birth_year: birth_year, 
      sex: sex, phone_number: phone_number })

    api.post(`/senior/all`, { body: {
      'card_id': this.state.card_id,
      'sex': this.state.sex,
      'birth_year': this.state.birth_year,
      'phne_number': this.state.phone_number
    }})
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
            <Form.Input placeholder='00000000K' name='card_id' value={card_id} onChange={this.handleChange} />
            <Form.Input
              placeholder='1900'
              name='birth_year'
              value={birth_year}
              onChange={this.handleChange}
            />
            <Form.Input 
            control={Select} 
            options={genderOptions} 
            label='Płeć'
            placeholder='Płeć' 
            search searchInput={{ id: 'form-select-control-gender' }} name='sex' value={sex}/>
            <Form.Input 
            label='Numer Telefonu' 
            placeholder='111 222 333' 
            name='phone_number' value={phone_number} onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ card_id, birth_year, phone_number, sex }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ card_id, birth_year, phone_number, sex }, null, 2)}</pre>
      </div>
    )
  }
}

export default FormExampleClearOnSubmit