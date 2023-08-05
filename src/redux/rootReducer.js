import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import burgerReducer from "./burger/burgerReducer";

const rootReducer = combineReducers({
  burger: burgerReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
