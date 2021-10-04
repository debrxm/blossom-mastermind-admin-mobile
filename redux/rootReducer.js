import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "./auth/reducer";
import user from "./user/reducers";
import packages from "./packages/reducer";
import investments from "./investment/reducer";
import setUp from "./SetupForm/reducers";
import investors from "./investors/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "investments"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  Auth,
  packages,
  investments,
  user,
  setUp,
  investors,
});
export default rootReducer;
