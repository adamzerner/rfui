import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardFooter } from "@/components/molecules/card.tsx";
import { Button } from "@/islands/atoms/button.tsx";
import { ComponentChild } from "preact";

const components = {
  atoms: [
    { name: "Badge", href: "/atoms/badge" },
    { name: "Blockquote", href: "/atoms/blockquote" },
    { name: "Button", href: "/atoms/button" },
    { name: "Checkbox", href: "/atoms/checkbox" },
    { name: "CodeBlock", href: "/atoms/code-block" },
    { name: "Highlight", href: "/atoms/highlight" },
    { name: "H1", href: "/atoms/h1" },
    { name: "H2", href: "/atoms/h2" },
    { name: "InlineCode", href: "/atoms/inline-code" },
    { name: "Input", href: "/atoms/input" },
    { name: "Link", href: "/atoms/link" },
    { name: "OL", href: "/atoms/ol" },
    { name: "RadioButton", href: "/atoms/radio-button" },
    { name: "Select", href: "/atoms/select" },
    { name: "Switch", href: "/atoms/switch" },
    { name: "Table", href: "/atoms/table" },
    { name: "Text", href: "/atoms/text" },
    { name: "Textarea", href: "/atoms/textarea" },
    { name: "UL", href: "/atoms/ul" },
  ],
  molecules: [
    { name: "Alert", href: "/molecules/alert" },
    { name: "Card", href: "/molecules/card" },
    { name: "Footer", href: "/molecules/footer" },
    { name: "FormField", href: "/molecules/form-field" },
    { name: "Navbar", href: "/molecules/navbar" },
    { name: "PasswordInput", href: "/molecules/password-input" },
    { name: "Stepper", href: "/molecules/stepper" },
  ],
  helpers: [
    { name: "Container", href: "/helpers/container" },
    { name: "Flex", href: "/helpers/flex" },
    { name: "Stack", href: "/helpers/stack" },
  ],
};

export default () => {
  return (
    <Flex class="mt-9 gap-11">
      <LeftNav />
      <Main />
    </Flex>
  );
};

export const LeftNav = () => {
  return (
    <Stack class="gap-8 hidden lg:flex">
      <div>
        <div class="font-bold text-neutral-700 mb-4">Atoms</div>
        <Stack class="gap-2">
          {components.atoms.map((component) => (
            <Link underline="hover" href={component.href}>
              {component.name}
            </Link>
          ))}
        </Stack>
      </div>
      <div>
        <div class="font-bold text-neutral-700 mb-4">Molecules</div>
        <Stack class="gap-2">
          {components.molecules.map((component) => (
            <Link underline="hover" href={component.href}>
              {component.name}
            </Link>
          ))}
        </Stack>
      </div>
      <div>
        <div class="font-bold text-neutral-700 mb-4">Helpers</div>
        <Stack class="gap-2">
          {components.helpers.map((component) => (
            <Link underline="hover" href={component.href}>
              {component.name}
            </Link>
          ))}
        </Stack>
      </div>
    </Stack>
  );
};

const Main = () => {
  const Category = ({ children }: { children: ComponentChild }) => {
    return (
      <div class="flex-none w-10 text-5xl lg:text-3xl mr-8 mb-6 lg:mb-auto">
        {children}
      </div>
    );
  };
  const Item = (
    { name, href }: {
      name: string;
      href: string;
    },
  ) => {
    return (
      <Link underline="none" href={href}>
        <Card
          padding="sm"
          style={{ width: 200 }}
          class="hover:shadow-lg lg:hover:shadow-md"
        >
          <CardBody>
            <img src="https://placehold.co/200" alt="Placeholder image" />
          </CardBody>
          <CardFooter>{name}</CardFooter>
        </Card>
      </Link>
    );
  };

  return (
    <Stack class="gap-10 lg:gap-8">
      <div>
        <Button>Example</Button>
      </div>
      <div class="lg:flex">
        <Category>Atoms</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          {components.atoms.map((component) => (
            <Item name={component.name} href={component.href} />
          ))}
        </Flex>
      </div>
      <div class="lg:flex">
        <Category>Molecules</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          {components.molecules.map((component) => (
            <Item name={component.name} href={component.href} />
          ))}
        </Flex>
      </div>
      <div class="lg:flex">
        <Category>Helpers</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          {components.helpers.map((component) => (
            <Item name={component.name} href={component.href} />
          ))}
        </Flex>
      </div>
    </Stack>
  );
};
