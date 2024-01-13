import { cn } from "@/lib/utils";

interface Props {
  text?: string;
  icon: React.ElementType;
  iconColor: string;
}

const CartHeader = ({ text, icon: Icon, iconColor }: Props) => {
  const baseBgIconColor =
    "p-2 h-8 w-8 bg-purple-500 inline-block rounded-full justify-center items-center inline-flex";

  const baseIconColor = "fill-white stroke-purple-500";

  return (
    <div>
      <article className="flex gap-x-2 items-center">
        <span className={cn(baseBgIconColor, `bg-${iconColor}-600`)}>
          <Icon className={cn(baseIconColor, `stroke-${iconColor}-600`)} />
        </span>
        <span className="text-gray-800 leading-tight font-semibold">
          {text}
        </span>
      </article>
    </div>
  );
};

export default CartHeader;
