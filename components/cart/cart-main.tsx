import { Clock, Beaker } from "lucide-react";
import Image from "next/image";
import CartHeader from "./cart-header";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

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
      <section className="flex justify-between mt-8">
        <CartHeader text="7 min" icon={Clock} iconColor="purple" />
        <CartHeader text="60 oz" icon={Beaker} iconColor="orange" />
        <CartHeader text="249 kcal" icon={Clock} iconColor="red" />
      </section>
      <Button className="w-full bg-rose-50 text-red-500 text-base font-normal  items-center gap-2.5 rounded-2xl mt-8">
        <span>+ Tomato Ketchup</span>
        <Badge className="py-1.5 bg-red-500">0.2 oz</Badge>
      </Button>
    </div>
  );
};

export default CartMain;
