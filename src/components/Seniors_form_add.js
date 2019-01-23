import React, { Component } from 'react'
import { Form, Select, Message } from 'semantic-ui-react'
import api from '../api/api';

class FormExampleClearOnSubmit extends Component {
  constructor(props){
    super(props)
    this.state = { card_id: '', birth_year: '', sex: '', phone_number: '', result:'' }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.failure = this.failure.bind(this);
  }

  handleChange = (e, { value }) => this.setState({ sex: value });

  handleInputChange(event) {
    console.log(event)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value)
    const name = target.name;
    console.log(name)

    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  success = () => {
    this.setState({result: 'success'})
  }

  failure = () => {
    this.setState({result: 'failure'})
  }

  handleSubmit = () => {
    const { card_id, birth_year, sex, phone_number } = this.state

    this.setState({ card_id: card_id, birth_year: birth_year, 
      sex: sex, phone_number: phone_number })

    var self = this;

    api.post(`/senior/add`, {
      'card_id': this.state.card_id,
      'sex': this.state.sex,
      'birth_year': this.state.birth_year,
      'phone_number': this.state.phone_number
    }).then(function(response) {
      console.log(response);
      self.setState({result: 'success'})
    }).catch(function (error) {
      console.log(error.response);
      self.setState({result: 'failure'})
    });
  }

  showMessage = () => {
    if(this.state.result == 'success') {
      return(
        <Message success header='Senior dodany pomyślnie!' content="Senior został zapisany w bazie, możesz teraz dodać do niego przejazdy lub dodać kolejnego seniora." />
      )
    } else if(this.state.result == 'failure') {
      return(
        <Message error header='Wystąpił problem!' content='W jednym z pól znajduje się problem.'/>)
    } else {
      return(
        <Message warning header='Wypełnij wszystkie pola!' 
        list={['Wypełnij wszystkie powyższe pola, następnie kliknij przycisk "Dodaj".',
        'Po pomyślnym dodaniu seniora do bazy, powjawi się informacja o sukcesie.',
        'Po jej wystąpieniu możesz oddać kolejnego seniora lub zamknąć formularz.',]}/>)
    }
  }

  render() {
    const { card_id, birth_year, phone_number, sex } = this.state

    const genderOptions = [
      { key: 'm', text: 'Mężczyzna', value: 'M' },
      { key: 'k', text: 'Kobieta', value: 'K' },
    ]

    return (
      <div>
        <Form error warning success onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input required label="ID Karty" placeholder='00000000K' name='card_id' value={card_id} onChange={this.handleInputChange} />
            <Form.Input required
              label="Data Urodzenia"
              placeholder='1900'
              name='birth_year'
              value={birth_year}
              onChange={this.handleInputChange}
            />
            <Form.Select required 
            name='sex' 
            value={sex} 
            fluid label='Płeć' 
            options={genderOptions} 
            placeholder='Płeć' 
            onChange={this.handleChange}/>
            <Form.Input required
            label='Numer Telefonu' 
            placeholder='111 222 333' 
            name='phone_number' value={phone_number} onChange={this.handleInputChange} />
            <Form.Button label="Potwierdź" content='Dodaj' />
          </Form.Group>
          {this.showMessage()}
        </Form>
      </div>
    )
  }
}

export default FormExampleClearOnSubmit