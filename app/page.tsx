import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-gray-800 text-5xl font-medium mt-5">
        Make Your Burger
      </h1>
      <p className="text-gray-800  text-xl font-normal leading-loose">
        Parallax screen. Burger ingredients and emojis moving depending on the
        position of the mouse pointer.
      </p>
      <div className="">
        <Button className="w-32 h-32 rounded-full uppercase text-xl">
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

export default HomePage;
