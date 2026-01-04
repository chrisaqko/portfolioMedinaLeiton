import React from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import { Avatar } from '@heroui/react';
import Link from "next/link";

interface Props {
}

export const PortfolioLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarUI = (props: Props) => {
    return (
    <Navbar>
      <NavbarBrand>
        <PortfolioLogo />
        <p className="font-bold text-inherit">Christie Leiton</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {/*<Link color="foreground" href="#">
            Features
          </Link>*/}
        </NavbarItem>
        <NavbarItem isActive>
          {/*<Link aria-current="page" href="#">
            Customers
          </Link>*/}
        </NavbarItem>
        <NavbarItem>
          {/*<Link color="foreground" href="#">
            Integrations
          </Link>*/}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
