import { Badge } from "@/islands/atoms/badge.tsx";
import { Blockquote } from "@/islands/atoms/blockquote.tsx";
import { Button } from "@/islands/atoms/button.tsx";
import { Checkbox } from "@/islands/atoms/checkbox.tsx";
import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { Highlight } from "@/islands/atoms/highlight.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Input } from "@/islands/atoms/input.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { OL } from "@/islands/atoms/ol.tsx";
import { RadioButton } from "@/islands/atoms/radio-button.tsx";
import { Select } from "@/islands/atoms/select.tsx";
import { Switch } from "@/islands/atoms/switch.tsx";
import { Table } from "@/islands/atoms/table.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Textarea } from "@/islands/atoms/textarea.tsx";
import { UL } from "@/islands/atoms/ul.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Alert } from "@/islands/molecules/alert.tsx";
import { Card, CardBody, CardFooter } from "@/islands/molecules/card.tsx";
import { FormField } from "@/islands/molecules/form-field.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";
import { ComponentChild, JSX } from "preact";

const components = {
  atoms: [
    { name: "Badge", href: "/atoms/badge", example: <Badge>new</Badge> },
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
      example: <Button>Submit</Button>,
    },
    { name: "Checkbox", href: "/atoms/checkbox", example: <Checkbox /> },
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
          The <Highlight>map</Highlight> is not the territory.
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
    { name: "Input", href: "/atoms/input", example: <Input /> },
    {
      name: "Link",
      href: "/atoms/link",
      example: (
        <div class="underline underline-offset-2 text-primary-700 cursor-pointer">
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
        <Select>
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
      example: <Textarea class="w-5/6"></Textarea>,
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
      example: <InlineCode class="text-xs">{`<CheckboxCardGroup>`}</InlineCode>,
    },
    {
      name: "Footer",
      href: "/molecules/footer",
      example: <InlineCode>{"<Footer>"}</InlineCode>,
    },
    {
      name: "FormField",
      href: "/molecules/form-field",
      example: <FormField label="Email" />,
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
      example: <PasswordInput />,
    },
    {
      name: "RadioButtonCardGroup",
      href: "/molecules/radio-button-card-group",
      example: (
        <InlineCode class="text-xs">{`<RadioButtonCardGroup>`}</InlineCode>
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
      example: <InlineCode class="text-xs">{`<Tabs>`}</InlineCode>,
    },
  ],
  helpers: [
    {
      name: "Container",
      href: "/helpers/container",
      example: <InlineCode>{"<Container>"}</InlineCode>,
    },
    {
      name: "Flex",
      href: "/helpers/flex",
      example: <InlineCode>{"<Flex>"}</InlineCode>,
    },
    {
      name: "Stack",
      href: "/helpers/stack",
      example: <InlineCode>{"<Stack>"}</InlineCode>,
    },
  ],
};

export default () => {
  return (
    <Stack class="gap-10 mt-9">
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
      <Card
        padding="sm"
        class="hover:shadow-lg sm:hover:shadow-md w-full sm:w-60"
      >
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
          <code class={name.length > 15 ? "text-xs" : undefined}>{name}</code>
        </CardFooter>
      </Card>
    </Link>
  );
};
