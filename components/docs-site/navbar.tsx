import {
  Navbar as RFUINavbar,
  NavbarItem,
  NavbarLeft,
} from "@/islands/molecules/navbar/index.tsx";

type NavbarType = {
  route: string;
};

export const Navbar = ({ route }: NavbarType) => {
  return (
    <RFUINavbar size="2xl">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting started
        </NavbarItem>
        <NavbarItem href="/about" isActive={route === "/about"}>
          About
        </NavbarItem>
      </NavbarLeft>
    </RFUINavbar>
  );
};
