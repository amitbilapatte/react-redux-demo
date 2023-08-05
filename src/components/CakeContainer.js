import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <>
      <div>
        <h1
          style={{
            background: "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bolder",
            fontSize: "34px",
            letterSpacing: "-1px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Frosty Delights Café
        </h1>
      </div>
      <div>
        <h2>Number Of Cakes = {props.numOfCakes}</h2>
        <button onClick={props.buyCake} disabled={props.numOfCakes === 0}>
          Buy cakes
        </button>
        <h3 style={{ color: "red", letterSpacing: "-1px" }}>{props.numOfCakes === 0 && "Out Of Stock"}</h3>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
