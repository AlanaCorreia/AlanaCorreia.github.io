import { SET_NAV } from '../actions';

const INITIAL_STATE = "about";

const navReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
  case SET_NAV:
    return payload;
  default:
    return state;
  }
};

export default navReducer;