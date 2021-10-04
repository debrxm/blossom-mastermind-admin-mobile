import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const middleware = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default {
  store,
  persistor,
};
