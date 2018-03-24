const initialState = {
  pittition: [],
  isFetching: false,
  error: false
}

export default function pittitionReducer (state = initialState, action) {
  switch (action.type) {
    case "FETCHING PITTITION":
      return {
        ...state,
        pittition: [],
        isFetching: true
      }
    default:
      return state
  }
}