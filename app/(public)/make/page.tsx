import MakeBurger from "../components/burger";
import MakeCart from "../components/cart";
import MakeTitle from "../components/title";

const MakePage = () => {
  return (
    <div className="grid grid-cols-3">
      <MakeTitle />
      <MakeBurger />
      <MakeCart />
    </div>
  );
};

export default MakePage;
