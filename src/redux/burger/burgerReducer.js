import { BUY_BURGER } from "./burgerTypes";

const initialState = {
  numOfBurgers: 7,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numOfBurgers: state.numOfBurgers - action.payload >= 0 ? state.numOfBurgers - action.payload : 0,
      };
    default:
      return state;
  }
};

export default burgerReducer;
