import React from 'react';
import DatePicker from "react-datepicker";
import { Accordion, Icon, Form, Input, TextArea, Button, Checkbox, Select, Dropdown} from 'semantic-ui-react';
import { senior_search_card, senior_search_year, senior_search_number, senior_search_gender, senior_search_block, senior_search_is_asc_cdate_true, 
    senior_search_is_asc_cdate_false, senior_search_is_desc_cdate_true, senior_search_is_desc_cdate_false, senior_search_is_asc_cId_true, 
    senior_search_is_asc_cId_false, senior_search_is_desc_cId_true, senior_search_is_desc_cId_false, senior_search_is_asc_byr_true, 
    senior_search_is_asc_byr_false, senior_search_is_desc_byr_true, senior_search_is_desc_byr_false, senior_search_startDate, senior_search_endDate } from '../actions';
import "react-datepicker/dist/react-datepicker.css";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.store = this.props.store;
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

    handleChangeStart(date) {
        //this.setState({startDate: date})
        //this.props.Store.startDate = date;
        this.store.dispatch(senior_search_startDate(date))
    }
  
    handleChangeEnd(date) {
        //this.setState({endDate: date})
        //this.props.Store.endDate = date;
        this.store.dispatch(senior_search_endDate(date))
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
 
    toggleChange_is_asc_cdate = () => {
        //this.setState(prevState => ({is_asc_cdate: !prevState.is_asc_cdate }))
        const value = this.props.Store.is_asc_cdate;
        this.props.Store.is_asc_cdate = !value
    }

    toggleChange_is_desc_cdate = () => {
        //this.setState(prevState => ({is_desc_cdate: !prevState.is_desc_cdate }))
        const value = this.props.Store.is_desc_cdate;
        this.props.Store.is_desc_cdate = !value;
    }

    toggleChange_is_asc_cId = () => {
        //this.setState(prevState => ({is_asc_cId: !prevState.is_asc_cId }))
        const value = this.props.Store.is_asc_cId;
        this.props.Store.is_asc_cdate = !value;
    }

    toggleChange_is_desc_cId = () => {
        //this.setState(prevState => ({is_desc_cId: !prevState.is_desc_cId }))
        const value = this.props.Store.is_desc_cId;
        this.props.Store.is_desc_cId = !value;
    }

    toggleChange_is_asc_byr = () => {
        //this.setState(prevState => ({is_asc_byr: !prevState.is_asc_byr }))
        const value = this.props.Store.is_asc_byr;
        this.props.Store.is_asc_byr = !value;
    }

    toggleChange_is_desc_byr = () => {
        //this.setState(prevState => ({is_desc_byr: !prevState.is_desc_byr }))
        const value = this.props.Store.is_desc_byr;
        this.props.Store.is_desc_byr = !value;

    }

    handleGenderChange = (selectedOption) => {
        //this.setState({gender: selectedOption})
        this.props.Store.gender = selectedOption;
    }

    handleBlockChange = (event) => {
        //this.setState({block: event.target.value })
        this.props.Store.block = event.target.value;
    }

    handleSelectChange = (e, { name, value }) => { this.setState({ [name]: value })
    }

    handleSelectChangeGender = (e, { name, value }) => {
        //this.props.Store.gender = value;
        this.store.dispatch(senior_search_gender(value))
    }

    handleSelectChangeBlock = (e, { name, value }) => {
        //this.props.Store.gender = value;
        this.store.dispatch(senior_search_block(value))
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
                    onChange={(e) => { this.store.dispatch(senior_search_card(e.target.value)) }}
                    value={this.store.getState().seniorSearch_term}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Rok Urodzenia:'
                    placeholder='1901'
                    onChange={(e) => { this.store.dispatch(senior_search_year(e.target.value)) }}
                    value={this.store.getState().seniorSearch_year}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Numer Telefonu:'
                    placeholder='121121121'
                    onChange={(e) => { this.store.disatch(senior_search_number(e.target.value)) }}
                    value={this.store.getState().seniorSearch_number}
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
                        selected={this.store.getState().seniorSearch_startDate}
                        startDate={this.store.getState().seniorSearch_startDate}
                        endDate={this.store.getState().seniorSearch_endDate}
                        onChange={this.handleChangeStart}
                        value={this.store.getState().seniorSearch_startDate}
                />
                    <DatePicker 
                        selected={this.store.getState().seniorSearch_endDate}
                        startDate={this.store.getState().seniorSearch_startDate}
                        endDate={this.store.getState().seniorSearch_endDate}
                        onChange={this.handleChangeEnd}
                        value={this.store.getState().seniorSearch_endDate}
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