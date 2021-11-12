import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component{
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    };

    renderItems(arr) {
        if (arr){
            return arr.map(({Id, Name}) => {
                return (

                    <li
                        className='item-list-item'
                        key={Id}
                        onClick={() => this.props.onItemSelected(Id)}>
                    {Name}
                </li>

                );
            });
        };
    };

    render() {
        const { peopleList } = this.state;
        const items = this.renderItems(peopleList);

        if (!peopleList) {
            return <Spinner/>
        }

        return(
            <Container fluid className='ps-4 pt-1 px-4'>
                <ul className='item-list-bar p-3 me-2 ms-2'>
                    {items}
                </ul>
            </Container>
        )
    }
}