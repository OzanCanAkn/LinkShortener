import React, { Component } from 'react'
import './Main.css';
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import LoginButton from './LoginButton';
import Signup from './Signup'
import Card from './Card'
import Footer from '../Footer';
import "../Footer.css"
import Logo from "../Logo"
export default class MainPage extends Component {
    render() {
        return (
            <Row>
                <Col >
                    <Row className='App-header'>
                        <Col xs="1" className='App-logo'>
                            <Logo></Logo>
                        </Col>
                        <Col xs="2" md="1">
                            <LoginButton></LoginButton>
                        </Col>
                    </Row>
                    <Row className="Card-Holder">
                        <Col>
                            <Card></Card>
                        </Col>
                        <Col>
                            <Card></Card>
                        </Col>
                        <Col>
                            <Card></Card>
                        </Col>
                    </Row>
                    <Row className="Signup-part">
                        <Col xs="5">
                            <Signup></Signup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 4, offset: 4 }} className="Contact-us">
                            <Jumbotron>
                                <h1 className="display-3">Contact Us</h1>
                                <p className="lead">We are here to help.Contact us if you have a trouble about App.</p>
                                <hr className="my-2" />
                                <p>Use the below link to contact us.</p>
                                <p className="lead">
                                    <Button color="primary">GET IN TOUCH</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row className='App-footer'>
                        <Footer></Footer>
                    </Row>
                </Col>
            </Row>
        )
    }
}