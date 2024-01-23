import { Ingredient } from "@/components/interface/ingredient.type";
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
          src="/images/make/cheese.png"
          alt="Ingredient Cheese"
          title="Cheese"
        />
      ))}
    </div>
  );
};

export default MakeIngredients;
