const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

export const changeItemCompletion = (itemToChange, value) => ({
  type: 'CHANGE_ITEM_COMPLETION',
  payload: {
    itemToChange,
    value
  }
})

export const addItem = text => ({
  type: 'ADD_ITEM',
  payload: {
    uuid: uuid(),
    complete: false
  }
})
