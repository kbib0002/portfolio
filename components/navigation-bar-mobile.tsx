import Link from "next/link";
import { AlignLeft } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden mr-3 cursor-pointer">
        <AlignLeft size={25} />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl font-bold">Kyle Bibby</SheetTitle>
        </SheetHeader>

        <div className="ml-3 flex flex-col gap-4 px-2 font-medium">
            <SheetClose asChild>
                <Link href="#about" className="transition-colors hover:text-foreground/70" aria-label="about">
                About
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link href="#services" className="transition-colors hover:text-foreground/70" aria-label="services">
                Services
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link href="#experience" className="transition-colors hover:text-foreground/70" aria-label="experience">
                    Experience
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link href="#projects" className="transition-colors hover:text-foreground/70" aria-label="projects">
                    Projects
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link href="#community" className="transition-colors hover:text-foreground/70" aria-label="community">
                    Community
                </Link>
            </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;