import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AccountReducer } from "./reducers/AccountReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";


const rootReducer = combineReducers({
    // state ứng dụng
    AccountReducer,
    LoadingReducer,
  });
  

// Cấu hình thunk
const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));