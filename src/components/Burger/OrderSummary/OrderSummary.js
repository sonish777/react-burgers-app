import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price: {props.price}$</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button clicked={props.purchaseCancled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
