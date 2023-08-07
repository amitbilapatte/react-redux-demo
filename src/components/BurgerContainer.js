import React from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

function BurgerContainer(props) {
  return (
    <>
      <div>
        <h2>Number Of Burgers = {props.numOfBurgers}</h2>
        <button onClick={props.buyBurger} disabled={props.numOfBurgers === 0}>
          Buy Burgers
        </button>
        <h3 style={{ color: "red", letterSpacing: "-1px" }}>{props.numOfBurgers === 0 && "Out Of Stock"}</h3>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBurgers: state.burger.numOfBurgers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger: () => dispatch(buyBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);
