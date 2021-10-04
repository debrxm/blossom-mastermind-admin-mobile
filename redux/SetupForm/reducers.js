import { ActionTypes } from "./types";

const INITIAL_STATE = {
  age: "",
  gender: "",
  marital_status: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  phone: "",
  name_on_BVN: "",
  account_number: "",
  bank_name: "",
  bank_branch: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.AGE:
      return {
        ...state,
        age: action.payload,
      };
    case ActionTypes.GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case ActionTypes.MARITAL_STATUS:
      return {
        ...state,
        marital_status: action.payload,
      };
    case ActionTypes.FIRST_NAME:
      return {
        ...state,
        first_name: action.payload,
      };
    case ActionTypes.MIDDLE_NAME:
      return {
        ...state,
        middle_name: action.payload,
      };
    case ActionTypes.LAST_NAME:
      return {
        ...state,
        last_name: action.payload,
      };
    case ActionTypes.PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case ActionTypes.NAME_AS_WITTEN_ON_BVN:
      return {
        ...state,
        name_on_BVN: action.payload,
      };
    case ActionTypes.ACCOUNT_NUMBER:
      return {
        ...state,
        account_number: action.payload,
      };
    case ActionTypes.BANK_NAME:
      return {
        ...state,
        bank_name: action.payload,
      };
    case ActionTypes.BANK_BRANCH:
      return {
        ...state,
        bank_branch: action.payload,
      };
    default:
      return state;
  }
}
