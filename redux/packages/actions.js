import { ActionTypes } from "./types";

export const setPackages = (data) => ({
  type: ActionTypes.SET_PACKAGES,
  payload: data,
});
