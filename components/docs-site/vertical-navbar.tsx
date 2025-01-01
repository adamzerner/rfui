import { VerticalNavbarBottom } from "@/components/molecules/vertical-navbar/vertical-navbar-bottom.tsx";
import { VerticalNavbarItem } from "@/components/molecules/vertical-navbar/vertical-navbar-item.tsx";
import { VerticalNavbarTop } from "@/components/molecules/vertical-navbar/vertical-navbar-top.tsx";
import { VerticalNavbar as RFUIVerticalNavbar } from "@/islands/molecules/vertical-navbar/index.tsx";

type VerticalNavbarType = {
  route: string;
};

export const VerticalNavbar = ({ route }: VerticalNavbarType) => {
  return (
    <RFUIVerticalNavbar>
      <VerticalNavbarTop>
        <VerticalNavbarItem href="/" isActive={route === "/"}>
          Components
        </VerticalNavbarItem>
        <VerticalNavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting started
        </VerticalNavbarItem>
        <VerticalNavbarItem href="/about" isActive={route === "/about"}>
          About
        </VerticalNavbarItem>
      </VerticalNavbarTop>
      <VerticalNavbarBottom>
        <VerticalNavbarItem href="/example" isActive={route === "/example"}>
          Example
        </VerticalNavbarItem>
      </VerticalNavbarBottom>
    </RFUIVerticalNavbar>
  );
};
