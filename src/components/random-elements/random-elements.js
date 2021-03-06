import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import {Col, Container, Image, Row} from "react-bootstrap";
import Spinner from "../spinner";
import './random-elements.css'
import PropTypes from "prop-types";

export default class randomElements extends Component {
    static defaultProps = {
        updateInterval: 8000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService();

    state = {
        randomData: {},
        loading: true,
        error: false
    }

    componentDidMount(props) {
        const { updateInterval } = this.props
        this.timeout =
            setTimeout(this.onUpgradeRandomElements, 500, this.props.create, this.props.randomMin, this.props.randomMax);
        this.interval
            = setInterval(this.onUpgradeRandomElements, updateInterval, this.props.create, this.props.randomMin, this.props.randomMax);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
    }

    onGetRandomElementsLoaded = (elements) => {
        this.setState({randomData: elements, loading: false});
    }

    onSetRandomElementsValue = (min, max) =>{
        return (Math.floor(Math.random() * (max - min) + min));
    }

    onGetRandomElementsError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onUpgradeRandomElements = (elements, min, max) => {
        this.swapiService
            .getSelectDataToDisplay(elements,
            this.onSetRandomElementsValue(min, max))
            .then(this.onGetRandomElementsLoaded)
            .catch(this.onGetRandomElementsError);
    }

    render() {
        const {randomData, loading, error} = this.state;
        const data = Object.values(randomData);

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <RandomElementsBuilder data = {data}/> : null


        return(
            <Container fluid className='p-4 pt-0'>
                <Row className='random-elements-bar m-2'>
                    {errorMessage}
                    {spinner}
                    {content}
                </Row>
            </Container>
        );
    };
};



const ErrorIndicator = () => {
    return(
        <div>
            <h6 className='error-message'>This object has gone to the dark side and is currently unavailable to our radars, we are very sorry :(</h6>
            <h6 className='error-message'>We will try to return it as soon as possible!</h6>
        </div>
    );
};

const RandomElementsBuilder = ({data}) => {
    const [
        ,name, url,
        desc_1, value_1,
        desc_2, value_2,
        desc_3, value_3,
        desc_4, value_4,
        desc_5, value_5,
        desc_6, value_6
    ] = data

    const describe = (d_1, v_1, d_2, v_2) => {
        return(
            <Row className='row-cols-2'>
                <Col className='p-0'>
                    <h4 className='random-elements-description'>{d_1}: {v_1}</h4>
                </Col>
                <Col className='p-0'>
                    <h4 className='random-elements-description'>{d_2}: {v_2}</h4>
                </Col>
            </Row>
        )
    }

    return(
        <React.Fragment>
            <Col className='random-elements-bar-image p-0'>
                <Image className='random-elements-image' src={url}
                       onError={(e) => e.target.src = 'https://cdn.dribbble.com/users/841405/screenshots/2309412/6.png'}/>
            </Col>
            <Col className='p-0' md={8}>
                <Col className='random-elements-bar-name p-0' md={12}>
                    <h1 className='random-elements-name'>{name}</h1>
                </Col>
                <Col className='p-0' md={12}>
                    {describe(desc_1, value_1, desc_2, value_2)}
                    {describe(desc_3, value_3, desc_4, value_4)}
                    {describe(desc_5, value_5, desc_6, value_6)}
                </Col>
            </Col>
        </React.Fragment>
    )
};
