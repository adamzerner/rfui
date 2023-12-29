import { PageProps } from "$fresh/server.ts";
import { Container } from "@/components/helpers/container.tsx";
import {
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "@/components/molecules/footer.tsx";
import { Navbar, NavbarItem } from "@/components/molecules/navbar.tsx";
import { WelcomeMessage } from "@/islands/welcome-message.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <>
      <TheNavbar route={route} />
      <Container size="xl" class="mt-8 mb-6 font-sans min-h-[200px]">
        <WelcomeMessage />
        <Component />
      </Container>
      <TheFooter />
    </>
  );
};

const TheNavbar = ({ route }: { route: string }) => {
  return (
    <Navbar size="xl">
      <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
      <NavbarItem
        href="/getting-started"
        isActive={route === "/getting-started"}
      >
        Getting started
      </NavbarItem>
    </Navbar>
  );
};

const TheFooter = () => {
  return (
    <Footer size="xl">
      <FooterColumn>
        <FooterHeading>About</FooterHeading>
        <FooterItem href="/about">About</FooterItem>
        <FooterItem href="/philosophy">Philosophy</FooterItem>
        <FooterItem href="https://github.com/users/adamzerner/projects/2">
          Roadmap
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Docs</FooterHeading>
        <FooterItem href="/">Components</FooterItem>
        <FooterItem href="/rest-parameters">Rest parameters</FooterItem>
        <FooterItem href="/getting-started">Getting started</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Tutorials</FooterHeading>
        <FooterItem href="/tutorials/fresh">Fresh</FooterItem>
        <FooterItem href="/tutorials/remix">Remix</FooterItem>
        <FooterItem href="/tutorials/preact">Preact</FooterItem>
        <FooterItem href="/tutorials/react">React</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Code</FooterHeading>
        <FooterItem href="https://github.com/adamzerner/rfui">
          GitHub
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
          Changelog
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
          Contributing
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
          License
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Help</FooterHeading>
        <FooterItem href="mailto:adamzerner@protonmail.com">
          Contact
        </FooterItem>
        <FooterItem href="/faq">FAQ</FooterItem>
      </FooterColumn>
    </Footer>
  );
};
