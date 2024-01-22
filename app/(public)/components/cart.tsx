import CartHeader from "@/components/cart/cart-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Beaker, Clock } from "lucide-react";

const MakeCart = () => {
  return (
    <div className="p-8">
      <h2 className="text-gray-800 text-4xl font-semibold mb-4">summary</h2>
      <Separator className="mb-4" />
      <div className="grid grid-cols-2 mb-4">
        <p className="w-[197px] text-indigo-700 text-4xl font-extrabold ">
          $12.31
        </p>
        <Button className="text-violet-50 w-[197px] bg-indigo-700 rounded-[99px]  p-6 text-3xl font-semibold leading-tight">
          Checkout
        </Button>
      </div>
      <section className="flex justify-between mt-8 bg-violet-50 rounded-[32px] p-4">
        <CartHeader text="7 min" icon={Clock} iconColor="purple" />
        <CartHeader text="60 oz" icon={Beaker} iconColor="orange" />
        <CartHeader text="249 kcal" icon={Clock} iconColor="red" />
      </section>
    </div>
  );
};

export default MakeCart;
