import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends Component{
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
                    <PlanetList onItemSelected = {this.onItemSelected}/>
                </Col>
                <Col>
                    <PlanetDetails itemId = {selectedItem}/>
                </Col>
            </Row>
        )
    }
}