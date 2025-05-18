"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/constants";

interface NavLinkProps extends React.PropsWithChildren {
  href: string;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <NavigationMenuItem>
      <NextLink href={href}>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          active={isActive}
        >
          {children}
        </NavigationMenuLink>
      </NextLink>
    </NavigationMenuItem>
  );
};

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {navigationLinks.map((link) => (
          <NavLink key={link.id} href={link.href}>
            {link.title}
          </NavLink>
        ))}
        <NavigationMenuItem>
          <Button asChild variant="default" size="sm">
            <NextLink href="#contact">Book a Call</NextLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
