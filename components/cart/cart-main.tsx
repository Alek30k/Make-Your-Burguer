import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import CartIngredient from "./cart-ingredient";
import CartDetails from "./cartDetails";

const CartMain = () => {
  return (
    <div className="mt-20">
      <Image
        src="/images/burgerr.png"
        width={325}
        height={310}
        alt="Burguer"
        className="mx-auto"
      />
      <CartDetails />
      <Button className="group bg-rose-50  text-base font-normal w-full  items-center gap-2.5 rounded-2xl mt-8 hover:bg-rose-500 ">
        <span className="text-red-500 group-hover:text-red-50">
          + Tomato Ketchup
        </span>
        <Badge className="py-1.5 bg-red-500 group-hover:bg-rose-50 group-hover:text-red-500 ">
          0.2 oz
        </Badge>
      </Button>
      <section className="grid grid-cols-2 gap-x-8 mt-8">
        <CartIngredient
          src="/images/burger/sm/cutlet.png"
          alt="cutlet"
          title="Cutlet"
        />
        <CartIngredient
          src="/images/burger/sm/mayo.png"
          alt="mayo"
          title="Mayo"
        />
      </section>

      <section className="mt-8">
        <p className="text-indigo-700 text-4xl font-extrabold text-center ">
          $12.95
        </p>
        <Button className="bg-indigo-700 rounded-full w-full mt-8 text-xl py-8 hover:bg-indigo-800">
          Checkout
        </Button>
      </section>
    </div>
  );
};

export default CartMain;
