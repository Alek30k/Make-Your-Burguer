import CartDetails from "@/components/cart/cartDetails";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MakeCart = () => {
  return (
    <div>
      <h2 className="text-gray-800 text-4xl font-semibold mb-4">summary</h2>
      <Separator className="mb-4" />
      <div className="grid grid-cols-2">
        <p className="w-[197px] text-indigo-700 text-4xl font-extrabold ">
          $12.31
        </p>
        <Button className="text-violet-50 w-[197px] bg-indigo-700 rounded-[99px]  p-6 text-3xl font-semibold leading-tight">
          Checkout
        </Button>
      </div>
      <section className="bg-indigo-100 p-1 rounded-full">
        <CartDetails />
      </section>
    </div>
  );
};

export default MakeCart;
