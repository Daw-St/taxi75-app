import React from 'react';
import Moment from 'react-moment';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
class RecordRow extends React.Component {
    render() {
        const { card_id, phone_number, id, pickup_address, pickup_date, pickup_time, destination_address, comments, status, creation_date } = this.props.record;
        
        let showStatus;
        if(status == 1){
            showStatus = 'Zamówione';
        } else if(status == 2) {
            showStatus = 'Zrealizowane';
        } else if(status == 3) {
            showStatus = 'Odwołane';
        } else if(status == 4) {
            showStatus = 'Nie stawił się na miejsce';
        } else if(status == 5) {
            showStatus = 'Zmiana';
        } else {
            showStatus = 'brak';
        }

        return (
            <Table.Row>
                <Table.Cell>{card_id}</Table.Cell>
                <Table.Cell>{phone_number}</Table.Cell>
                <Table.Cell>{pickup_address}</Table.Cell>
                <Table.Cell><Moment format="YYYY/MM/MM">{pickup_date}</Moment></Table.Cell>
                <Table.Cell>{pickup_time}</Table.Cell>
                <Table.Cell>{destination_address}</Table.Cell>
                <Table.Cell>{comments}</Table.Cell>
                <Table.Cell>{showStatus}</Table.Cell>
                <Table.Cell><Moment format="YYYY/MM/MM">{creation_date}</Moment></Table.Cell>
            </Table.Row>
        );
    }

}

export default RecordRow;
