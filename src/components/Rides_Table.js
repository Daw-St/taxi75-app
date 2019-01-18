import React from 'react';
import RecordRow from './Rides_Record_Row';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './RecordList.css';
const TableSeniors = (props) => {
    const records = props.records;
    const listOfRecords = records.map((record) => {
        return <RecordRow key={record.id} record={record}/>
    });

    return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID Karty</Table.HeaderCell>
        <Table.HeaderCell>Numer Telefonu</Table.HeaderCell>
        <Table.HeaderCell>Miejsce Odbioru</Table.HeaderCell>
        <Table.HeaderCell>Data Odbioru</Table.HeaderCell>
        <Table.HeaderCell>Godzina Odbioru</Table.HeaderCell>
        <Table.HeaderCell>Miejsce Docelowe</Table.HeaderCell>
        <Table.HeaderCell>Uwagi</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Data Rejestracji Zgoszenia</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body className="record-list">{listOfRecords}</Table.Body>
    </Table>
    );
}

export default TableSeniors;