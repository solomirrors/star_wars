import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        dataList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((dataList) => {
                this.setState({
                    dataList
                });
            });
    };

    renderItemList(arr) {
        if (arr){
            return arr.map(({Id, Name}) => {
                return(
                    <li
                        key={Id}
                        onClick={() => this.props.onItemSelected(Id)}
                    >
                        {Name}
                    </li>
                );
            });
        };
    };

    render() {
        const {dataList} = this.state;
        const renderItem = this.renderItemList(dataList);

        if (!dataList){
            return <Spinner/>
        }

        return(
            <Container fluid className='ps-4 pt-1 px-1'>
                <ui>
                    {renderItem}
                </ui>
            </Container>
        )
    }
}