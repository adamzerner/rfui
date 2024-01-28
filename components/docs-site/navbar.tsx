import {
  Navbar as RFUINavbar,
  NavbarItem,
  NavbarLeft,
} from "@/islands/molecules/navbar/index.tsx";

export const Navbar = ({ route }: { route: string }) => {
  return (
    <RFUINavbar size="xl">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting started
        </NavbarItem>
      </NavbarLeft>
    </RFUINavbar>
  );
};
