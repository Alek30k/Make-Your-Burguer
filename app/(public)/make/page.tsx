import MakeBurger from "../components/burger";
import MakeCart from "../components/cart";
import MakeIngredients from "../components/ingredients";
import MakeTitle from "../components/title";

const ingredients = [
  {
    id: "1",
    name: "Cheese",
    image: "/images/make/cheese.png",
    alt: "Ingredient Cheese",
    quantity: 0,
  },
  {
    id: "2",
    name: "Meat",
    image: "/images/make/meat.png",
    alt: "Ingredient Meat",
    quantity: 0,
  },
  {
    id: "3",
    name: "Salad",
    image: "/images/make/salad.png",
    alt: "Ingredient Salad",
    quantity: 0,
  },
  {
    id: "4",
    name: "Tomato",
    image: "/images/make/tomato.png",
    alt: "Ingredient Tomato",
    quantity: 0,
  },
];

const MakePage = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <MakeTitle />
        <MakeBurger />
        <MakeCart />
      </div>
      <MakeIngredients />
    </>
  );
};

export default MakePage;
