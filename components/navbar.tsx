"use client";

import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import IconLogo from "./ui/icons/icon-logo";
import Iconmenu from "./ui/icons/icon.menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-between mt-5">
        <Link href="/">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-100"
          >
            <IconLogo />
          </Button>
        </Link>

        <Link
          href="/"
          className={cn(
            "hidden text-gray-800 sm:block text-base font-normal font-['Open Sans'] leading-tight",
            pathname === "/" && "border-b-4 border-indigo-500 font-semibold"
          )}
        >
          Discover
        </Link>
        <Link
          href="/make"
          className={cn(
            "hidden text-gray-800 sm:block text-base font-normal font-['Open Sans'] leading-tight",
            pathname === "/make" && "border-b-4 border-indigo-500 font-medium"
          )}
        >
          Make Your Burger
          {/* <div className=" w-[67px] h-0.5 relative bg-indigo-700 rounded-[99px]"></div> */}
        </Link>

        <Button className="rounded-full bg-rose-50 text-red-500 hover:bg-rose-500 hover:text-rose-50">
          <Phone className="mr-2 h-4 w-4 " />
          Call Me Back
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-100 sm:hidden"
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
