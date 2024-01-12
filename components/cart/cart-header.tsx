import { Clock } from "lucide-react";

const CartHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <article className="flex gap-x-2 items-center">
        <span className="p-2 h-8 w-8 bg-purple-500 inline-block rounded-full justify-center items-center inline-flex">
          {children}
        </span>
        <span className="text-gray-800 leading-tight font-semibold">7 min</span>
      </article>
    </div>
  );
};

export default CartHeader;
