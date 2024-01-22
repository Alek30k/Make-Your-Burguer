import { Ingredient } from "@/components/interface/ingredient.type";
import MakeBurger from "../components/burger";
import MakeCart from "../components/cart";
import MakeIngredients from "../components/ingredients";
import MakeTitle from "../components/title";

const ingredients: Ingredient[] = [
  {
    id: "1",
    name: "Cutlet",
    image: "/images/make/cutlet.png",
    alt: "Ingredient Cutlet",
    quantity: 0,
  },
  {
    id: "2",
    name: "Mayo",
    image: "/images/make/mayo.png",
    alt: "Ingredient Mayo",
    quantity: 0,
  },
  {
    id: "3",
    name: "Onion",
    image: "/images/make/onion.png",
    alt: "Ingredient Onion",
    quantity: 0,
  },
  {
    id: "4",
    name: "Tomato",
    image: "/images/make/tomato.png",
    alt: "Ingredient Tomato",
    quantity: 0,
  },
  {
    id: "5",
    name: "Cucumber",
    image: "/images/make/cucumber.png",
    alt: "Ingredient Cucumber",
    quantity: 0,
  },
  {
    id: "6",
    name: "Cheese",
    image: "/images/make/cheese.png",
    alt: "Ingredient Cheese",
    quantity: 0,
  },
  {
    id: "7",
    name: "Salad",
    image: "/images/make/salad.png",
    alt: "Ingredient Salad",
    quantity: 0,
  },
  {
    id: "8",
    name: "Bun",
    image: "/images/make/bun_middle.png",
    alt: "Ingredient Bun",
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
