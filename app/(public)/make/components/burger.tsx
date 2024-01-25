"use client";

import Image from "next/image";
import { Ingredient } from "../interface/ingredient.type";
import { cn } from "@/lib/utils";

interface Props {
  burger: Ingredient[];
}

const MakeBurger = ({ burger }: Props) => {
  let counter = 0;

  return (
    <div className="relative bg-[url('/images/make/bg.png')] h-[595px] w-full bg-contain bg-no-repeat bg-center">
      {burger.map(
        ({ image, alt, id, name, price, quantity, rotate }, index) => (
          <>
            {/* {index === burger.length - 1 && counter > 0 && (
              <Image
                key={index}
                src="/images/make/bun_top.png"
                alt="burger bun top"
                width={1000}
                height={300}
                className="absolute z-20 	"
                style={{
                  bottom: `${(counter + 1) * 40}px`,
                }}
              />
            )} */}

            {quantity > 0 &&
              Array.from({ length: quantity }, (_, idx) => {
                counter++;
                return (
                  <Image
                    key={idx}
                    src={image}
                    alt={alt}
                    width={1000}
                    height={300}
                    className={cn(
                      "absolute z-20 ",
                      rotate && "-rotate-[12deg]  bottom-1 w-64"
                    )}
                    style={{
                      bottom: `${counter * 40}px`,
                    }}
                  />
                );
              })}
          </>
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
