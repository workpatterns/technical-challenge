import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowDown, BsArrowUp, BsFillExclamationCircleFill } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = ({ item, onMoveItem, onHighPriorityClick }) => (
  <Row className="mt-3">
    <Col>
      <input type="text" class="form-control" placeholder="Enter text here"/>
    </Col>
    <Col>
      <Button onClick={() => onMoveItem(item, 'up')}>
        <BsArrowUp />
      </Button>
      <Button onClick={() => onMoveItem(item, 'down')}>
        <BsArrowDown />
      </Button>
      <Button onClick={() => onHighPriorityClick(item, !item.highPriority)} className={item.highPriority ? "btn-danger" : "btn-secondary"}>
        <BsFillExclamationCircleFill />
      </Button>
    </Col>
  </Row>
);

export default Item;
