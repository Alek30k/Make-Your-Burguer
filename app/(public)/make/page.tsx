import MakeBurger from "../components/burger";
import MakeCart from "../components/cart";
import MakeIngredients from "../components/ingredients";
import MakeTitle from "../components/title";

const ingredients = [
  {
    id: "1",
    name: "Cheese",
    image: "/images/make/cheese.png",
  },
  {
    id: "2",
    name: "Meat",
    image: "/images/make/meat.png",
  },
  {
    id: "3",
    name: "Salad",
    image: "/images/make/salad.png",
  },
  {
    id: "4",
    name: "Tomato",
    image: "/images/make/tomato.png",
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
