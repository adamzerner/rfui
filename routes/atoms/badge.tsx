import { Badge } from "@/components/atoms/badge.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { LeftNav } from "@/routes/index.tsx";

export default () => {
  return (
    <Flex class="mt-9 gap-11">
      <LeftNav />
      <Main />
      <OnThisPage />
    </Flex>
  );
};

const Main = () => {
  return (
    <main class="flex-1">
      <section>
        <H1 class="!mt-0">Badge</H1>
        <Text>
          <Link
            href="https://github.com/adamzerner/rfui/blob/master/components/atoms/badge.tsx"
            _includeNewTabIcon
            _newTab
            class="inline"
          >
            Source code
          </Link>
        </Text>
        <CodeBlock class="mt-6">
          {`import { Badge } from "rfui";`}
        </CodeBlock>
      </section>
      <section>
        <div>
          <H2>Basic</H2>
          <Card>
            <Badge>Basic</Badge>
          </Card>
          <CodeBlock class="mt-4">
            {`<Badge>Basic</Badge>`}
          </CodeBlock>
        </div>
        <div>
          <H2>Type</H2>
          <Text size="sm" class="!leading-loose mb-6">
            <p>
              Set <InlineCode>type</InlineCode> to either{" "}
              <InlineCode>"neutral"</InlineCode>,{" "}
              <InlineCode>"info"</InlineCode>,{" "}
              <InlineCode>"success"</InlineCode>,{" "}
              <InlineCode>"warning"</InlineCode>, or{" "}
              <InlineCode>"danger"</InlineCode>. Defaults to{" "}
              <InlineCode>"neutral"</InlineCode>.
            </p>
          </Text>
          <Card>
            <Flex class="gap-3">
              <Badge type="neutral">neutral</Badge>
              <Badge type="info">info</Badge>
              <Badge type="success">success</Badge>
              <Badge type="warning">warning</Badge>
              <Badge type="danger">danger</Badge>
            </Flex>
          </Card>
          <CodeBlock class="mt-4">
            {`<Flex class="gap-3">
  <Badge type="neutral">neutral</Badge>
  <Badge type="info">info</Badge>
  <Badge type="success">success</Badge>
  <Badge type="warning">warning</Badge>
  <Badge type="danger">danger</Badge>
</Flex>
`}
          </CodeBlock>
        </div>
        <div>
          <H2>Size</H2>
          <Text size="sm" class="!leading-loose mb-6">
            <p>
              Set <InlineCode>size</InlineCode> to either{" "}
              <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode>, or
              {" "}
              <InlineCode>"lg"</InlineCode>. Defaults to{" "}
              <InlineCode>"md"</InlineCode>.
            </p>
          </Text>
          <Card>
            <Stack class="gap-5">
              <Flex class="gap-3">
                <Badge type="neutral" size="sm">neutral</Badge>
                <Badge type="info" size="sm">info</Badge>
                <Badge type="success" size="sm">success</Badge>
                <Badge type="warning" size="sm">warning</Badge>
                <Badge type="danger" size="sm">danger</Badge>
              </Flex>
              <Flex class="gap-3">
                <Badge type="neutral" size="md">neutral</Badge>
                <Badge type="info" size="md">info</Badge>
                <Badge type="success" size="md">success</Badge>
                <Badge type="warning" size="md">warning</Badge>
                <Badge type="danger" size="md">danger</Badge>
              </Flex>
              <Flex class="gap-3">
                <Badge type="neutral" size="lg">neutral</Badge>
                <Badge type="info" size="lg">info</Badge>
                <Badge type="success" size="lg">success</Badge>
                <Badge type="warning" size="lg">warning</Badge>
                <Badge type="danger" size="lg">danger</Badge>
              </Flex>
            </Stack>
          </Card>
          <CodeBlock class="mt-4">
            {`<Stack class="gap-5">
  <Flex class="gap-3">
    <Badge type="neutral" size="sm">neutral</Badge>
    <Badge type="info" size="sm">info</Badge>
    <Badge type="success" size="sm">success</Badge>
    <Badge type="warning" size="sm">warning</Badge>
    <Badge type="danger" size="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" size="md">neutral</Badge>
    <Badge type="info" size="md">info</Badge>
    <Badge type="success" size="md">success</Badge>
    <Badge type="warning" size="md">warning</Badge>
    <Badge type="danger" size="md">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" size="lg">neutral</Badge>
    <Badge type="info" size="lg">info</Badge>
    <Badge type="success" size="lg">success</Badge>
    <Badge type="warning" size="lg">warning</Badge>
    <Badge type="danger" size="lg">danger</Badge>
  </Flex>
</Stack>
`}
          </CodeBlock>
        </div>
        <div>
          <H2>Rounded</H2>
          <Text size="sm" class="!leading-loose mb-6">
            <p>
              Set <InlineCode>rounded</InlineCode> to either{" "}
              <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,
              {" "}
              <InlineCode>"lg"</InlineCode>, or{" "}
              <InlineCode>"full"</InlineCode>. Defaults to{" "}
              <InlineCode>"sm"</InlineCode>.
            </p>
          </Text>
          <Card>
            <Stack class="gap-5">
              <Flex class="gap-3">
                <Badge type="neutral" rounded="square">neutral</Badge>
                <Badge type="info" rounded="square">info</Badge>
                <Badge type="success" rounded="square">success</Badge>
                <Badge type="warning" rounded="square">warning</Badge>
                <Badge type="danger" rounded="square">danger</Badge>
              </Flex>
              <Flex class="gap-3">
                <Badge type="neutral" rounded="sm">neutral</Badge>
                <Badge type="info" rounded="sm">info</Badge>
                <Badge type="success" rounded="sm">success</Badge>
                <Badge type="warning" rounded="sm">warning</Badge>
                <Badge type="danger" rounded="sm">danger</Badge>
              </Flex>
              <Flex class="gap-3">
                <Badge type="neutral" rounded="lg">neutral</Badge>
                <Badge type="info" rounded="lg">info</Badge>
                <Badge type="success" rounded="lg">success</Badge>
                <Badge type="warning" rounded="lg">warning</Badge>
                <Badge type="danger" rounded="lg">danger</Badge>
              </Flex>
              <Flex class="gap-3">
                <Badge type="neutral" rounded="full">neutral</Badge>
                <Badge type="info" rounded="full">info</Badge>
                <Badge type="success" rounded="full">success</Badge>
                <Badge type="warning" rounded="full">warning</Badge>
                <Badge type="danger" rounded="full">danger</Badge>
              </Flex>
            </Stack>
          </Card>
          <CodeBlock class="mt-4">
            {`<Stack class="gap-5">
  <Flex class="gap-3">
    <Badge type="neutral" rounded="square">neutral</Badge>
    <Badge type="info" rounded="square">info</Badge>
    <Badge type="success" rounded="square">success</Badge>
    <Badge type="warning" rounded="square">warning</Badge>
    <Badge type="danger" rounded="square">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="sm">neutral</Badge>
    <Badge type="info" rounded="sm">info</Badge>
    <Badge type="success" rounded="sm">success</Badge>
    <Badge type="warning" rounded="sm">warning</Badge>
    <Badge type="danger" rounded="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="lg">neutral</Badge>
    <Badge type="info" rounded="lg">info</Badge>
    <Badge type="success" rounded="lg">success</Badge>
    <Badge type="warning" rounded="lg">warning</Badge>
    <Badge type="danger" rounded="lg">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="full">neutral</Badge>
    <Badge type="info" rounded="full">info</Badge>
    <Badge type="success" rounded="full">success</Badge>
    <Badge type="warning" rounded="full">warning</Badge>
    <Badge type="danger" rounded="full">danger</Badge>
  </Flex>
</Stack>
`}
          </CodeBlock>
        </div>
      </section>
    </main>
  );
};

const OnThisPage = () => {
  return <nav>On this page</nav>;
};
