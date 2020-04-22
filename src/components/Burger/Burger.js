import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let totalIngredients = [];

  for (const ingredient in props.ingredients) {
    for (let i = 0; i < props.ingredients[ingredient] * 1; i++) {
      totalIngredients.push(
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      );
      // console.log(ingredient);
    }
  }
  console.log(totalIngredients.length);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {totalIngredients.length > 0 ? (
        totalIngredients
      ) : (
        <p>Please start adding ingredients</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
