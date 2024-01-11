import { Phone } from "lucide-react";
import { Button } from "./button";
import IconLogo from "./icons/icon-logo";
import Iconmenu from "./icons/icon.menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-gray-100"
        >
          <IconLogo />
        </Button>
        <Button className="rounded-full bg-rose-50 text-red-500 hover:bg-rose-500 hover:text-red-50">
          <Phone className="mr-2 h-4 w-4" />
          Call Me Back
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-100"
            >
              <Iconmenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
