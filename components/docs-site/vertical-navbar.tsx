import { VerticalNavbarBottom } from "@/components/molecules/vertical-navbar/vertical-navbar-bottom.tsx";
import { VerticalNavbarItem } from "@/components/molecules/vertical-navbar/vertical-navbar-item.tsx";
import { VerticalNavbarTop } from "@/components/molecules/vertical-navbar/vertical-navbar-top.tsx";
import { VerticalNavbar as RFUIVerticalNavbar } from "@/islands/molecules/vertical-navbar/index.tsx";
import { VerticalNavbarSection } from "@/islands/molecules/vertical-navbar/vertical-navbar-section.tsx";

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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                />
              </svg>
            }
          >
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/two"
            isActive={route === "/two"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            }
          >
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/three"
            isActive={route === "/three"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            }
          >
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
