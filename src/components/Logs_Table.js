import React from 'react';
import RecordRow from './Logs_Record_Row';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './RecordList.css';
const TableLogs = (props) => {
    const records = props.records;
    const listOfRecords = records.map((record) => {
        return <RecordRow key={record.id} record={record}/>
    });

    return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>ID Użytkownika</Table.HeaderCell>
        <Table.HeaderCell>Typ</Table.HeaderCell>
        <Table.HeaderCell>ID Obiektu</Table.HeaderCell>
        <Table.HeaderCell>Zmiana zasza w:</Table.HeaderCell>
        <Table.HeaderCell>Data Akcji</Table.HeaderCell>
        <Table.HeaderCell>Adres IP</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body className="record-list">{listOfRecords}</Table.Body>
    </Table>
    );
}

export default TableLogs;