const initialState = {
  token: null,
  login: false,
  isLoading: true,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TOKEN":
      return { ...state, token: action.payload, isLoading: false };
    case "LOGIN":
      return { ...state, token: action.payload, login: true, isLoading: false };
    case "LOGOUT":
      return { ...state, token: null, login: false, isLoading: false };
    case "CHANGE_LOGIN_STATE":
      return { ...state, login: !state.login };
    default:
      return state;
  }
}
