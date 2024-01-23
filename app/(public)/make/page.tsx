"use client";

import MakeBurger from "./components/burger";
import MakeCart from "./components/cart";
import MakeIngredients from "./components/ingredients";
import MakeTitle from "./components/title";
import { useState } from "react";
import { ingredients as initialState } from "./db/ingredientsDB";
import { Ingredient } from "./interface/ingredient.type";

const MakePage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialState);

  const addIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <MakeTitle />
        <MakeBurger />
        <MakeCart />
      </div>
      <MakeIngredients
        ingredients={ingredients}
        addIngredient={addIngredient}
      />
    </>
  );
};

export default MakePage;
