import React, { Component } from 'react'
import { Form, Select, Message } from 'semantic-ui-react'
import api from '../api/api';


class FormExampleClearOnSubmit extends Component {
  constructor(props){
    super(props)
    this.state = { card_id: '', pickup_address: '', pickup_date: '', pickup_time: '', 
    destination_address: '', comments: '', status: '', result:''}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.failure = this.failure.bind(this);
  }

  handleChange = (e, { value }) => this.setState({ status: value });

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
    const { card_id, pickup_address, pickup_date, pickup_time, 
        destination_address, comments, status} = this.state

    this.setState({ card_id: card_id, pickup_address: pickup_address, pickup_date: pickup_date,
         pickup_time: pickup_time, destination_address: destination_address, comments: comments, status: status })

    var self = this;

    api.post(`/rides/add`, {
        'card_id': this.state.card_id, 
        'pickup_address': this.state.pickup_address, 
        'pickup_date': this.state.pickup_date,
        'pickup_time': this.state.pickup_time, 
        'destination_address': this.state.destination_address, 
        'comments': this.state.comments, 
        'status': this.state.status
    }).then(function(response) {
      console.log(response);
      self.setState({result: 'success'})
    }).catch(function (error) {
        console.log(pickup_date)
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
    const { card_id, pickup_address, pickup_date, pickup_time, 
        destination_address, comments, status } = this.state

    const statusOptions = [
      { key: 'zam',  text: 'Zamówione', value: 1 },
      { key: 'zr', text: 'Zrealizowane', value: 2 },
      { key: 'od', text: 'Odwołane', value: 3 },
      { key: 'nie', text: 'Nie stawił się na miejsce', value: 4 },
      { key: 'z  m', text: 'Zmiana', value: 5 }
    ]

    return (
      <div>
        <Form error warning success onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input required width={4} label="ID Karty" placeholder='00000000K' name='card_id' value={card_id} onChange={this.handleInputChange} />
            <Form.Input required width={4}
              label="Adres odbioru"
              placeholder='ul. Nazwa ulicy nr 4'
              name='pickup_address'
              value={pickup_address}
              onChange={this.handleInputChange}
            />
            <Form.Input required width={4}
            label="Data odbioru"
            placeholder='rok-miesiąc-dzien'
            name='pickup_date'
            value={pickup_date}
            onChange={this.handleInputChange}
          />
          <Form.Input required width={4}
          label="Godzina odbioru"
          placeholder='godzina:minuta:sekunda'
          name='pickup_time'
          value={pickup_time}
          onChange={this.handleInputChange}
        />
          </Form.Group>
          <Form.Group>
          <Form.Input required width={4}
          label="Adres docelowy"
          placeholder='U. miasta ul. Prusa 5'
          name='destination_address'
          value={destination_address}
          onChange={this.handleInputChange}
        />
          <Form.Input required width={8}
          label="Komentarz"
          placeholder='Wpisz swoje uwagi dotyczące tego przejazdu'
          name='comments'
          value={comments}
          onChange={this.handleInputChange}
        />
          <Form.Select required width={4}
          name='status' 
          value={status} 
          fluid label='Status' 
          options={statusOptions} 
          placeholder='status' 
          onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button label="Zapisz przejazd w bazie klikając poniższy przycisk:" content='Zapisz przejazd' />
          {this.showMessage()}
        </Form>
      </div>
    )
  }
}

export default FormExampleClearOnSubmit