import React from 'react';
import RecordRow from './Seniors_Record_Row';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './RecordList.css';
const TableRides = (props) => {
    const records = props.records;
    const listOfRecords = records.map((record) => {
        return <RecordRow key={record.id} record={record}/>
    });

    return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID Karty</Table.HeaderCell>
        <Table.HeaderCell>Płeć</Table.HeaderCell>
        <Table.HeaderCell>Rok Urodzenia</Table.HeaderCell>
        <Table.HeaderCell>Numer Telefonu</Table.HeaderCell>
        <Table.HeaderCell>Data Utworzenia</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body className="record-list">{listOfRecords}</Table.Body>
    </Table>
    );
}

export default TableRides;