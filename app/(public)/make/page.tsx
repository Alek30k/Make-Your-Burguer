import MakeBurger from "../components/burger";
import MakeCart from "../components/cart";
import MakeIngredients from "../components/ingredients";
import MakeTitle from "../components/title";

const MakePage = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <MakeTitle />
        <MakeBurger />
        <MakeCart />
      </div>
      <MakeIngredients />
    </>
  );
};

export default MakePage;
