import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import {
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "@/components/molecules/footer.tsx";

export default () => {
  const notes = (
    <Stack class="gap-3">
      <p>
        Check out{" "}
        <Link href="https://www.nngroup.com/videos/footers/">
          Footers Are Underrated
        </Link>{" "}
        and{" "}
        <Link href="https://www.nngroup.com/articles/footers/">
          Footers 101
        </Link>{" "}
        from NNGroup. Footers are awesome. Go wild!
      </p>
      <p>
        Note: in the examples below the spacing is a little off. This won't
        happen in practice though if you do something like this:
      </p>
      <CodeBlock
        language="tsx"
        code={`export default () => {
  return (
    <>
      <Navbar route={route} />
      <Container size="xl">
        <Component />
      </Container>
      <Footer />
    </>
  );
}
`}
      />
    </Stack>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
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
    exampleCode: (
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
    example: (
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
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Footer background="none">
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
    example: (
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
    exampleCode: (
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
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/footer.tsx">
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
  const footerColumnProps = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const footerHeadingProps = [{
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
  }];
  const footerItemProps = [{
    name: "href",
    required: true,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Footer"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/footer.tsx"
        importStatement={`import { 
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem
} from "rfui";`}
      >
        <Example>{sections[0].example}</Example>
        <Notes>{notes}</Notes>
      </Header>
      {sections.map((section) => (
        <section>
          <H2 inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}>
            {section.title}
          </H2>
          {section.description &&
            (
              <Text size="sm" class="mb-6">
                {section.description}
              </Text>
            )}
          <Card width="full" class="mb-4">{section.example}</Card>
          {section.exampleCode}
        </section>
      ))}
      <Props>
        {props.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
      <Props subComponentTitle="FooterColumn">
        {footerColumnProps.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
      <Props subComponentTitle="FooterHeading">
        {footerHeadingProps.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
      <Props subComponentTitle="FooterItem">
        {footerItemProps.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
    </ComponentDocsPage>
  );
};
