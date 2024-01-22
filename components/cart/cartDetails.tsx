import { Beaker, Clock } from "lucide-react";
import CartHeader from "./cart-header";

const CartDetails = () => {
  return (
    <section className="flex justify-between mt-8">
      <CartHeader text="7 min" icon={Clock} iconColor="purple" />
      <CartHeader text="60 oz" icon={Beaker} iconColor="orange" />
      <CartHeader text="249 kcal" icon={Clock} iconColor="red" />
    </section>
  );
};

export default CartDetails;
