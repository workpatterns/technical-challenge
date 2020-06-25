import React from 'react';
import Item from './Item.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ items, onMoveItem, onHighPriorityClick }) => {
  const itemsSorted = [...items].sort((a, b) => a.position - b.position);

  return (<>
    {items.length === 0 && (
      <Row className="mt-3">
        <Col>
          No discussion topics found
        </Col>
      </Row>
    )}
    {itemsSorted.map((item) => (
      <Item key={item.uuid} item={item} onMoveItem={onMoveItem} onHighPriorityClick={onHighPriorityClick}/>
    ))}
  </>);
};

export default ItemList;
