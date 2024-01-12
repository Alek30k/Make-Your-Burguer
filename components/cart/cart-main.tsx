import { Clock } from "lucide-react";
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
      <section>
        <CartHeader>
          <Clock className="fill-white stroke-purple-500" />
        </CartHeader>
      </section>
    </div>
  );
};

export default CartMain;
