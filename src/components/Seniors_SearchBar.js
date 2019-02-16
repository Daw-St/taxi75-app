import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            startDate: new Date()
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
    render() {
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
            </div>
        );
    }
}
 
export default SearchBar;