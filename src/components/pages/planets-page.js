import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {PlanetDetails, PlanetList} from "../sw-components";
import {Outlet} from "react-router-dom";

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
                    <Outlet/>
                </Col>
            </Row>
        )
    }
}