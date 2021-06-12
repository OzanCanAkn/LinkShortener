import React, { Component } from 'react';
import './Signup.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
export default class Signup extends Component {
    state ={name:'' , email:'' , password:'', organization:''}
    onChangeHandler=(event)=>{
        let userName=event.target.name;
        let value=event.target.value;
        this.setState({
            [userName]:value
        })
    }
    onSubmitHandler = (event) => {
        if (localStorage.getItem(this.state.email) === null) {
            localStorage.setItem(this.state.email,this.state.password+"*separator*"+this.state.name+"*separator*"+this.state.organization);
            alertify.success('You are signed up successfully');
            setTimeout(() => {
            }, 3000)
        }else{
            event.preventDefault();
            alertify.error("this e-mail used before")
            setTimeout(() => {
            }, 3000)
        } 
        
    }
    render() {
        return (
            <Col>
                <Row className="RegisterNow-Row">
                    Register Now For Free
            </Row>
                <Row>
                    <Form id="SignUpForm" onSubmit={this.onSubmitHandler}>
                        <FormGroup>
                            <Label for="Name">Name*</Label>
                            <Input onChange={this.onChangeHandler} type="name" name="name" id="Name" placeholder="Your Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">Email*</Label>
                            <Input onChange={this.onChangeHandler} type="email" name="email" id="Email" placeholder="Your Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password*</Label>
                            <Input onChange={this.onChangeHandler} type="password" name="password" id="Password" placeholder="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Organization">Organization (optional)</Label>
                            <Input onChange={this.onChangeHandler} type="organization" name="organization" id="Organization" placeholder="Company Name" />
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
                </Row>
            </Col>
        );
    }
}

