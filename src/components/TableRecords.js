import React from 'react'
import {
  Container,
  Header,
  Image,
  Table,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const TableRecords = () => (
  <div>

    <Header as='h3' content='Wyniki wyszukiwania:' style={style.h3} textAlign='center' />
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Karta Seniora</Table.HeaderCell>
            <Table.HeaderCell>Informacja</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Header.Content>
                  00000001K
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Header.Content>
                00000002K
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Header.Content>
                00000003K
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Header.Content>
                00000004K
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  </div>
)

export default TableRecords;