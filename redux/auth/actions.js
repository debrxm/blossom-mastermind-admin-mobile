import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    SAVE_USER,
} from "../types";
export const loginUser = (user) => ({
    type: LOGIN_USER,
    payload: user,
});

export const registerUser = (user) => ({
    type: REGISTER_USER,
    payload: user,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const saveUser = (user) => ({
    type: SAVE_USER,
    payload: user,
});