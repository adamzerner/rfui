import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  Footer,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "@/components/molecules/footer.tsx";

export default () => {
  const overviewNotes = (
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
        from Nielsen Norman Group. Footers are awesome. Go wild!
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
      <p>
        Note: check out this{" "}
        <Link href="https://css-tricks.com/couple-takes-sticky-footer/">
          CSS Tricks article
        </Link>{" "}
        on how to get a footer that alawys stays at the bottom of the page
        (something you'll probably want). My preferred approach is to utilize
        flexbox by wrapping the <InlineCode>Navar</InlineCode>,{" "}
        <InlineCode>Container</InlineCode> and <InlineCode>Footer</InlineCode>
        {" "}
        in a <InlineCode>Stack</InlineCode> like so:
      </p>
      <CodeBlock
        language="tsx"
        code={`export default () => {
  return (
    <Stack class="min-h-screen">
      <Navbar route={route} />
      <Container size="xl" class="grow">
        <Component />
      </Container>
      <Footer />
    </Stack>
  );
}
`}
      />
    </Stack>
  );
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
  const propsTables = [{
    title: null,
    props: [{
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
      type: 'Omit<ComponentProps<"footer">, "size">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Footer</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<footer>"}</InlineCode>{" "}
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
    }],
  }, {
    title: "FooterColumn",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "FooterHeading",
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
    }],
  }, {
    title: "FooterItem",
    props: [{
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Footer"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/footer.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
