import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipsPage extends Component{
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {
        const {selectedItem} = this.state;

        return(
            <Row>
                <Col>
                    <StarshipList onItemSelected = {this.onItemSelected}/>
                </Col>
                <Col>
                    <StarshipDetails itemId = {selectedItem}/>
                </Col>
            </Row>
        )
    }
}