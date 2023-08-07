import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBurger } from "../redux/burger/burgerActions";

function BurgersContainer(props) {
  const [number, setNumber] = useState(1);
  console.log(number);
  return (
    <>
      <div>
        <h2>Number Of Burgers = {props.numOfBurgers}</h2>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => props.buyBurger(number)} disabled={props.numOfBurgers === 0}>
          Buy {number} Burgers
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
    buyBurger: (number) => dispatch(buyBurger(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgersContainer);
