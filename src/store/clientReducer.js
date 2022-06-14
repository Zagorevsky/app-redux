
const defaultState = {
  client: [],
}

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, cash: state.cash + action.payload }

    case "DEL_CLIENT":
      return { ...state, cash: state.cash - action.payload }

    default:
      return state
  }
}