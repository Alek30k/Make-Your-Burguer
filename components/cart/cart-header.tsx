interface Props {
  text?: string;
  icon: React.ElementType;
  iconColor: string;
}

const CartHeader = ({ text, icon: Icon, iconColor }: Props) => {
  const baseIconColor =
    "p-2 h-8 w-8 bg-purple-500 inline-block rounded-full justify-center items-center inline-flex";

  return (
    <div>
      <article className="flex gap-x-2 items-center">
        <span className="">
          <Icon className="fill-white stroke-purple-500" />
        </span>
        <span className="text-gray-800 leading-tight font-semibold">
          {text}
        </span>
      </article>
    </div>
  );
};

export default CartHeader;
