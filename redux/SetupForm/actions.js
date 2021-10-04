import { ActionTypes } from "./types";

export const setAge = (data) => ({
  type: ActionTypes.AGE,
  payload: data,
});
export const setGender = (data) => ({
  type: ActionTypes.GENDER,
  payload: data,
});
export const setMaritalStatus = (data) => ({
  type: ActionTypes.MARITAL_STATUS,
  payload: data,
});
export const setFirstName = (data) => ({
  type: ActionTypes.FIRST_NAME,
  payload: data,
});
export const setMiddleName = (data) => ({
  type: ActionTypes.MIDDLE_NAME,
  payload: data,
});
export const setLastName = (data) => ({
  type: ActionTypes.LAST_NAME,
  payload: data,
});
export const setPhone = (data) => ({
  type: ActionTypes.PHONE,
  payload: data,
});
export const setNameOnBVN = (data) => ({
  type: ActionTypes.NAME_AS_WITTEN_ON_BVN,
  payload: data,
});
export const setAccountNumber = (data) => ({
  type: ActionTypes.ACCOUNT_NUMBER,
  payload: data,
});
export const setBankName = (data) => ({
  type: ActionTypes.BANK_NAME,
  payload: data,
});
export const setBankBranch = (data) => ({
  type: ActionTypes.BANK_BRANCH,
  payload: data,
});
