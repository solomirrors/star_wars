import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './item-details.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";


const Record = ({item, field, label}) => {
    return(
        <React.Fragment>
            <li>
                <span>{label}</span>
                <span>{item[field]}</span>
            </li>
        </React.Fragment>
    );
}

export {
    Record
};

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
            this.updateItem();
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

        const {loading, item} = this.state;

        const {Url} = item

        const Content = () => {
            return(
                <React.Fragment>
                    <Col className='col-auto'>
                        <Image className='item-details-image' src={Url}/>
                    </Col>
                    <Col md={8}>
                        <Row className='row-cols-2'>
                            <ul>
                                {
                                    React.Children.map(this.props.children, (child) => {
                                        return React.cloneElement(child, {item});
                                    })
                                }
                            </ul>
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

