import { BASE_URL, config, fileConfig } from "../../configs/host";
import { saveUser } from "./actions";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clienApiKey } from "../../configs/apiKeys";

export const GET_PRODUCTS = (page) => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/v1/investments/products?page=${page}&limit=${5}`)
    .then(({ data: { data, status_code } }) => {
      console.log(
        "RESPONSE OBJECT HERE",
        JSON.stringify(data.rows, null, 5),
        status_code
      );
      dispatch({ type: "SAVE_PRODUCTS", payload: data.rows });
      return Promise.resolve(data.rows);
    })
    .catch((err) => Promise.reject(err.message));
};

export const GET_RECOMMENDED_PRODUCTS = () => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/v1/investments/products?&limit=${3}`)
    .then(({ data: { data, status_code } }) => {
      console.log(
        "RESPONSE OBJECT HERE",
        JSON.stringify(data.rows, null, 5),
        status_code
      );
      dispatch({ type: "RECOMMENDED_PRODUCTS", payload: data.rows });
      return Promise.resolve(data.rows);
    })
    .catch((err) => Promise.reject(err.message));
};
