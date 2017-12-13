const notes = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_NOTE':
      //{ type: 'ADD_NOTE', note: { name: 'Buy Milk' } }
      return [action.note, ...state]
    case 'TOGGLE_NOTE':
      //{ type: 'TOGGLE_NOTE', id: 7 }
      return state.map( note => {
        if (note.id === action.id)
          return { ...note, complete: !note.complete }
        return note
      })
    default:
      return state;
  }
}

export default notes;
