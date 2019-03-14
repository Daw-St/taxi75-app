import React from 'react';
import  DatePicker  from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import { Accordion, Icon, Form, Input, TextArea, Button, Checkbox, Select, Dropdown} from 'semantic-ui-react';
import { senior_search_card, senior_search_year, senior_search_number, senior_search_gender, senior_search_block, senior_search_is_asc_cdate_true, 
    senior_search_is_asc_cdate_false, senior_search_is_desc_cdate_true, senior_search_is_desc_cdate_false, senior_search_is_asc_cId_true, 
    senior_search_is_asc_cId_false, senior_search_is_desc_cId_true, senior_search_is_desc_cId_false, senior_search_is_asc_byr_true, 
    senior_search_is_asc_byr_false, senior_search_is_desc_byr_true, senior_search_is_desc_byr_false, senior_search_startDate, senior_search_endDate, senior_search } from '../actions';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import store from '../store';
import Seniors  from '../containers/Seniors';
//import pl from 'date-fns/locale/pl';
//registerLocale('pl', pl);



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.seniorSearch_startDate + 'pokaz')
        this.state = {
            activeIndex: 0,
            is_asc_cdate: this.props.seniorSearch_is_asc_cdate,
            is_desc_cdate: this.props.seniorSearch_is_desc_cdate,
            is_asc_cId: this.props.seniorSearch_is_asc_cId,
            is_desc_cId: this.props.seniorSearch_is_desc_cId,
            is_asc_byr: this.props.seniorSearch_is_asc_byr,
            is_desc_byr: this.props.seniorSearch_is_desc_byr,
            card_id: this.props.seniorSearch_term,
            birth_year: this.props.seniorSearch_year,
            phone_number: this.props.seniorSearch_number,
            sex: this.props.seniorSearch_gender,
            blocked: this.props.seniorSearch_block,
            date_from: this.props.seniorSearch_startDate,
            date_to: this.props.seniorSearch_endDate
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleBlockChange = this.handleBlockChange.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        console.log(this.state)
        const data = {
            term: this.state.card_id,
            year: this.state.birth_year,
            number: this.state.phone_number,
            gender: this.state.sex,
            block: this.state.blocked,
            is_asc_cdate: this.state.is_asc_cdate,
            is_desc_cdate: this.state.is_desc_cdate,
            is_asc_cId: this.state.is_asc_cId,
            is_desc_cId: this.state.is_desc_cId,
            is_asc_byr: this.state.is_asc_byr,
            is_desc_byr: this.state.is_desc_byr,
            startDate: this.state.date_from,
            endDate: this.state.date_to
        }
        store.dispatch(senior_search(data), )
        new Seniors().getValid()
      }

    handleChangeStart(date) {
        //this.setState({startDate: date})
        //this.props.Store.startDate = date;
        //this.store.dispatch(senior_search_startDate(date))
        this.setState({date_from: date})
    }
  
    handleChangeEnd(date) {
        //this.setState({endDate: date})
        //this.props.Store.endDate = date;
        //this.store.dispatch(senior_search_endDate(date))
        this.setState({date_to: date})
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
        let change = this.state.is_asc_cdate;
        change? this.setState({is_asc_cdate: false}, () => this.props.senior_search_is_asc_cdate_false()):
        this.setState({is_asc_cdate: true}, () => this.props.senior_search_is_asc_cdate_true())
        console.log(this.props.seniorSearch_is_asc_cdate)
        /*
        console.log(this.state.is_asc_cdate)
        this.setState(prevState => ({is_asc_cdate: !prevState.is_asc_cdate }, () => {
            console.log(this.state.is_asc_cdate)
            const value = this.state.is_asc_cdate;
            value ? this.props.senior_search_is_asc_cdate_true():this.props.senior_search_is_asc_cdate_false();
        }))
        */
        /*
       this.setState({is_asc_cdate: true})
       this.props.senior_search_is_asc_cdate_true()*/
    }

    toggleChange_is_desc_cdate = () => {
        let change = this.state.is_desc_cdate;
        change? this.setState({is_desc_cdate: false}, () => this.props.senior_search_is_desc_cdate_false()):
        this.setState({is_desc_cdate: true}, () => this.props.senior_search_is_desc_cdate_true())
        console.log(this.props.seniorSearch_is_asc_cdate)
    }

    toggleChange_is_asc_cId = () => {
        let change = this.state.is_asc_cId;
        change? this.setState({is_asc_cId: false}, () => this.props.senior_search_is_asc_cId_false()):
        this.setState({is_asc_cId: true}, () => this.props.senior_search_is_asc_cId_true())
        console.log(this.props.seniorSearch_is_asc_cId)
    }

    toggleChange_is_desc_cId = () => {
        let change = this.state.is_desc_cId;
        change? this.setState({is_desc_cId: false}, () => this.props.senior_search_is_desc_cId_false()):
        this.setState({is_desc_cId: true}, () => this.props.senior_search_is_desc_cId_true())
    }

    toggleChange_is_asc_byr = () => {
        let change = this.state.is_asc_byr;
        change? this.setState({is_asc_byr: false}, () => this.props.senior_search_is_asc_byr_false()):
        this.setState({is_asc_byr: true}, () => this.props.senior_search_is_asc_byr_true())
    }

    toggleChange_is_desc_byr = () => {
        let change = this.state.is_desc_byr;
        change? this.setState({is_desc_byr: false}, () => this.props.senior_search_is_desc_byr_false()):
        this.setState({is_desc_byr: true}, () => this.props.senior_search_is_desc_byr_true())
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
        this.props.senior_search_gender(value)
    }

    handleSelectChangeBlock = (e, { name, value }) => {
        //this.props.Store.gender = value;
        this.props.senior_search_block(value)
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
                    onChange = {(e) => {this.setState({card_id: e.target.value})}}
                    value={this.state.card_id}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Rok Urodzenia:'
                    placeholder='1901'
                    onChange = {(e) => {this.setState({birth_year: e.target.value})}}
                    value={this.state.birth_year}
                />
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Numer Telefonu:'
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
                <Form.Group>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Wyszukaj po dacie utworzenia w zadanym przedziale czasowym:'
                    placeholder='2018/10/01'
                    >
                    <DatePicker 
                        selected={this.state.date_from}
                        startDate={this.state.date_from}
                        endDate={this.state.date_to}
                        onChange={this.handleChangeStart}
                        value={this.state.date_from}
                        dateFormat="d/MM/YYYY"
                        locale="pl"
                />
                    <DatePicker 
                        selected={this.state.date_to}
                        startDate={this.state.date_from}
                        endDate={this.state.date_to}
                        onChange={this.handleChangeEnd}
                        value={this.state.date_to}
                        dateFormat="d/MM/YYYY"
                        locale="pl"
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
                    checked={this.props.is_asc_cdate}
                    onChange={this.toggleChange_is_asc_cdate}
                    value={this.props.is_asc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>Data utworzenia malejąco</label>} 
                    checked={this.props.is_desc_cdate}
                    onChange={this.toggleChange_is_desc_cdate}
                    value={this.props.is_asc_cdate}
                />
                <Form.Field control={Checkbox} label={<label>ID Karty rosnąco</label>} 
                    checked={this.props.is_asc_cId}
                    onChange={this.toggleChange_is_asc_cId}
                    value={this.props.is_asc_cId}
                />
                <Form.Field control={Checkbox} label={<label>ID Karty malejąco</label>} 
                    checked={this.props.is_desc_cId}
                    onChange={this.toggleChange_is_desc_cId}
                    valye={this.props.is_desc_cId}
                />
                <Form.Field control={Checkbox} label={<label>Data urodzenia rosnąco</label>} 
                    checked={this.props.is_asc_byr}
                    onChange={this.toggleChange_is_asc_byr}
                    value={this.props.is_asc_byr}
                />
                <Form.Field control={Checkbox} label={<label>Data urdzenia malejąco</label>} 
                    checked={this.props.is_desc_byr}
                    onChange={this.toggleChange_is_desc_byr}
                    value={this.props.is_desc_byr}
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
        seniorSearch_term: state.seniorSearch_term,
        seniorSearch_year: state.seniorSearch_year,
        seniorSearch_number: state.seniorSearch_number,
        seniorSearch_gender: state.seniorSearch_gender,
        seniorSearch_block: state.seniorSearch_block,
        seniorSearch_is_asc_cdate: state.seniorSearch_is_asc_cdate,
        seniorSearch_is_desc_cdate: state.seniorSearch_is_desc_cdate,
        seniorSearch_is_asc_cId: state.seniorSearch_is_asc_cId,
        seniorSearch_is_desc_cId: state.seniorSearch_is_desc_cId,
        seniorSearch_is_asc_byr: state.seniorSearch_is_asc_byr,
        seniorSearch_is_desc_byr: state.seniorSearch_is_desc_byr,
        seniorSearch_startDate: state.seniorSearch_startDate,
        seniorSearch_endDate: state.seniorSearch_endDate,
    }
}

const mapDispatchToProps = {senior_search, senior_search_card, senior_search_year, senior_search_number, senior_search_gender, senior_search_block, senior_search_is_asc_cdate_true, 
    senior_search_is_asc_cdate_false, senior_search_is_desc_cdate_true, senior_search_is_desc_cdate_false, senior_search_is_asc_cId_true, 
    senior_search_is_asc_cId_false, senior_search_is_desc_cId_true, senior_search_is_desc_cId_false, senior_search_is_asc_byr_true, 
    senior_search_is_asc_byr_false, senior_search_is_desc_byr_true, senior_search_is_desc_byr_false, senior_search_startDate, senior_search_endDate }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

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