const initialState = {
  doctor: [],
  isFetching: false,
  error: false
}

export default function doctorReducer (state = initialState, action) {
  switch (action.type) {
    case "FETCHING DOCTOR":
      return {
        ...state,
        doctor: [],
        isFetching: true
      }
    case "FETCHING DOCTOR SUCCESS":
      return {
        ...state,
        isFetching: false,
        doctor: action.data
      }
    default:
      return state
  }
}