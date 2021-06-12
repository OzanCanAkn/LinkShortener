import React, { Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import alertify from 'alertifyjs';

//import alertify from 'alertifyjs';
export default class Login extends Component {
    state = { email: '', password: '' }
    onChangeHandler = (event) => {
        let userName = event.target.name;
        let value = event.target.value;
        this.setState({
            [userName]: value
        })
    }
    onSubmitHandler = (event) => {
        let value = localStorage.getItem(this.state.email)
        if (value === null) {
            event.preventDefault();
            alertify.error("Your e-mail address is wrong")
        } else {
            const pass = value.split("*separator*",1);
            if(pass == (this.state.password)) {
                alertify.success('You are logged in successfully');
                localStorage.setItem("Logged", "True")
            }else {
                alertify.error('Your password is wrong');
            }
        }
    }
    render() {
        return (
            <Container className="Login">
                <Col>
                    <Row>
                        <Form onSubmit={this.onSubmitHandler}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input onChange={this.onChangeHandler} type="email" name="email" id="Email" placeholder="Your Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input onChange={this.onChangeHandler} type="password" name="password" id="Password" placeholder="Your Password" />
                            </FormGroup>
                            <Button color="warning">Login</Button>
                        </Form>
                    </Row>
                </Col>
            </Container>
        );
    }
}
