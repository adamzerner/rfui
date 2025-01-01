import { VerticalNavbarBottom } from "@/components/molecules/vertical-navbar/vertical-navbar-bottom.tsx";
import { VerticalNavbarItem } from "@/components/molecules/vertical-navbar/vertical-navbar-item.tsx";
import { VerticalNavbarSection } from "@/components/molecules/vertical-navbar/vertical-navbar-section.tsx";
import { VerticalNavbarTop } from "@/components/molecules/vertical-navbar/vertical-navbar-top.tsx";
import { VerticalNavbar as RFUIVerticalNavbar } from "@/islands/molecules/vertical-navbar/index.tsx";

type VerticalNavbarType = {
  route: string;
};

export const VerticalNavbar = ({ route }: VerticalNavbarType) => {
  return (
    <RFUIVerticalNavbar>
      <VerticalNavbarTop>
        <VerticalNavbarSection>
          <VerticalNavbarItem
            href="/"
            isActive={route === "/"}
            shouldOpenInNewTab
            shouldIncludeNewTabIcon
          >
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
        </VerticalNavbarSection>
        <VerticalNavbarSection>
          <VerticalNavbarItem
            href="/one"
            isActive={route === "/one"}
            shouldOpenInNewTab
            shouldIncludeNewTabIcon
          >
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/two"
            isActive={route === "/two"}
          >
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/three" isActive={route === "/three"}>
            Three
          </VerticalNavbarItem>
        </VerticalNavbarSection>
      </VerticalNavbarTop>
      <VerticalNavbarBottom>
        <VerticalNavbarItem href="/example" isActive={route === "/example"}>
          Example
        </VerticalNavbarItem>
      </VerticalNavbarBottom>
    </RFUIVerticalNavbar>
  );
};
