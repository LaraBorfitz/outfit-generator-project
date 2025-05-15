export const getCloset = (closet) => ({
  type: "GET_CLOSET",
  payload: closet,
});

export const toggleRefresh = () => ({
  type: "CHANGE_REFRESH_STATE",
});
