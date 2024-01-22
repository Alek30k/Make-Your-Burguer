import MakeIngredient from "./ingredient";

const MakeIngredients = () => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="col-span-2">
          <MakeIngredient
            src="/images/make/cheese.png"
            alt="Ingredient Cheese"
            title="Cheese"
          />
        </div>
      ))}
    </div>
  );
};

export default MakeIngredients;
