"use client";

import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Logo />
              <Nav
                containerStyles="flex flex-col gap-y-6 items-center"
                linkStyles="text-2xl font-medium"
              />
            </div>
            <Socials containerStyles="flex gap-x-4" iconsStyle="text-2xl" />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
