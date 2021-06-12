import React, { Component } from 'react'
import {  ListGroup, ListGroupItem } from 'reactstrap'
export default class FilterList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>{this.props.title}</ListGroupItem>
                    <ListGroupItem>Pozisyon</ListGroupItem>
                    <ListGroupItem>Sağlık</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}