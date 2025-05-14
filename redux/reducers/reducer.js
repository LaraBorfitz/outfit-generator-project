const initialState = {
    closet: [],
    publicClothes: [],
    refresh: false,
    token: null,
    isLoading: true,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        // Código para LOGIN
        break;
      case 'LOGOUT':
        return { ...state, token: null };
      case 'GET_TOKEN': {
        const token = localStorage.getItem("token");
        return { ...state, token };
      }
      case 'GET_CLOSET':
        return { ...state, closet: action.payload };
      case 'CHANGE_LOGIN_STATE':
        return { ...state, login: !state.login };
      case 'CHANGE_REFRESH_STATE':
        return { ...state, refresh: !state.refresh };
      default:
        return state;
    }
  }

export default rootReducer;