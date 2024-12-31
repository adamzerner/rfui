import { Badge } from "@/components/atoms/badge.tsx";
import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { Button } from "@/components/atoms/button.tsx";
import { Checkbox } from "@/components/atoms/checkbox.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { Highlight } from "@/components/atoms/highlight.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Input } from "@/components/atoms/input.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { RadioButton } from "@/components/atoms/radio-button.tsx";
import { Select } from "@/components/atoms/select.tsx";
import { Switch } from "@/components/atoms/switch.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Textarea } from "@/components/atoms/textarea.tsx";
import { UL } from "@/components/atoms/ul.tsx";
import { ComponentsList } from "@/components/docs-site/components-list.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardFooter } from "@/components/molecules/card.tsx";
import { FormField } from "@/components/molecules/form-field.tsx";
import { Alert } from "@/islands/molecules/alert.tsx";
import {
  CheckboxCardGroup,
  CheckboxCardGroupItem,
} from "@/islands/molecules/checkbox-card-group.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";
import {
  RadioButtonCardGroup,
  RadioButtonCardGroupItem,
} from "@/islands/molecules/radio-button-card-group.tsx";
import {
  RadioButtonGroup,
  RadioButtonGroupItem,
} from "@/islands/molecules/radio-button-group.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";
import { Tabs, TabSection } from "@/islands/molecules/tabs.tsx";
import { Signal, useSignal } from "@preact/signals";
import { ComponentChild, JSX } from "preact";

export const getComponents = (signal: Signal<null>) => ({
  atoms: [
    {
      name: "Badge",
      href: "/atoms/badge",
      example: <Badge size="lg">new</Badge>,
    },
    {
      name: "Blockquote",
      href: "/atoms/blockquote",
      example: (
        <Blockquote>
          All models are wrong. Some are useful.
        </Blockquote>
      ),
    },
    {
      name: "Button",
      href: "/atoms/button",
      example: (
        <Button class="!border-neutral-900 !text-neutral-900">Submit</Button>
      ),
    },
    {
      name: "Checkbox",
      href: "/atoms/checkbox",
      example: <Checkbox />,
    },
    {
      name: "CodeBlock",
      href: "/atoms/code-block",
      example: <CodeBlock code={`const n = 1;`} />,
    },
    {
      name: "Highlight",
      href: "/atoms/highlight",
      example: (
        <div>
          The <Highlight class="!bg-neutral-100">map</Highlight>{" "}
          is not the territory.
        </div>
      ),
    },
    { name: "H1", href: "/atoms/h1", example: <H1>Main heading</H1> },
    { name: "H2", href: "/atoms/h2", example: <H2>Subheading</H2> },
    {
      name: "InlineCode",
      href: "/atoms/inline-code",
      example: (
        <div>
          Prefer using <InlineCode>const</InlineCode> over{" "}
          <InlineCode>let</InlineCode>.
        </div>
      ),
    },
    {
      name: "Input",
      href: "/atoms/input",
      example: <Input class="bg-neutral-50/20" />,
    },
    {
      name: "Link",
      href: "/atoms/link",
      example: (
        <div class="cursor-pointer text-lg text-neutral-700 underline underline-offset-2">
          GitHub
        </div>
      ),
    },
    {
      name: "OL",
      href: "/atoms/ol",
      example: (
        <OL>
          <li>Gold</li>
          <li>Silver</li>
          <li>Bronze</li>
        </OL>
      ),
    },
    {
      name: "RadioButton",
      href: "/atoms/radio-button",
      example: <RadioButton />,
    },
    {
      name: "Select",
      href: "/atoms/select",
      example: (
        <Select class="bg-neutral-50/20">
          <option value="united-states">United States</option>
        </Select>
      ),
    },
    { name: "Switch", href: "/atoms/switch", example: <Switch /> },
    {
      name: "Table",
      href: "/atoms/table",
      example: (
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>19</td>
            </tr>
          </tbody>
        </Table>
      ),
    },
    {
      name: "Text",
      href: "/atoms/text",
      example: (
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      ),
    },
    {
      name: "Textarea",
      href: "/atoms/textarea",
      example: <Textarea class="w-5/6 bg-neutral-50/20"></Textarea>,
    },
    {
      name: "UL",
      href: "/atoms/ul",
      example: (
        <UL>
          <li>Milk</li>
          <li>Bread</li>
          <li>Eggs</li>
        </UL>
      ),
    },
  ],
  molecules: [
    {
      name: "Alert",
      href: "/molecules/alert",
      example: (
        <Alert isDismissable={false}>
          Done
        </Alert>
      ),
    },
    { name: "Card", href: "/molecules/card", example: <Card>Example</Card> },
    {
      name: "CheckboxCardGroup",
      href: "/molecules/checkbox-card-group",
      example: (
        <CheckboxCardGroup padding="sm">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      ),
    },
    {
      name: "Footer",
      href: "/molecules/footer",
      example: <InlineCode>{"<Footer>"}</InlineCode>,
    },
    {
      name: "FormField",
      href: "/molecules/form-field",
      example: (
        <FormField label="Email" inputRest={{ class: "bg-neutral-50/20" }} />
      ),
    },
    {
      name: "Modal",
      href: "/molecules/modal",
      example: <InlineCode>{"<Modal>"}</InlineCode>,
    },
    {
      name: "Navbar",
      href: "/molecules/navbar",
      example: <InlineCode>{"<Navbar>"}</InlineCode>,
    },
    {
      name: "PasswordInput",
      href: "/molecules/password-input",
      example: <PasswordInput class="bg-neutral-50/20" />,
    },
    {
      name: "RadioButtonGroup",
      href: "/molecules/radio-button-group",
      example: (
        <RadioButtonGroup name="example">
          <RadioButtonGroupItem value="one">
            One
          </RadioButtonGroupItem>
          <RadioButtonGroupItem value="two">
            Two
          </RadioButtonGroupItem>
        </RadioButtonGroup>
      ),
    },
    {
      name: "RadioButtonCardGroup",
      href: "/molecules/radio-button-card-group",
      example: (
        <RadioButtonCardGroup padding="sm">
          <RadioButtonCardGroupItem name="one" selectedItemName={signal}>
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem name="two" selectedItemName={signal}>
            Two
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      ),
    },
    {
      name: "Stepper",
      href: "/molecules/stepper",
      example: <Stepper size="sm" />,
    },
    {
      name: "Tabs",
      href: "/molecules/tabs",
      example: (
        <Tabs>
          <TabSection tabName="First">Content</TabSection>
          <TabSection tabName="Second">Content</TabSection>
        </Tabs>
      ),
    },
  ],
  helpers: [
    {
      name: "Container",
      href: "/helpers/container",
      example: <div class="h-2/3 w-full rounded bg-neutral-100/50"></div>,
    },
    {
      name: "Flex",
      href: "/helpers/flex",
      example: (
        <Flex class="h-2/3 w-full items-stretch justify-between gap-3">
          <div class="w-10 rounded bg-neutral-100/50 p-2"></div>
          <div class="w-10 rounded bg-neutral-100/50 p-2"></div>
          <div class="w-10 rounded bg-neutral-100/50 p-2"></div>
        </Flex>
      ),
    },
    {
      name: "Stack",
      href: "/helpers/stack",
      example: (
        <Stack class="w-full items-stretch gap-3">
          <div class="h-6 rounded bg-neutral-100/50 p-2"></div>
          <div class="h-6 rounded bg-neutral-100/50 p-2"></div>
          <div class="h-6 rounded bg-neutral-100/50 p-2"></div>
        </Stack>
      ),
    },
  ],
});

export default () => {
  const signal = useSignal(null);
  const components = getComponents(signal);

  return (
    <Stack class="gap-10">
      <header class="max-w-prose">
        <H1 class="text-6xl">
          RFUI
        </H1>
        <H2 class="text-2xl">
          A lightweight, DX-focused component library for Preact + Deno apps.
        </H2>
        <Text>
          <p>
            RFUI is opinionated. It doesn't try to please everyone, and it
            doesn't try to do too much. It prioritizes simplicity, developer
            experience, pits of success, avoiding dependencies, and{" "}
            <InlineCode>#useThePlatform</InlineCode>.
          </p>
          <p>
            Interested? Check out the <Link href="/about">About</Link>{" "}
            page or just <Link href="/getting-started">get started</Link>.
          </p>
        </Text>
      </header>
      <Flex class="gap-10">
        <section class="hidden xl:block">
          <ComponentsList shouldHideOverview />
        </section>
        <Stack class="gap-10 overflow-x-hidden">
          <Stack class="gap-7">
            <Category>Atoms</Category>
            <Flex class="flex-wrap gap-6">
              {components.atoms.map((component) => (
                <Item
                  name={component.name}
                  href={component.href}
                  example={component.example || null}
                />
              ))}
            </Flex>
          </Stack>
          <Stack class="gap-7">
            <Category>Molecules</Category>
            <Flex class="flex-wrap gap-6">
              {components.molecules.map((component) => (
                <Item
                  name={component.name}
                  href={component.href}
                  example={component.example || null}
                />
              ))}
            </Flex>
          </Stack>
          <Stack class="gap-7">
            <Category>Helpers</Category>
            <Flex class="flex-wrap gap-6">
              {components.helpers.map((component) => (
                <Item
                  name={component.name}
                  href={component.href}
                  example={component.example || null}
                />
              ))}
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

const Category = ({ children }: { children: ComponentChild }) => {
  return (
    <div class="flex-none text-4xl text-neutral-900">
      {children}
    </div>
  );
};

const Item = (
  { name, href, example }: {
    name: string;
    href: string;
    example: JSX.Element;
  },
) => {
  return (
    <Link underline="none" href={href} class="w-full sm:w-auto">
      <Card class="w-full bg-neutral-50/20 hover:shadow-lg sm:w-60 sm:hover:shadow-md">
        <CardBody>
          <Flex
            style={{
              height: 174,
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {example}
          </Flex>
        </CardBody>
        <CardFooter class="text-center">
          <code class={name.length > 20 ? "text-xs" : undefined}>{name}</code>
        </CardFooter>
      </Card>
    </Link>
  );
};
