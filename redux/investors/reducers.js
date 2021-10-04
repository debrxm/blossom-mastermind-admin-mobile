import { ActionTypes } from "./types";

const INITIAL_STATE = {
  investors: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_INVESTORS:
      return {
        ...state,
        investors: action.payload,
      };

    default:
      return state;
  }
}
