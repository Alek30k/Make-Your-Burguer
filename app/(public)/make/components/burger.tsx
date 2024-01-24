import Image from "next/image";
import { Ingredient } from "../interface/ingredient.type";

interface Props {
  ingredients: Ingredient[];
}

const MakeBurger = ({ ingredients }: Props) => {
  return (
    <div className="relative bg-[url('/images/make/bg.png')] h-[595px] w-full bg-contain bg-no-repeat bg-center">
      {ingredients.map(({ image, alt }) => (
        <Image
          src={image}
          alt={alt}
          width={1000}
          height={300}
          className="absolute bottom-0"
        />
      ))}
    </div>
  );
};

export default MakeBurger;
