import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import {
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "@/islands/molecules/footer.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Footer>
        <FooterColumn>
          <FooterHeading>About</FooterHeading>
          <FooterItem href="/about">About</FooterItem>
          <FooterItem href="/philosophy">Philosophy</FooterItem>
          <FooterItem href="https://github.com/users/adamzerner/projects/2">
            Roadmap
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Docs</FooterHeading>
          <FooterItem href="/">Components</FooterItem>
          <FooterItem href="/getting-started">Getting started</FooterItem>
          <FooterItem href="/tutorial">Tutorial</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Code</FooterHeading>
          <FooterItem href="https://github.com/adamzerner/rfui">
            GitHub
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
            Changelog
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
            Contributing
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
            License
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Help</FooterHeading>
          <FooterItem href="mailto:adamzerner@protonmail.com">
            Contact
          </FooterItem>
          <FooterItem href="/faq">FAQ</FooterItem>
        </FooterColumn>
      </Footer>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Footer>
  <FooterColumn>
    <FooterHeading>About</FooterHeading>
    <FooterItem href="/about">About</FooterItem>
    <FooterItem href="/philosophy">Philosophy</FooterItem>
    <FooterItem href="https://github.com/users/adamzerner/projects/2">
      Roadmap
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Docs</FooterHeading>
    <FooterItem href="/">Components</FooterItem>
    <FooterItem href="/getting-started">Getting started</FooterItem>
    <FooterItem href="/tutorial">Tutorial</FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Code</FooterHeading>
    <FooterItem href="https://github.com/adamzerner/rfui">
      GitHub
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
      Changelog
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
      Contributing
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
      License
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Help</FooterHeading>
    <FooterItem href="mailto:adamzerner@protonmail.com">
      Contact
    </FooterItem>
    <FooterItem href="/faq">FAQ</FooterItem>
  </FooterColumn>
</Footer>`}
      />
    ),
  }, {
    title: "Empty background",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>background</InlineCode> to{" "}
          <InlineCode>"none"</InlineCode>.
        </div>
        <div>
          Note: A dark color is{" "}
          <Link href="https://ux.stackexchange.com/q/17253/39046">
            often preferred
          </Link>{" "}
          as a way to distinguish the main content from the footer content.
        </div>
      </Stack>
    ),
    example: () => (
      <Footer background="none">
        <FooterColumn>
          <FooterHeading background="none">About</FooterHeading>
          <FooterItem href="/about">About</FooterItem>
          <FooterItem href="/philosophy">Philosophy</FooterItem>
          <FooterItem href="https://github.com/users/adamzerner/projects/2">
            Roadmap
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading background="none">Docs</FooterHeading>
          <FooterItem href="/">Components</FooterItem>
          <FooterItem href="/getting-started">Getting started</FooterItem>
          <FooterItem href="/tutorial">Tutorial</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading background="none">Code</FooterHeading>
          <FooterItem href="https://github.com/adamzerner/rfui">
            GitHub
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
            Changelog
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
            Contributing
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
            License
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading background="none">Help</FooterHeading>
          <FooterItem href="mailto:adamzerner@protonmail.com">
            Contact
          </FooterItem>
          <FooterItem href="/faq">FAQ</FooterItem>
        </FooterColumn>
      </Footer>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Footer background="none">
  <FooterColumn>
    <FooterHeading>About</FooterHeading>
    <FooterItem href="/about">About</FooterItem>
    <FooterItem href="/philosophy">Philosophy</FooterItem>
    <FooterItem href="https://github.com/users/adamzerner/projects/2">
      Roadmap
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Docs</FooterHeading>
    <FooterItem href="/">Components</FooterItem>
    <FooterItem href="/getting-started">Getting started</FooterItem>
    <FooterItem href="/tutorial">Tutorial</FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Code</FooterHeading>
    <FooterItem href="https://github.com/adamzerner/rfui">
      GitHub
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
      Changelog
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
      Contributing
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
      License
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Help</FooterHeading>
    <FooterItem href="mailto:adamzerner@protonmail.com">
      Contact
    </FooterItem>
    <FooterItem href="/faq">FAQ</FooterItem>
  </FooterColumn>
</Footer>`}
      />
    ),
  }, {
    title: "Without default margin",
    description: (
      <Stack class="gap-3">
        <div>
          By default, there is a top margin applied to the footer. This is
          helpful by providing a sensible default. However, you can override
          this default margin if you'd like as shown below.
        </div>
        <div>
          The example below uses{" "}
          <Link href="https://tailwindcss.com/docs/configuration#important-modifier">
            Tailwind's imporant modifier
          </Link>{" "}
          to make sure that the custom margin takes precedence over the original
          margin. You may need or want to take a different approach.
        </div>
      </Stack>
    ),
    example: () => (
      <Footer class="!mt-0">
        <FooterColumn>
          <FooterHeading>About</FooterHeading>
          <FooterItem href="/about">About</FooterItem>
          <FooterItem href="/philosophy">Philosophy</FooterItem>
          <FooterItem href="https://github.com/users/adamzerner/projects/2">
            Roadmap
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Docs</FooterHeading>
          <FooterItem href="/">Components</FooterItem>
          <FooterItem href="/getting-started">Getting started</FooterItem>
          <FooterItem href="/tutorial">Tutorial</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Code</FooterHeading>
          <FooterItem href="https://github.com/adamzerner/rfui">
            GitHub
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
            Changelog
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
            Contributing
          </FooterItem>
          <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
            License
          </FooterItem>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Help</FooterHeading>
          <FooterItem href="mailto:adamzerner@protonmail.com">
            Contact
          </FooterItem>
          <FooterItem href="/faq">FAQ</FooterItem>
        </FooterColumn>
      </Footer>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Footer class="!mt-0">
  <FooterColumn>
    <FooterHeading>About</FooterHeading>
    <FooterItem href="/about">About</FooterItem>
    <FooterItem href="/philosophy">Philosophy</FooterItem>
    <FooterItem href="https://github.com/users/adamzerner/projects/2">
      Roadmap
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Docs</FooterHeading>
    <FooterItem href="/">Components</FooterItem>
    <FooterItem href="/getting-started">Getting started</FooterItem>
    <FooterItem href="/tutorial">Tutorial</FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Code</FooterHeading>
    <FooterItem href="https://github.com/adamzerner/rfui">
      GitHub
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
      Changelog
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
      Contributing
    </FooterItem>
    <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
      License
    </FooterItem>
  </FooterColumn>
  <FooterColumn>
    <FooterHeading>Help</FooterHeading>
    <FooterItem href="mailto:adamzerner@protonmail.com">
      Contact
    </FooterItem>
    <FooterItem href="/faq">FAQ</FooterItem>
  </FooterColumn>
</Footer>`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    notes: (
      <div>
        Set this to the same value as the <InlineCode>Container</InlineCode>.
      </div>
    ),
  }, {
    name: "background",
    required: false,
    type: '"neutral" | "none"',
    default: '"neutral"',
    notes: (
      <div>
        A dark color is{" "}
        <Link href="https://ux.stackexchange.com/q/17253/39046">
          often preferred
        </Link>{" "}
        as a way to distinguish the main content from the footer content.
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Footer</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<footer>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/footer.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<footer class={containerClass} {...restWithoutClass}>
  {children}
</footer>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      componentName="Footer"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/footer.tsx"
      sections={sections}
      props={props}
    />
  );
};
