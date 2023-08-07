import { BUY_BURGER } from "./burgerTypes";

export const buyBurger = (number = 1) => {
  console.log("number " + number);
  return {
    type: BUY_BURGER,
    payload: number,
  };
};
