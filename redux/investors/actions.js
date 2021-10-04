import { ActionTypes } from "./types";

export const setInvestors = (data) => ({
  type: ActionTypes.SET_INVESTORS,
  payload: data,
});
