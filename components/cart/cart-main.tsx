import { Clock, Beaker } from "lucide-react";
import Image from "next/image";
import CartHeader from "./cart-header";

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
      <section className="flex justify-between">
        <CartHeader text="7 min" icon={Clock} />
        <CartHeader text="7 min" icon={Beaker} />
        <CartHeader text="7 min" icon={Clock} />
      </section>
    </div>
  );
};

export default CartMain;
