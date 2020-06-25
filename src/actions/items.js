const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

export const changeItemHighPriority = (itemToChange, value) => ({
  type: 'CHANGE_ITEM_PRIORITY',
  payload: {
    itemToChange,
    value
  }
})

export const moveItem = (itemToMove, direction) => ({
  type: 'MOVE_ITEM',
  payload: {
    itemToMove,
    direction
  }
})

export const addItem = text => ({
  type: 'ADD_ITEM',
  payload: {
    text: uuid().slice(0, 4),
    uuid: uuid(),
    highPriority: false,
    position: null
  }
})
