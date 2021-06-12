import React, { Component } from 'react';
import './Projects.css';
import { Row, Button, FormGroup, Form, Input, Label } from 'reactstrap';
import alertify from 'alertifyjs';
export default class LinkConverter extends Component {
  state = { link: '', items:'Url:'}
  onChangeHandler = (event) => {
    let compName = event.target.name;
    let value = event.target.value;
    this.setState({
      [compName]: value
    })
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      items:''
    });
    fetch("https://cleanuri.com/api/v1/shorten", {
      body: "url="+encodeURIComponent(this.state.link),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items:'Your shortened link is '+ result.result_url
        }
        );
        alertify.alert("Your link is shortened",result.result_url)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    return (
      <Row>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label>{this.state.items}</Label>
            <Input onChange={this.onChangeHandler} type="link" name="link" id="Link" placeholder="Your Email" />
          </FormGroup>
          <Button color="warning">Convert</Button>
        </Form>
      </Row>
    );
  }
}

