"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { menuItems } from "./menuItems.data";
import { cn } from "@/lib/utils";

type Props = {} & React.ComponentProps<typeof NavigationMenu>;

export default function NavHeaderMenu({ ...props }: Props) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        {menuItems.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger>Menu Title</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {item.featured && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-600/50 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Title
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                Description
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      )}

                      {item.children.map((child, index) => {
                        return (
                          <ListItem
                            key={index}
                            href={child.href}
                            title={"Title"}
                          >
                            Description
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Title
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
