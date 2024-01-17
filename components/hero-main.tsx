import { Button } from "./ui/button";
import Image from "next/image";

const HeroMain = () => {
  return (
    <div className="mt-15 sm:flex sm:w-1/3 sm:w-2/3">
      <h1 className="text-gray-800 text-5xl font-medium mt-5">
        Make Your Burger
      </h1>
      <p className="sm:hidden text-gray-800  text-xl font-normal leading-loose">
        Parallax screen. Burger ingredients and emojis moving depending on the
        position of the mouse pointer.
      </p>
      <div className="relative flex justify-center items-center">
        <Button className="w-32 h-32 rounded-full uppercase text-xl absolute ">
          make burger
        </Button>
        <Image
          src="/images/burger.png"
          width={448}
          height={511}
          alt="Burguer"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroMain;
