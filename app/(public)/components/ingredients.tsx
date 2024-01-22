import MakeIngredient from "./ingredient";

const MakeIngredients = () => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <MakeIngredient
          key={index}
          src="/images/make/cheese.png"
          alt="Ingredient Cheese"
          title="Cheese"
        />
      ))}
    </div>
  );
};

export default MakeIngredients;
