import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './person-details.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component{
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId){
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) =>{
                this.setState({person});
            });
        this.setState({loading : false})
    }

    render() {
        if (!this.state.person){
            return (
                <span>Select a person from a list</span>
            )
        }

        const {Id, Name, Url, personHeight, personMass, personHairColor} = this.state.person

        const {loading} = this.state;

        const Content = () => {
            return(
                <React.Fragment>
                    <Col className='col-auto'>
                        <Image className='person-details-image' src={Url}/>
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