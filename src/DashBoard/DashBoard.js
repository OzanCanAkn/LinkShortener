import React, { Component } from 'react';
import './DashBoard.css';
import Logo from '../Logo'
import { Row, Col } from 'reactstrap';
export default class DashBoard extends Component {

    render() {
        return (
            <Row>
                <Col className="Menu">
                    <Row><Logo></Logo></Row>
                    <Row className="Menu-Content-1">DashBoard</Row>
                    <Row className="Menu-Content">
                        <a className="a" href="Projects">Projects</a>
                    </Row>
                    <Row className="Menu-Content">Menu Item</Row>
                    <Row className="Menu-Content">Menu Item</Row>
                    <Row className="Menu-Content">Menu Item</Row>
                </Col>
                <Col xs="10"></Col>
            </Row>
        );
    }
}

