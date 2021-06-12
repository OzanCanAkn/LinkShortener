
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Logo from '../Logo'
import Footer from '../Footer'
import './LoginPage.css';
import Login from './Login'
export default class LoginPage extends Component {
    render() {
        return (
            <Col>
                <Col className="Login-Container">
                    <Row className="Login-Header">
                        <Logo></Logo>
                    </Row>
                    <Row md={{ size: 4, offset: 4 }}>
                        <Col md={{ size: 4, offset: 4 }} className="Login-Info">
                            <Login></Login>
                        </Col>
                    </Row>
                </Col>
                <Row className="Login-Footer">
                    <Footer>
                    </Footer>
                </Row>
            </Col>
        )
    }
}