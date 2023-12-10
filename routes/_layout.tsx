import { PageProps } from "$fresh/server.ts";
import { Container } from "../components/helpers/container.tsx";
import {
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "../components/molecules/footer.tsx";
import { Navbar, NavbarItem } from "../components/molecules/navbar.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <>
      <Navbar size="xl">
        <NavbarItem href="/" isActive={route === "/"}>Components</NavbarItem>
        <NavbarItem
          href="/getting-started"
          isActive={route === "/getting-started"}
        >
          Getting Starting
        </NavbarItem>
        <NavbarItem href="/philosophy" isActive={route === "/philosophy"}>
          Philosophy
        </NavbarItem>
      </Navbar>
      <Container size="xl" class="mt-8 mb-6 font-sans min-h-[200px]">
        <Component />
      </Container>
      <Footer size="xl">
        <FooterColumn>
          <FooterHeading>RFUI</FooterHeading>
          <FooterItem href="/">Components</FooterItem>
          <FooterItem href="/getting-started">Getting Started</FooterItem>
          <FooterItem href="/philosophy">Philosophy</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Code</FooterHeading>
          <FooterItem href="https://github.com/adamzerner/rfui">
            GitHub
          </FooterItem>
          <FooterItem href="https://github.com/users/adamzerner/projects/2">
            Roadmap
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
          <FooterItem href="/faq">FAQ</FooterItem>
          <FooterItem href="mailto:adamzerner@protonmail.com">
            Email
          </FooterItem>
        </FooterColumn>
      </Footer>
    </>
  );
};
