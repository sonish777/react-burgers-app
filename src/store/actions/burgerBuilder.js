import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (igName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    igName,
  };
};

export const removeIngredient = (igName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    igName,
  };
};

export const setIngredients = (ings) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ings,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
