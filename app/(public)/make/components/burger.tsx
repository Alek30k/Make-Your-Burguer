import Image from "next/image";

const MakeBurger = () => {
  return (
    <div className="bg-[url('/images/make/bg.png')] h-full w-full bg-cover bg-no-repeat bg-center">
      <div>
        <Image
          src="/images/make/bun.png"
          alt="background bun"
          width={1000}
          height={300}
        />
      </div>
    </div>
  );
};

export default MakeBurger;
