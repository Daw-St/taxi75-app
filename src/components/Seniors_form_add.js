import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Mężczyzna', value: 1 },
  { key: 'k', text: 'Kobieta', value: 2 },
]

const FormExampleFieldControlId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-card-id'
        control={Input}
        label='ID Karty Seniora'
        placeholder='00000000K'
      />
      <Form.Field
        id='form-input-control-birth-yr'
        control={Input}
        label='Rok Urodzenia'
        placeholder='1900'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Płeć'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      <Form.Field
        id='form-input-control-phone-number'
        control={Input}
        label='Numer Telefonu'
        placeholder='111 222 333'
      />
      
    </Form.Group>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
)

export default FormExampleFieldControlId