const initialState = {
  userDetails: []
}
export const body = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_DETAILS':
      return {
        ...state,
        userDetails: action.data
      }
    default:
      return {
        ...state
      }
  }
}
