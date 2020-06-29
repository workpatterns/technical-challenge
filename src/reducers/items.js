export default function items(state = [], action) {
  switch (action.type) {
    case 'CHANGE_ITEM_COMPLETION':
    const { itemToChange, value } = action.payload;
    return state.map((item) => {
      if (item === itemToChange)
      {
        return {
          ...item,
          complete: value
        }
      }

      return item;
    })
    case 'ADD_ITEM':
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}
