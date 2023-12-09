import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardHeader } from "@/components/molecules/card.tsx";
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
          <Item>Badge</Item>
          <Item>Button</Item>
          <Item>Checkbox</Item>
          <Item>Highlight</Item>
          <Item>Input</Item>
          <Item>Link</Item>
          <Item>RadioButton</Item>
          <Item>Select</Item>
          <Item>Table</Item>
          <Item>Textarea</Item>
        </Flex>
      </Flex>
      <Flex>
        <Category>Molecules</Category>
        <Flex class="flex-wrap gap-5">
          <Item>Card</Item>
          <Item>FormField</Item>
          <Item>PasswordInput</Item>
          <Item>Stepper</Item>
        </Flex>
      </Flex>
      <Flex>
        <Category>Helpers</Category>
        <Flex class="flex-wrap gap-5">
          <Item>Flex</Item>
          <Item>Stack</Item>
        </Flex>
      </Flex>
      <Flex>
        <Category>Icons</Category>
        <Flex class="flex-wrap gap-5">
          <Item>NewTabIcon</Item>
        </Flex>
      </Flex>
    </Stack>
  );
};

const Category = ({ children }: { children: ComponentChild }) => {
  return <div class="flex-none w-10 text-3xl mr-8">{children}</div>;
};

const Item = ({ children }: { children: ComponentChild }) => {
  return (
    <Card padding="sm" style={{ width: 200 }}>
      <CardHeader>{children}</CardHeader>
      <CardBody>[image]</CardBody>
    </Card>
  );
};
