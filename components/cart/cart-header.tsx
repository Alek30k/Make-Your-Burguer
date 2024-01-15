import { cn } from "@/lib/utils";

interface Props {
  text?: string;
  icon: React.ElementType;
  iconColor?: "purple" | "orange" | "red" | "green" | "blue" | "yellow";
}

const CartHeader = ({ text, icon: Icon, iconColor = "purple" }: Props) => {
  const colorVariants: Record<string, string> = {
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
    yellow: "bg-yellow-600",
  };

  const colorVariantsIcon: Record<string, string> = {
    purple: "stroke-purple-600",
    orange: "stroke-orange-600",
    red: "stroke-red-600",
    green: "stroke-green-600",
    blue: "stroke-blue-600",
    yellow: "stroke-yellow-600",
  };

  const baseBgIconColor =
    "p-2 h-8 w-8 bg-purple-500 inline-block rounded-full justify-center items-center inline-flex";

  const baseIconColor = "fill-white stroke-purple-500";

  return (
    <div>
      <article className="flex gap-x-2 items-center">
        <span className={cn(baseBgIconColor, colorVariants[iconColor])}>
          <Icon className={cn(baseIconColor, colorVariantsIcon[iconColor])} />
        </span>
        <span className="text-gray-800 leading-tight font-semibold">
          {text}
        </span>
      </article>
    </div>
  );
};

export default CartHeader;
