import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  Navbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "@/components/molecules/navbar.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/navbar.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/navbar.tsx
        </Link>
      </div>
      <Examples title="Default">
        <Navbar>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
        </Navbar>
      </Examples>

      <Examples title="NavbarLeft">
        <Navbar>
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
        </Navbar>
      </Examples>
      <Examples title="NavbarLeft and NavbarRight">
        <Navbar>
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
          <NavbarRight>
            <NavbarItem href="https://three.com">Three</NavbarItem>
            <NavbarItem href="https://four.com">Four</NavbarItem>
          </NavbarRight>
        </Navbar>
      </Examples>
    </Stack>
  );
};