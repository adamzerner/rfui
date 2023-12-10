import { PageProps } from "$fresh/server.ts";
import { Navbar, NavbarItem } from "../components/molecules/navbar.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Navbar>
        <NavbarItem href="/">Components</NavbarItem>
        <NavbarItem href="/getting-started">Getting Starting</NavbarItem>
        <NavbarItem href="/philosophy">Philosophy</NavbarItem>
      </Navbar>
      <div class="max-w-[1200px] mx-4 lg:mx-auto mt-8 mb-6 font-sans">
        <Component />
      </div>
    </>
  );
};
