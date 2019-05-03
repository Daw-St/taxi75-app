import React from 'react';
import Moment from 'react-moment';
import {Table} from 'semantic-ui-react';

class RecordRow extends React.Component {
    render() {
        const { card_id, birth_year, blocked, creation_date, phone_number, sex } = this.props.record;
        let showSex;
        if(sex == 1){
            showSex = 'Mężczyzna';
        } else {
            showSex = 'Kobieta';
        }
        console.log(creation_date)
        return (
            <Table.Row>
                <Table.Cell>{card_id}</Table.Cell>
                <Table.Cell>{showSex}</Table.Cell>
                <Table.Cell>{birth_year}</Table.Cell>
                <Table.Cell>{phone_number}</Table.Cell>
                <Table.Cell><Moment format="YYYY/MM/DD">{creation_date}</Moment></Table.Cell>
            </Table.Row>
        );
    }

}

export default RecordRow;
