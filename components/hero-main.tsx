import { Button } from "./ui/button";
import Image from "next/image";

const HeroMain = () => {
  return (
    <div className="mt-20 sm:mt-0 sm:flex sm:items-center sm:max-h-[735px] justify-start gap-[120px] inline-flex">
      <h1 className="text-gray-800 text-7xl font-bold mt-5 leading-[80px] w-[245px]">
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
        {/* <Image
          src="/images/burger.png"
          width={448}
          height={511}
          alt="Burguer"
          className="mx-auto"
        /> */}

        <Image
          src="/images/burger/sm/bg-burger.png"
          width={673}
          height={634}
          alt="Burguer"
          className="mx-auto "
        />
      </div>
    </div>
  );
};

export default HeroMain;
