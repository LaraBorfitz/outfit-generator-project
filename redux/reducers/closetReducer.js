const initialState = {
  closet: [],
  publicClothes: [],
  refresh: false,
};

export default function closetReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CLOSET":
      return { ...state, closet: action.payload };
    case "CHANGE_REFRESH_STATE":
      return { ...state, refresh: !state.refresh };
    default:
      return state;
  }
}
