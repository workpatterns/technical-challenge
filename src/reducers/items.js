export default function items(state = [], action) {
  switch (action.type) {
    case 'CHANGE_ITEM_PRIORITY':
    const { itemToChange, value } = action.payload;
    return state.map((item) => {
      if (item === itemToChange)
      {
        return {
          ...item,
          highPriority: value
        }
      }
      else
      {
        return item;
      }
    })
    case 'MOVE_ITEM':
      const { itemToMove, direction } = action.payload;
      const delta = direction === 'up' ? 1 : -1;
      const adjacentItem = state.find(({ position }) => position === (itemToMove.position - delta));

      if (!adjacentItem)
        return state;

      //Swap the positions of adjacentItem and itemToMove
      return state.map((item) => {
        if (item === adjacentItem)
        {
          return {
            ...item,
            position: itemToMove.position
          }
        }
        else if (item === itemToMove) {
          return {
            ...item,
            position: adjacentItem.position
          }
        }
        else
        {
          return item;
        }
      })
    case 'ADD_ITEM':
      //Initialize the new item with a position at the end of the list of items
      const new_item = {
        ...action.payload,
        position: state.length
      };

      return [
        ...state,
        new_item
      ]
    default:
      return state;
  }
}
