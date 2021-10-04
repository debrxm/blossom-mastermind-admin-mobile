import { ActionTypes } from "./types";

const INITIAL_STATE = {
  hasNoty: false,
  currentUser: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_HAS_NOTY:
      return {
        ...state,
        hasNoty: action.payload,
      };
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}
