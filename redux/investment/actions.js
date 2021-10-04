import { ActionTypes } from "./types";

export const setActiveInvestment = (data) => ({
  type: ActionTypes.SET_ACTIVE_INVESTMENTS,
  payload: data,
});
export const setElapsedInvestment = (data) => ({
  type: ActionTypes.SET_ELAPSED_INVESTMENTS,
  payload: data,
});
export const setInvestment = (data) => ({
  type: ActionTypes.SET_INVESTMENTS,
  payload: data,
});
export const setPendingInvestment = (data) => ({
  type: ActionTypes.SET_PENDING_INVESTMENT,
  payload: data,
});

`Darling i'm a nightmare dressed like a daydream`;
