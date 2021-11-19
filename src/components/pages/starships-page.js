import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {StarshipDetails, StarshipList} from "../sw-components";
import {BrowserRouter, Routes, Route, useParams, Outlet, Link, useNavigate} from "react-router-dom";


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
            <React.Fragment>
                <Row>
                    <Col>
                        <StarshipList onItemSelected = {this.onItemSelected}/>
                    </Col>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}