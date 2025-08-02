import { CHANGE_NAME, LOGIN, LOGOUT } from "./type";

const initialState = {
  isSignedIn: true,
  userName: "Sonu Kumar",
};
type ActionType={
  type:string,
  payload:any
}
export default (state = initialState, { type, payload }:ActionType) => {
  switch (type) {
    case LOGIN:
      return { ...state, isSignedIn: payload };
    case LOGOUT:
      return { ...state, isSignedIn: payload };
    case CHANGE_NAME:
      return { ...state, userName: payload };
  }

  return state;
};
