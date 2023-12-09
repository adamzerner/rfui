import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardHeader } from "@/components/molecules/card.tsx";
import { ComponentChild } from "preact";

/*

TODO:
- Placeholder image
- Responsive design
- Real images

*/

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
    <Stack class="gap-8">
      <div>
        <div class="font-bold text-neutral-700 mb-4">Atoms</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/atoms/badge">Badge</Link>
          <Link underline="hover" href="/atoms/button">Button</Link>
          <Link underline="hover" href="/atoms/checkbox">Checkbox</Link>
          <Link underline="hover" href="/atoms/highlight">Highlight</Link>
          <Link underline="hover" href="/atoms/input">Input</Link>
          <Link underline="hover" href="/atoms/link">Link</Link>
          <Link underline="hover" href="/atoms/radio-button">
            RadioButton
          </Link>
          <Link underline="hover" href="/atoms/select">Select</Link>
          <Link underline="hover" href="/atoms/table">Table</Link>
          <Link underline="hover" href="/atoms/textarea">Textarea</Link>
        </Stack>
      </div>
      <div>
        <div class="font-bold text-neutral-700 mb-4">Molecules</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/molecules/card">Card</Link>
          <Link underline="hover" href="/molecules/form-field">
            FormField
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
        <Stack class="gap-2s">
          <Link underline="hover" href="/helpers/flex">Flex</Link>
          <Link underline="hover" href="/helpers/stack">Stack</Link>
        </Stack>
      </div>
      <div>
        <div class="font-bold text-neutral-700 mb-4">Icons</div>
        <Stack class="gap-2">
          <Link underline="hover" href="/icons/new-tab-icon">NewTabIcon</Link>
        </Stack>
      </div>
    </Stack>
  );
};

const Main = () => {
  return (
    <Stack class="gap-8">
      <Flex>
        <Category>Atoms</Category>
        <Flex class="flex-wrap gap-5">
          <Item name="Badge" href="/atoms/badge" />
          <Item name="Button" href="/atoms/button" />
          <Item name="Checkbox" href="/atoms/checkbox" />
          <Item name="Highlight" href="/atoms/highlight" />
          <Item name="Input" href="/atoms/input" />
          <Item name="Link" href="/atoms/link" />
          <Item name="RadioButton" href="/atoms/radio-button" />
          <Item name="Select" href="/atoms/select" />
          <Item name="Table" href="/atoms/table" />
          <Item name="Textarea" href="/atoms/textarea" />
        </Flex>
      </Flex>
      <Flex>
        <Category>Molecules</Category>
        <Flex class="flex-wrap gap-5">
          <Item name="Card" href="/molecules/card" />
          <Item name="FormField" href="/molecules/form-field" />
          <Item name="PasswordInput" href="/molecules/password-input" />
          <Item name="Stepper" href="/molecules/stepper" />
        </Flex>
      </Flex>
      <Flex>
        <Category>Helpers</Category>
        <Flex class="flex-wrap gap-5">
          <Item name="Flex" href="/helpers/flex" />
          <Item name="Stack" href="/helpers/stack" />
        </Flex>
      </Flex>
      <Flex>
        <Category>Icons</Category>
        <Flex class="flex-wrap gap-5">
          <Item name="NewTabIcon" href="/icons/new-tab-icon" />
        </Flex>
      </Flex>
    </Stack>
  );
};

const Category = ({ children }: { children: ComponentChild }) => {
  return <div class="flex-none w-10 text-3xl mr-8">{children}</div>;
};

const Item = (
  { name, href }: {
    name: string;
    href: string;
  },
) => {
  return (
    <Link underline="none" href={href}>
      <Card padding="sm" style={{ width: 200 }} class="hover:shadow-md">
        <CardHeader>{name}</CardHeader>
        <CardBody>
          <image src="https://placehold.co/200" />
        </CardBody>
      </Card>
    </Link>
  );
};
