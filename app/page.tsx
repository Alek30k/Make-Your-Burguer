import CartMain from "@/components/cart/cart-main";
import HeroMain from "@/components/hero-main";

const HomePage = () => {
  return (
    <div className="mt-10 mb-56">
      <HeroMain />
      <div className="sm:hidden">
        <CartMain />
      </div>
    </div>
  );
};

export default HomePage;
