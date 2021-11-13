import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './item-details.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemDetails extends Component{
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId){
            this.updateitem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if (!itemId){
            return;
        }
        getData(itemId)
            .then((item) => {
            this.setState({item})
        });

        this.setState({loading : false})
    }

    render() {
        if (!this.state.item){
            return (
                <span>Select a item from a list</span>
            )
        }

        const {Id, Name, Url, personHeight, personMass, personHairColor} = this.state.item

        const {loading} = this.state;

        const Content = () => {
            return(
                <React.Fragment>
                    <Col className='col-auto'>
                        <Image className='item-details-image' src={Url}/>
                    </Col>
                    <Col md={8}>
                        <Row className='row-cols-2'>
                            <Col>{Name}</Col>
                            <Col>{personHeight}</Col>
                            <Col>{personMass}</Col>
                            <Col>{personHairColor}</Col>
                        </Row>
                    </Col>
                </React.Fragment>
            )
        }

        const spinner = loading ? <Spinner/> : null
        const complete = !loading ? <Content/> : null

        return(
            <Container fluid>
                <Row className='header-bar p-4 row-cols-2'>
                    {spinner}{complete}
                </Row>
            </Container>
        )
    }
}