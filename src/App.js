import React, {Component} from 'react'
import './App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { InstagramLoginButton} from 'react-social-login-buttons';

class App extends Component {
  render(){
  return (
    <div className='App'>
    <Form className="login-form">
      <h1 className='text-center'>LOGIN PAGE</h1>
      <h2 className='text-center'>Welcome...</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type='email' placeholder='Email'/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type='password' placeholder='Password'/>
      </FormGroup>
      <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
        Log In
      </Button>
    </div>
      <div className='text-center pt-3'>
        Or continue with your social account
      </div>
      <InstagramLoginButton className='mt-3 mb-3'/>
    <div className='text-center'>
        <a href='/sign-up'>Sign up</a>
        <span className='p-2'>|</span>
        <a href='/sign-up'>Forgot Password</a>
    </div>
       </Form>
       </div>
  );
  }
}

export default App;
