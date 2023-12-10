import { PageProps } from "$fresh/server.ts";
import { Container } from "../components/helpers/container.tsx";
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
      <Container size="xl" class="mt-8 mb-6 font-sans">
        <Component />
      </Container>
    </>
  );
};
