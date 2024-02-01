import { cn } from "@/lib/utils";
import React from "react";
import NavHeaderMenu from "./NavHeader.Menu";
import NavHeaderBrand from "./NavHeader.Brand";
import ContainerFluid from "../ui/ContainerFluid";
import { Button } from "../ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ButtonToggleTheme from "../user-preferences/ButtonToggleTheme";

type Props = {
  positionMenu?: "left" | "right" | "center";
} & React.HTMLAttributes<HTMLElement>;

export default function NavHeader({
  className,
  positionMenu,
  ...props
}: Props) {
  return (
    <nav
      className={cn(
        `bg-background/95 fixed z-[100] flex h-[65px] w-full items-center  justify-center border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-500 dark:supports-[backdrop-filter]:bg-black/60`,
        className
      )}
      {...props}
    >
      <ContainerFluid className="flex justify-between">
        <div className="flex gap-4">
          <NavHeaderBrand href={"/"}></NavHeaderBrand>
          <NavHeaderMenu className="hidden lg:block"></NavHeaderMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="preferences  hidden items-center gap-4 md:flex">
            <ButtonToggleTheme></ButtonToggleTheme>
          </div>

          <div className="hidden gap-4 sm:flex">
            <Button asChild variant={"outline"}>
              <Link href={"/login"}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={"/signup"}>Get in touch!</Link>
            </Button>
          </div>

          <div className="sheet-container flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu></Menu>
              </SheetTrigger>
              <SheetContent className="pt-20">
                <SheetHeader>
                  <SheetTitle>Mobile Menu</SheetTitle>
                  <SheetDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi libero fugit eum inventore animi autem, ducimus
                    repellendus optio quaerat sapiente dolorem esse officia unde
                    cum ratione aspernatur incidunt natus! Voluptatibus ea
                    corrupti quos excepturi laboriosam nihil velit totam, odio
                    error!
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ContainerFluid>
    </nav>
  );
}
