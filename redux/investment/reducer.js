import { ActionTypes } from "./types";
const INITIAL_STATE = {
  investments: [],
  activeInvestments: [],
  elapsedInvestments: [],
  pendingInvestments: { status: false, count: 0 },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_INVESTMENTS:
      return {
        ...state,
        investments: action.payload,
      };
    case ActionTypes.SET_ACTIVE_INVESTMENTS:
      return {
        ...state,
        activeInvestments: action.payload,
      };
    case ActionTypes.SET_ELAPSED_INVESTMENTS:
      return {
        ...state,
        elapsedInvestments: action.payload,
      };
    case ActionTypes.SET_PENDING_INVESTMENT:
      return {
        ...state,
        pendingInvestments: action.payload,
      };
    default:
      return state;
  }
}
