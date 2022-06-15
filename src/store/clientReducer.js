
const defaultState = {
  clients: []
}

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] }

    case "DEL":
      return { ...state, clients: state.cash - action.payload }

    default:
      return state
  }
}
