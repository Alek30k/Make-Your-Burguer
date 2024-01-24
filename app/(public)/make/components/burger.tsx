import Image from "next/image";
import { Ingredient } from "../interface/ingredient.type";

interface Props {
  burger: Ingredient[];
}

const MakeBurger = ({ burger }: Props) => {
  const count = 0;

  return (
    <div className="relative bg-[url('/images/make/bg.png')] h-[595px] w-full bg-contain bg-no-repeat bg-center">
      {burger.map(
        ({ image, alt, id, name, price, quantity, rotate }, index) => (
          <Image
            key={id}
            src={image}
            alt={alt}
            width={1000}
            height={300}
            className="absolute z-10"
            style={{
              bottom: `${(index + 1) * 40}px`,
            }}
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
