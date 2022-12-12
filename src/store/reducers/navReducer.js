import { SET_NAV, SET_PERCENTAGE } from '../actions';

const INITIAL_STATE = {
  section: "about",
  percentage: 0,
};

const navReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
  case SET_NAV:
    return {...state, section: payload};
  case SET_PERCENTAGE:
    return {...state, percentage: payload};
  default:
    return state;
  }
};

export default navReducer;