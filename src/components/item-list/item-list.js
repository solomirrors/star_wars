import React from "react";
import {Container, Row} from "react-bootstrap";
import './item-list.css'

const ItemList = () => {
    return(
        <Container fluid className='ps-4 pt-1 px-4'>
            <Row className='item-list-bar p-3 me-2 ms-2'>
                <span className='item-list-item'>Item</span>
            </Row>
        </Container>
    )
}

export default ItemList;