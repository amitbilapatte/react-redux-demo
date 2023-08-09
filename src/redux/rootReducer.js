import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import burgerReducer from "./burger/burgerReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  burger: burgerReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
