import Image from "next/image";
import { Ingredient } from "../interface/ingredient.type";

interface Props {
  ingredients: Ingredient[];
}

const MakeBurger = ({ ingredients }: Props) => {
  return (
    <div className="relative bg-[url('/images/make/bg.png')] h-[595px] w-full bg-contain bg-no-repeat bg-center">
      {ingredients.map(
        ({ image, alt, id, name, price, quantity, rotate }) =>
          quantity > 0 && (
            <Image
              key={id}
              src={image}
              alt={alt}
              width={1000}
              height={300}
              className="absolute bottom-0"
            />
          )
      )}
      <Image
        src="/images/make/bun.png"
        alt="burger bun"
        width={1000}
        height={300}
        className="absolute bottom-0"
      />
    </div>
  );
};

export default MakeBurger;
