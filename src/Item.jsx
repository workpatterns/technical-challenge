import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsCheck } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = ({ item, onCompleteClick }) => (
  <Row className="mt-3">
    <Col>
      <input type="text" class="form-control" placeholder="Enter text here"/>
    </Col>
    <Col>
      <Button onClick={() => onCompleteClick(item, !item.complete)} className={item.complete ? "btn-success" : "btn-secondary"}>
        <BsCheck />
      </Button>
    </Col>
  </Row>
);

export default Item;
