import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <>
      <div>
        <h2>Number Of Ice Creams = {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream} disabled={props.numOfIceCreams === 0}>
          Buy Ice Creams
        </button>
        <h3 style={{ color: "red", letterSpacing: "-1px" }}>{props.numOfIceCreams === 0 && "Out Of Stock"}</h3>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
