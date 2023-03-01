const defaultState = {
    cash: 0,
  }  

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CASH":
          return {...state, cash: state.cash + action.payload}
        break;
      case "WITHDRAW":
          return {...state, cash: state.cash - action.payload}
        break;
      default:
        return state
    }
}