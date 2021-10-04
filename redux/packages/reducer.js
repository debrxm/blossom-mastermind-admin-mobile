import { ActionTypes } from "./types";

const INITIAL_STATE = {
  packages: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_PACKAGES:
      return {
        ...state,
        packages: action.payload,
      };
    default:
      return state;
  }
}
