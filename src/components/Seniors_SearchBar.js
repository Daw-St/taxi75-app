import React from 'react';
import DatePicker from "react-datepicker";
import { Accordion, Icon, Form, Input, TextArea, Button, Checkbox, Select, Dropdown} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import "react-datepicker/dist/react-datepicker.css";

@inject('Store')
@observer
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleBlockChange = this.handleBlockChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('assasasasa')
        console.log(this.state)
        this.props.onSubmit({id_karty: this.state.term, year: this.state.year});
      }
    @action
    handleChangeStart(date) {
        //this.setState({startDate: date})
        this.props.Store.startDate = date;
    }
    @action
    handleChangeEnd(date) {
        //this.setState({endDate: date})
        this.props.Store.endDate = date;
    }

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    onFormClick = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.props.Store);
        this.props.onClick(this.state);
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }
    @action
    toggleChange_is_asc_cdate = () => {
        //this.setState(prevState => ({is_asc_cdate: !prevState.is_asc_cdate }))
        const value = this.props.Store.is_asc_cdate;
        this.props.Store.is_asc_cdate = !value
    }
    @action
    toggleChange_is_desc_cdate = () => {
        //this.setState(prevState => ({is_desc_cdate: !prevState.is_desc_cdate }))
        const value = this.props.Store.is_desc_cdate;
        this.props.Store.is_desc_cdate = !value;
    }
    @action
    toggleChange_is_asc_cId = () => {
        //this.setState(prevState => ({is_asc_cId: !prevState.is_asc_cId }))
        const value = this.props.Store.is_asc_cId;
        this.props.Store.is_asc_cdate = !value;
    }
    @action
    toggleChange_is_desc_cId = () => {
        //this.setState(prevState => ({is_desc_cId: !prevState.is_desc_cId }))
        const value = this.props.Store.is_desc_cId;
        this.props.Store.is_desc_cId = !value;
    }
    @action
    toggleChange_is_asc_byr = () => {
        //this.setState(prevState => ({is_asc_byr: !prevState.is_asc_byr }))
        const value = this.props.Store.is_asc_byr;
        this.props.Store.is_asc_byr = !value;
    }
    @action
    toggleChange_is_desc_byr = () => {
        //this.setState(prevState => ({is_desc_byr: !prevState.is_desc_byr }))
        const value = this.props.Store.is_desc_byr;
        this.props.Store.is_desc_byr = !value;

    }
    @action
    handleGenderChange = (selectedOption) => {
        //this.setState({gender: selectedOption})
        this.props.Store.gender = selectedOption;
    }
    @action
    handleBlockChange = (event) => {
        //this.setState({block: event.target.value })
        this.props.Store.block = event.target.value;
    }

    handleSelectChange = (e, { name, value }) => { this.setState({ [name]: value })
    }
    @action
    handleSelectChangeGender = (e, { name, value }) => {
        this.props.Store.block = value;
    }
    @action
    handleSelectChangeBlock = (e, { name, value }) => {
        this.props.Store.gender = value;
    }

    render() {
        const { activeIndex } = this.state

        const genderOptions = [
            { key: 'm', text: 'Mężczyzna', value: '1' },
            { key: 'k', text: 'Kobieta', value: '0' },
          ]

        const blockOptions = [
            { key: 't', text: 'Zablokowany', value: 1},
            { key: 'n', text: 'Nie zablokowany', value: 0}
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
                    onChange={(e) => { this.props.Store.term =  e.target.value }}
                    value={this.props.Store.term}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Rok Urodzenia:'
                    placeholder='1901'
                    onChange={(e) => { this.props.Store.year =  e.target.value }}
                    value={this.props.Store.year}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Numer Telefonu:'
                    placeholder='121121121'
                    onChange={(e) => { this.props.Store.number = e.target.value }}
                    value={this.props.Store.number}
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
                <Form.Group>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Wyszukaj po dacie utworzenia w zadanym przedziale czasowym:'
                    placeholder='2018/10/01'
                    >
                    <DatePicker 
                        selected={this.props.Store.startDate}
                        startDate={this.props.Store.startDate}
                        endDate={this.props.Store.endDate}
                        onChange={this.handleChangeStart}
                        value={this.props.Store.startDate}
                />
                    <DatePicker 
                        selected={this.props.Store.endDate}
                        startDate={this.props.Store.startDate}
                        endDate={this.props.Store.endDate}
                        onChange={this.handleChangeEnd}
                        value={this.props.Store.endDate}
                />
                </Form.Field>
                <Form.Field>
                    <label>Wyświetl tylko:</label>
                    <Dropdown
                        selection
                        name='block'
                        options={blockOptions}
                        placeholder='Zablokowanych lub nie'
                        onChange={this.handleSelectChangeBlock}
                />
                </Form.Field>
                </Form.Group>
                <Form.Group>
                <Form.Field control={Checkbox} label={<label>Data utowrzenia rosnąco</label>} 
                    checked={this.props.Store.is_asc_cdate}
                    onChange={this.toggleChange_is_asc_cdate}
                    value={this.props.Store.is_asc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>Data utworzenia malejąco</label>} 
                    checked={this.props.Store.is_desc_cdate}
                    onChange={this.toggleChange_is_desc_cdate}
                    value={this.props.Store.is_asc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>ID Karty rosnąco</label>} 
                    checked={this.props.Store.is_asc_cId}
                    onChange={this.toggleChange_is_asc_cId}
                    value={this.props.Store.is_asc_cId}
                />
                <Form.Field control={Checkbox} label={<label>ID Karty malejąco</label>} 
                    checked={this.props.Store.is_desc_cId}
                    onChange={this.toggleChange_is_desc_cId}
                    valye={this.props.Store.is_desc_cId}
                />
                <Form.Field control={Checkbox} label={<label>Data urodzenia rosnąco</label>} 
                    checked={this.props.Store.is_asc_byr}
                    onChange={this.toggleChange_is_asc_byr}
                    value={this.props.Store.is_asc_byr}
                />
                <Form.Field control={Checkbox} label={<label>Data urdzenia malejąco</label>} 
                    checked={this.props.Store.is_desc_byr}
                    onChange={this.toggleChange_is_desc_byr}
                    value={this.props.Store.is_desc_byr}
                />
                </Form.Group>
                <Form.Button content='Wyszukaj' type='submit' />
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

*/