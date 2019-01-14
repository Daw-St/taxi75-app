import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.png';
import './LoginForm.css';
const LoginForm = () => (
  <div className='login-form'>
    <Grid textAlign='center' className="grid-area" verticalAlign='middle'>
      <Grid.Column className="column">
        <Header as='h2' color='yellow' textAlign='center'>
          <Image src={logo} /> Zaloguj się do systemu
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='adres e-mail' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Haslo'
              type='password'
            />

            <Button color='yellow' fluid size='large'>
              Zaloguj
            </Button>
          </Segment>
        </Form>
        <Message>
          Nie masz konta? <a href='#'>Wyślij zapytanie</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm