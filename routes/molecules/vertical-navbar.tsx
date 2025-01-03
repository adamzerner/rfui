import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { VerticalNavbarBottom } from "@/components/molecules/vertical-navbar/vertical-navbar-bottom.tsx";
import { VerticalNavbarItem } from "@/components/molecules/vertical-navbar/vertical-navbar-item.tsx";
import { VerticalNavbarTop } from "@/components/molecules/vertical-navbar/vertical-navbar-top.tsx";
import { VerticalNavbar } from "@/islands/molecules/vertical-navbar/index.tsx";
import { VerticalNavbarSection } from "@/islands/molecules/vertical-navbar/vertical-navbar-section.tsx";

export default () => {
  const overviewNotes = (
    <Text>
      <p>
        A vertical navbar is a good option for more complex sites that have a
        lot of navigation items they want to display. See Nielsen Norman Group's
        {" "}
        <Link href="https://www.nngroup.com/articles/vertical-nav/">
          blog post
        </Link>{" "}
        for more information.
      </p>
      <p>
        Note: If you're using this component you'll probably want to structure
        your layout in a manner similar to this:
      </p>
      <CodeBlock
        language="tsx"
        code={`<section class="sm:flex">
  <VerticalNavbar route={route} />
  <Container class="grow pb-8">
    <Component />
  </Container>
</section>`}
      />
      <p>
        Note: This component doesn't work well with{" "}
        <Link href="/molecules/footer">
          <InlineCode>Footer</InlineCode>
        </Link>. You probably won't want to combine the two though.
      </p>
    </Text>
  );
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarItem href="/one" isActive={false}>
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/two" isActive={false}>
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/three" isActive={false}>
            Three
          </VerticalNavbarItem>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarItem href="/one" isActive={false}>
      One
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/two" isActive={false}>
      Two
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/three" isActive={false}>
      Three
    </VerticalNavbarItem>
  </VerticalNavbarTop>
</VerticalNavbar>`}
      />
    ),
  }, {
    title: "Active link",
    description: (
      <Text>
        <p>
          Set <InlineCode>isActive</InlineCode> to <InlineCode>true</InlineCode>
          {" "}
          if the link is for the URL that the user is currently on. Doing so
          will give some more visual weight to the element and disable the link.
          In practice you'll probably end up having something like this:
        </p>
        <CodeBlock language="tsx" code='isActive={route === "/one"}' />
      </Text>
    ),
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarItem href="/one" isActive={true}>
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/two" isActive={false}>
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/three" isActive={false}>
            Three
          </VerticalNavbarItem>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarItem href="/one" isActive={true}>
      One
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/two" isActive={false}>
      Two
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/three" isActive={false}>
      Three
    </VerticalNavbarItem>
  </VerticalNavbarTop>
</VerticalNavbar>`}
      />
    ),
  }, {
    title: "Sections",
    description: (
      <div>
        There is a <InlineCode>hasMarginUnderneath</InlineCode>{" "}
        property that comes in handy if you need to use a{" "}
        <InlineCode>VerticalNavbarSection</InlineCode> inside of a{" "}
        <InlineCode>VerticalNavbarBottom</InlineCode> component.
      </div>
    ),
    demo: (
      <VerticalNavbar class="!h-[400px]">
        <VerticalNavbarTop>
          <VerticalNavbarSection>
            <VerticalNavbarItem href="/one" isActive={false}>
              One
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/two" isActive={false}>
              Two
            </VerticalNavbarItem>
          </VerticalNavbarSection>
          <VerticalNavbarSection>
            <VerticalNavbarItem href="/three" isActive={false}>
              Three
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/four" isActive={false}>
              Four
            </VerticalNavbarItem>
          </VerticalNavbarSection>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarSection>
      <VerticalNavbarItem href="/one" isActive={false}>
        One
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/two" isActive={false}>
        Two
      </VerticalNavbarItem>
    </VerticalNavbarSection>
    <VerticalNavbarSection>
      <VerticalNavbarItem href="/three" isActive={false}>
        Three
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/four" isActive={false}>
        Four
      </VerticalNavbarItem>
    </VerticalNavbarSection>
  </VerticalNavbarTop>
</VerticalNavbar>`}
      />
    ),
  }, {
    title: "Heading",
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarSection heading="Heading">
            <VerticalNavbarItem href="/one" isActive={false}>
              One
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/two" isActive={false}>
              Two
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/three" isActive={false}>
              Three
            </VerticalNavbarItem>
          </VerticalNavbarSection>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarSection heading="Heading">
      <VerticalNavbarItem href="/one" isActive={false}>
        One
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/two" isActive={false}>
        Two
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/three" isActive={false}>
        Three
      </VerticalNavbarItem>
    </VerticalNavbarSection>
  </VerticalNavbarTop>
</VerticalNavbar>`}
      />
    ),
  }, {
    title: "Top and bottom",
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarItem href="/one" isActive={false}>
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/two" isActive={false}>
            Two
          </VerticalNavbarItem>
        </VerticalNavbarTop>
        <VerticalNavbarBottom>
          <VerticalNavbarItem href="/three" isActive={false}>
            Three
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/four" isActive={false}>
            Four
          </VerticalNavbarItem>
        </VerticalNavbarBottom>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarItem href="/one" isActive={false}>
      One
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/two" isActive={false}>
      Two
    </VerticalNavbarItem>
  </VerticalNavbarTop>
  <VerticalNavbarBottom>
    <VerticalNavbarItem href="/three" isActive={false}>
      Three
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/four" isActive={false}>
      Four
    </VerticalNavbarItem>
  </VerticalNavbarBottom>
</VerticalNavbar>`}
      />
    ),
  }, {
    title: "Icons",
    description: (
      <Text>
        <p>
          Note: <Link href="https://heroicons.com/">heroicons</Link>{" "}
          is a great resource.
        </p>
        <p>
          Note: since some icons have more whitespace than others, you might
          need to use relative positioning to nudge it up or down. Some thing
          like:
        </p>
        <CodeBlock
          language="tsx"
          code='icon={<IconOne class="relative top-1" />}'
        />
      </Text>
    ),
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarItem href="/one" isActive={false} icon={<IconOne />}>
            One
          </VerticalNavbarItem>
          <VerticalNavbarItem href="/two" isActive={false} icon={<IconTwo />}>
            Two
          </VerticalNavbarItem>
          <VerticalNavbarItem
            href="/three"
            isActive={false}
            icon={<IconThree />}
          >
            Three
          </VerticalNavbarItem>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarItem href="/one" isActive={false} icon={<IconOne />}>
      One
    </VerticalNavbarItem>
    <VerticalNavbarItem href="/two" isActive={false} icon={<IconTwo />}>
      Two
    </VerticalNavbarItem>
    <VerticalNavbarItem
      href="/three"
      isActive={false}
      icon={<IconThree />}
    >
      Three
    </VerticalNavbarItem>
  </VerticalNavbarTop>
</VerticalNavbar>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "background",
      required: false,
      type: '"neutral" | "none"',
      default: '"neutral"',
      notes: null,
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: 'Omit<ComponentProps<"nav">, "size">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>VerticalNavbar</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/vertical-navbar.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<nav class={containerClass} {...restWithoutClass}>
  ...
</nav>`}
          />
        </div>
      ),
    }],
  }, {
    title: "VerticalNavbarTop",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarBottom",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarSection",
    props: [{
      name: "heading",
      required: false,
      type: "string",
      default: null,
      notes: null,
    }, {
      name: "hasMarginUnderneath",
      required: false,
      type: "boolean",
      default: "false",
      notes: (
        <div>
          This property is useful if you need to put a{" "}
          <InlineCode>VerticalNavbarSection</InlineCode> inside of a{" "}
          <InlineCode>VerticalNavbarBottom</InlineCode> component.
        </div>
      ),
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarItem",
    props: [{
      name: "href",
      required: true,
      type: "string",
      default: null,
      notes: null,
    }, {
      name: "isActive",
      required: true,
      type: "boolean",
      default: null,
      notes: "Set this to be true if this link matches the current URL.",
    }, {
      name: "shouldOpenInNewTab",
      required: false,
      type: "boolean",
      default: "false",
      notes: (
        <div>
          See the <Link href="/atoms/link#example-new-tab">docs</Link>{" "}
          for the corresponding property in the <InlineCode>Link</InlineCode>
          {" "}
          component.
        </div>
      ),
    }, {
      name: "shouldIncludeNewTabIcon",
      required: false,
      type: "boolean",
      default: "false",
      notes: (
        <div>
          See the <Link href="/atoms/link#example-new-tab">docs</Link>{" "}
          for the corresponding property in the <InlineCode>Link</InlineCode>
          {" "}
          component.
        </div>
      ),
    }, {
      name: "icon",
      required: false,
      type: "ComponentChild",
      default: null,
      notes: "A 20x20 icon to be placed to the left of the text.",
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="VerticalNavbar"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/vertical-navbar.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};

const IconOne = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
    />
  </svg>
);

const IconTwo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const IconThree = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
    />
  </svg>
);
