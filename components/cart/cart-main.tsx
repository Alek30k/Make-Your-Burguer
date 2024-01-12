import { Clock } from "lucide-react";
import Image from "next/image";

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
        <article className="flex gap-x-2 items-center">
          <span className="p-2 h-8 w-8 bg-purple-500 inline-block rounded-full justify-center items-center inline-flex">
            <Clock className="fill-white stroke-purple-500" />
          </span>
          <span className="text-gray-800 leading-tight font-semibold">
            7 min
          </span>
        </article>
      </section>
    </div>
  );
};

export default CartMain;
