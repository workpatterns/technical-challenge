import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = ({ item, onHighPriorityClick }) => (
  <Row className="mt-3">
    <Col>
      <input type="text" class="form-control" placeholder="Enter text here"/>
    </Col>
    <Col>
      <Button onClick={() => onHighPriorityClick(item, !item.highPriority)} className={item.highPriority ? "btn-danger" : "btn-secondary"}>
        <BsFillExclamationCircleFill />
      </Button>
    </Col>
  </Row>
);

export default Item;
