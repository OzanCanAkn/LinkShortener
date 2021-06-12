import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <Row className="Footer">
                <Col xs="4">
                    <Row><h2>Contacts</h2></Row>
                    <Row>
                        <h6>
                            Mobile: 5058749789
                        </h6>
                        <h6>
                            Address: Xys Street. No=123
                        </h6>
                    </Row>
                </Col>
                <Col className="Social" xs="4">
                    <Row style={{alignItems:"center"}}>
                        <h2>Social Media Accounts</h2>
                    </Row>
                    <Row className="Social-icons">
                        <Col>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}