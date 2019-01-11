import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.png';
const LoginForm = () => (
  <div className='login-form'>
    {/*comment */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
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
          Nie masz konta? <a href='#'>Zarejestruj się</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm