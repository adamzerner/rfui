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
        <VerticalNavbarSection heading="Projects">
          <VerticalNavbarItem
            href="/one"
            isActive={route === "/one"}
          >
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/two"
            isActive={route === "/two"}
            shouldOpenInNewTab
            shouldIncludeNewTabIcon
          >
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/three" isActive={route === "/three"}>
            Three
          </VerticalNavbarItem>
        </VerticalNavbarSection>
        <VerticalNavbarSection heading="Invoices">
          <VerticalNavbarItem
            href="/four"
            isActive={route === "/four"}
          >
            Four
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/five"
            isActive={route === "/five"}
            shouldOpenInNewTab
            shouldIncludeNewTabIcon
          >
            Five
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/six" isActive={route === "/six"}>
            Six
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
