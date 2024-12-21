import {
  Navbar as RFUINavbar,
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarItem,
  NavbarLeft,
} from "@/components/molecules/navbar/index.tsx";

export const Navbar = ({ route }: { route: string }) => {
  return (
    <RFUINavbar size="xl">
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
        <NavbarDropdown title="Dropdown">
          <NavbarDropdownItem href="https://one.com">
            One
          </NavbarDropdownItem>
          <NavbarDropdownItem href="https://two.com">
            Two
          </NavbarDropdownItem>
          <NavbarDropdownItem href="https://three.com">
            Three
          </NavbarDropdownItem>
          <NavbarDropdownItem href="https://example.com">
            sfdsdfaklsdfkdslfljkasdlfksadkljfslkfdlsfjklskfalksfsfd
          </NavbarDropdownItem>
        </NavbarDropdown>
      </NavbarLeft>
    </RFUINavbar>
  );
};
