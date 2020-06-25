import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import ItemList from './ItemList.jsx'
import AddItemButton from './AddItemButton.jsx'
import { addItem, moveItem, changeItemHighPriority } from './actions/items.js'
import Container from 'react-bootstrap/Container'

const App = () => {
  const { items } = useSelector(state => state);
  const dispatch = useDispatch();
  const onAddItem = () => dispatch(addItem());
  const onMoveItem = (item, direction) => dispatch(moveItem(item, direction));
  const onHighPriorityClick = (item, value) => dispatch(changeItemHighPriority(item, value));

  return (
    <div className="App">
      <Container>
        <ItemList items={items} onMoveItem = {onMoveItem} onHighPriorityClick={onHighPriorityClick}/>
        <AddItemButton onAddItem={onAddItem}/>
      </Container>
    </div>
  );
}

export default App;
