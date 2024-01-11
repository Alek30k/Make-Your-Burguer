import { Phone } from "lucide-react";
import { Button } from "./button";
import IconLogo from "./icons/icon-logo";

const Navbar = () => {
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-gray-100"
      >
        <IconLogo />
      </Button>
      <Button>
        <Phone className="mr-2 h-4 w-4" />
        Call Me Back
      </Button>
    </div>
  );
};

export default Navbar;
