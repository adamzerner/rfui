import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardFooter } from "@/components/molecules/card.tsx";
import { ComponentChild } from "preact";

export default () => {
  return (
    <Flex class="mt-9 gap-11">
      <LeftNav />
      <Main />
    </Flex>
  );
};

const LeftNav = () => {
  return (
    <Stack class="gap-8 hidden lg:flex">
      <div>
        <div class="font-bold text-neutral-700 mb-4">Atoms</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/atoms/badge">Badge</Link>
          <Link underline="hover" href="/atoms/blockquote">Blockquote</Link>
          <Link underline="hover" href="/atoms/button">Button</Link>
          <Link underline="hover" href="/atoms/checkbox">Checkbox</Link>
          <Link underline="hover" href="/atoms/code-block">CodeBlock</Link>
          <Link underline="hover" href="/atoms/highlight">Highlight</Link>
          <Link underline="hover" href="/atoms/inline-code">InlineCode</Link>
          <Link underline="hover" href="/atoms/input">Input</Link>
          <Link underline="hover" href="/atoms/link">Link</Link>
          <Link underline="hover" href="/atoms/radio-button">
            RadioButton
          </Link>
          <Link underline="hover" href="/atoms/select">Select</Link>
          <Link underline="hover" href="/atoms/table">Table</Link>
          <Link underline="hover" href="/atoms/textarea">Textarea</Link>
          <Link underline="hover" href="/atoms/unordered-list">
            UnorderedList
          </Link>
        </Stack>
      </div>
      <div>
        <div class="font-bold text-neutral-700 mb-4">Molecules</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/molecules/alert">Alert</Link>
          <Link underline="hover" href="/molecules/card">Card</Link>
          <Link underline="hover" href="/molecules/footer">
            Footer
          </Link>
          <Link underline="hover" href="/molecules/form-field">
            FormField
          </Link>
          <Link underline="hover" href="/molecules/navbar">
            Navbar
          </Link>
          <Link underline="hover" href="/molecules/password-input">
            PasswordInput
          </Link>
          <Link underline="hover" href="/molecules/stepper">Stepper</Link>
        </Stack>
      </div>
      {
        /* <div>
        <div class="font-bold text-neutral-700 mb-4">Organisms</div>
        <Stack class="gap-2">
        </Stack>
      </div> */
      }
      <div>
        <div class="font-bold text-neutral-700 mb-4">Helpers</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/helpers/container">Container</Link>
          <Link underline="hover" href="/helpers/flex">Flex</Link>
          <Link underline="hover" href="/helpers/stack">Stack</Link>
        </Stack>
      </div>
    </Stack>
  );
};

const Main = () => {
  return (
    <Stack class="gap-10 lg:gap-8">
      <div class="lg:flex">
        <Category>Atoms</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          <Item name="Badge" href="/atoms/badge" />
          <Item name="Blockquote" href="/atoms/blockquote" />
          <Item name="Button" href="/atoms/button" />
          <Item name="Checkbox" href="/atoms/checkbox" />
          <Item name="CodeBlock" href="/atoms/code-block" />
          <Item name="Highlight" href="/atoms/highlight" />
          <Item name="InlineCode" href="/atoms/inline-code" />
          <Item name="Input" href="/atoms/input" />
          <Item name="Link" href="/atoms/link" />
          <Item name="RadioButton" href="/atoms/radio-button" />
          <Item name="Select" href="/atoms/select" />
          <Item name="Table" href="/atoms/table" />
          <Item name="Textarea" href="/atoms/textarea" />
          <Item name="UnorderedList" href="/atoms/unordered-list" />
        </Flex>
      </div>
      <div class="lg:flex">
        <Category>Molecules</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          <Item name="Alert" href="/molecules/alert" />
          <Item name="Card" href="/molecules/card" />
          <Item name="Footer" href="/molecules/footer" />
          <Item name="FormField" href="/molecules/form-field" />
          <Item name="Navbar" href="/molecules/navbar" />
          <Item name="PasswordInput" href="/molecules/password-input" />
          <Item name="Stepper" href="/molecules/stepper" />
        </Flex>
      </div>
      <div class="lg:flex">
        <Category>Helpers</Category>
        <Flex class="flex-wrap gap-6 lg:gap-5">
          <Item name="Container" href="/helpers/container" />
          <Item name="Flex" href="/helpers/flex" />
          <Item name="Stack" href="/helpers/stack" />
        </Flex>
      </div>
    </Stack>
  );
};

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
