import React from 'react';
import Moment from 'react-moment';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
class RecordRow extends React.Component {
    render() {
        const { id, user_id, type, object_id, description, creating_date, ip_address } = this.props.record;
        
        let showType;
        if(type == 1){
            showType = 'Dodanie';
        } else if(type == 2) {
            showType = 'Edycja';
        } else {
            showType = 'brak';
        }

        let whereFind;
        if(description == 'ride') {
            whereFind = 'Tabela Przejazdy'
        } else if(description == 'senior') {
            whereFind = 'Tabela Seniorzy'
        }
        else {
            whereFind = 'brak'
        }

        return (
            <Table.Row>
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{user_id}</Table.Cell>
                <Table.Cell>{showType}</Table.Cell>
                <Table.Cell>{object_id}</Table.Cell>
                <Table.Cell>{whereFind}</Table.Cell>
                <Table.Cell><Moment format="YYYY/MM/MM HH:MM:SS">{creating_date}</Moment></Table.Cell>
                <Table.Cell>{ip_address}</Table.Cell>
            </Table.Row>
        );
    }

}

export default RecordRow;
