import React from 'react';
import Item from './Item.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ items, onCompleteClick }) => {
  return (<>
    {items.length === 0 && (
      <Row className="mt-3">
        <Col className="text-muted">
          You don't have any discussion topics yet
        </Col>
      </Row>
    )}
    {items.map((item) => (
      <Item key={item.uuid} item={item} onCompleteClick={onCompleteClick}/>
    ))}
  </>);
};

export default ItemList;
