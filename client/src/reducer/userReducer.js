export const initailState = null;

const userReducer = (state, action) => {
  if (action.type === "CHECK_LOGIN") {
    return action.payload;
  }
  return state;
};
export default userReducer;
