import { CHANGE_NAME, LOGIN, LOGOUT } from "./type";

const initialState = {
  isSignedIn: true,
  userName: "Sonu Kumar",
};

export default (state = initialState, { type, payload }) => {
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
