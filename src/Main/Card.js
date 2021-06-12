import React, { Component } from 'react'
import './Card.css';
import {Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import image from '../asset/card-image.jpg';
export default class LoginButton extends Component {
    render() {
        return (
            <div>
                <Card className="Card">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}