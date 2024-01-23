import { Ingredient } from "../interface/ingredient.type";
import MakeIngredient from "./ingredient";

interface MakeIngredientProps {
  ingredients: Ingredient[];
}

const MakeIngredients = ({ ingredients }: MakeIngredientProps) => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {ingredients.map((item) => (
        <MakeIngredient
          key={item.id}
          src={item.image}
          alt={item.alt}
          title={item.name}
        />
      ))}
    </div>
  );
};

export default MakeIngredients;
