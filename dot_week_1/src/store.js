
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productsReducer";

const reducer = combineReducers({productReducer});
const middleware = [thunk];
let initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
