import {
    SAVE_USER,
    LOGOUT_USER,
} from "../types";

const INITIAL_STATE = {
    user: null,
    token: null,
    client: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        case "SAVE_TOKEN":
            return {
                ...state,
                token: action.payload
            };
        case "SAVE_CLIENT_DETAIL":
            return {
                ...state,
                client: action.payload
            }


        default:
            return state;
    }
}


