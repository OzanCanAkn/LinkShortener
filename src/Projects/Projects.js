import React, { Component } from 'react';
import './Projects.css';
import Logo from '../Logo'
import { Row, Col } from 'reactstrap';
import LinkConverter from './LinkConverter'
export default class Projects extends Component {
    Logout = () => {
        localStorage["Logged"] = "false";
    }
    render() {

        return (
            <Row>
                <Col className="Menu">
                    <Row><Logo></Logo></Row>
                    <Row xs="2" className="Menu-Content-1">Projects</Row>
                    <Row className="Menu-Content">
                        <a className="a" href="DashBoard">DashBoard</a>
                    </Row>
                    <Row className="Menu-Content">Menu Item</Row>
                    <Row className="Menu-Content">Menu Item</Row>
                    <Row className="Menu-Content">Menu Item</Row>
                </Col>
                <Col xs="2"></Col>
                <Col xs="8">
                    <Row className="Converter-Box">
                        <LinkConverter></LinkConverter>
                    </Row>
                </Col>
            </Row>
        );
    }
}

