import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import ItemList from './ItemList.jsx'
import AddItemButton from './AddItemButton.jsx'
import { addItem, changeItemHighPriority } from './actions/items.js'
import Container from 'react-bootstrap/Container'

const App = () => {
  const { items } = useSelector(state => state);
  const dispatch = useDispatch();
  const onAddItem = () => dispatch(addItem());
  const onHighPriorityClick = (item, value) => dispatch(changeItemHighPriority(item, value));

  return (
    <div className="App">
      <Container>
        <ItemList items={items} onHighPriorityClick={onHighPriorityClick}/>
        <AddItemButton onAddItem={onAddItem}/>
      </Container>
    </div>
  );
}

export default App;
