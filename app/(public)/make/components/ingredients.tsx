import { Ingredient } from "../interface/ingredient.type";
import MakeIngredient from "./ingredient";

interface MakeIngredientProps {
  ingredients: Ingredient[];
  addIngredient: (id: string) => void;
  removeIngredient: (id: string) => void;
}

const MakeIngredients = ({
  ingredients,
  addIngredient,
  removeIngredient,
}: MakeIngredientProps) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {ingredients.map((item) => (
        <MakeIngredient
          key={item.id}
          ingredient={item}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
      ))}
    </div>
  );
};

export default MakeIngredients;
