import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroMain = () => {
  return (
    <div className=" relative mt-20 sm:mt-0  sm:items-center sm:max-h-[735px] justify-start gap-[120px] sm:inline-flex">
      <h1 className="text-gray-800 text-5xl sm:text-7xl font-bold mt-5 sm:leading-[80px]  sm:w-1/3">
        Make Your Burger
      </h1>
      <p className="sm:hidden text-gray-800  text-xl font-normal leading-loose mt-5">
        Parallax screen. Burger ingredients and emojis moving depending on the
        position of the mouse pointer.
      </p>
      <div className="relative flex justify-center items-center sm:grow  sm:w-2/3">
        <Link href="/make" className="absolute sm:top-[400px] sm:left-0">
          <Button className="sm:w-[160px] sm:h-[160px] w-[120px] h-[120px] bg-indigo-700 rounded-[90px] flex-col justify-center items-center inline-flex">
            <span className="text-center text-white text-2xl font-extrabold font-['Open Sans'] uppercase leading-[30px]">
              make burger
            </span>
          </Button>
        </Link>
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
