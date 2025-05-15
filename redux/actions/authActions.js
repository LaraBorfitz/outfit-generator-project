export const getToken = (token) => ({
  type: "GET_TOKEN",
  payload: token,
});

export const login = (token) => ({
  type: "LOGIN",
  payload: token,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const changeLoginState = () => ({
  type: "CHANGE_LOGIN_STATE",
});
