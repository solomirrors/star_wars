import React from "react";
import './item-list.css'
import {Container} from "react-bootstrap";

const ItemList = (props) => {
    const { dataList, onItemSelected, children: renderLabel } = props;

   const items =
        dataList.map((item) => {
            const { Id } = item;
            const label = renderLabel(item);
            return(
                <li
                    key={Id}
                    onClick={() => onItemSelected(Id)}
                >
                    {label}
                </li>
            );
        });

    return(
        <Container fluid className='ps-4 pt-1 px-1'>
            <ul>
                {items}
            </ul>
        </Container>
    )
}

export default ItemList;