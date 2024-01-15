import { Clock, Beaker, Plus, Minus } from "lucide-react";
import Image from "next/image";
import CartHeader from "./cart-header";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Button className="group bg-rose-50  text-base font-normal w-full  items-center gap-2.5 rounded-2xl mt-8 hover:bg-rose-500 ">
        <span className="text-red-500 group-hover:text-red-50">
          + Tomato Ketchup
        </span>
        <Badge className="py-1.5 bg-red-500 group-hover:bg-rose-50 group-hover:text-red-500 ">
          0.2 oz
        </Badge>
      </Button>

      <Card className="rounded-[3rem]">
        <CardHeader>
          <Image
            src={"/images/burger/sm/cutlet.png"}
            alt="cutlet"
            width={104}
            height={37}
            className="m-auto"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-center text-gray-800 text-sm font-semibold leading-tight">
            Cutlet
          </h2>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700">
            <Plus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
          </Button>
          <span>0</span>
          <Button className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700">
            <Minus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartMain;
