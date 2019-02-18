import React from 'react';
import DatePicker from "react-datepicker";
import { Accordion, Icon, Form, Input, TextArea, Button, Select, Checkbox } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            year: '',
            number: '',
            gender: '',
            block: '',
            asc_cdate: '',
            desc_cdate: '',
            asc_cId: '',
            desc_cId: '',
            asc_byr: '',
            desc_byr: '',
            startDate: new Date(),
            activeIndex: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({startDate: date})
    }

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }
    render() {
        const { activeIndex } = this.state

        const genderOptions = [
            { key: 'm', text: 'Mężczyzna', value: 'M' },
            { key: 'k', text: 'Kobieta', value: 'K' },
          ]

        const blockOptions = [
            { key: 't', text: 'Zablokowany', value: 1},
            { key: 'n', text: 'Nie zablokowany', value: 0}
        ]


        return (
            <div className="ui segment">
            <form onSubmit={(event) => this.onFormSubmit(event)} className="ui from">
            <div className="field">
            <label>Wyszukaj: </label>
            <input 
                type="text" 
                value={this.state.term} 
                onChange={(e) => this.setState({ term: e.target.value })} />
            </div>   
            <div className="field">
            <label>Wybierz date utworzenia</label>
            <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
            </div>
            </form>

            <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='ID Karty'
                    placeholder='00000000K'
                    onChange={(e) => this.setState({ term: e.target.value })}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Rok Urodzenia'
                    placeholder='1901'
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Numer Telefonu'
                    placeholder='121121121'
                />
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'Płeć', htmlFor: 'form-select-control-gender' }}
                    placeholder='Wybierz płeć'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Data utworzenia'
                    placeholder='2018/10/01'
                    >
                    <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                />
                </Form.Field>
                </Form.Group>
                <Form.Group>
                <Form.Field
                    control={Select}
                    options={blockOptions}
                    label={{ children: 'Wyświetl tylko', htmlFor: 'form-select-block-gender' }}
                    placeholder='Wybierz'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                />
                </Form.Group>
                <Form.Group>
                <Form.Field control={Checkbox} label={<label>Data utowrzenia rosnąco</label>} />
                <Form.Field control={Checkbox} label={<label>Data utworzenia malejąco</label>} />
                <Form.Field control={Checkbox} label={<label>ID Karty rosnąco</label>} />
                <Form.Field control={Checkbox} label={<label>ID Karty malejąco</label>} />
                <Form.Field control={Checkbox} label={<label>Data urodzenia rosnąco</label>} />
                <Form.Field control={Checkbox} label={<label>Data urdzenia malejąco</label>} />
                </Form.Group>
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Wyszukaj'
                />
            </Form>
            </div>
        );
    }
}
 
export default SearchBar;

/*
 <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />Wyszukaj szybko po ID Karty
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <div className="field">
                            <label>Wyszukaj: </label>
                            <input 
                                type="text" 
                                value={this.state.term} 
                                onChange={(e) => this.setState({ term: e.target.value })} />
                        </div>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />Wyszukiwanie zaawansowane
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <div className="field">
                            <label>Wybierz date utworzenia</label>
                            <DatePicker 
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Accordion.Content>
                </Accordion>
*/