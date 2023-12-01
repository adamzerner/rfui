import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack gap="8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/link.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/link.tsx
        </Link>
      </div>
      <Examples title="Underline">
        <Flex gap="3">
          <Link underline="always" href="https://example.com">always</Link>
          <Link underline="hover" href="https://example.com">hover</Link>
          <Link underline="none" href="https://example.com">none</Link>
        </Flex>
      </Examples>
      <Examples title="New tab">
        <Flex gap="3">
          <Link _newTab href="https://example.com" underline="always">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="hover">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="none">
            _newTab
          </Link>
        </Flex>
        <Flex gap="3">
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="always"
          >
            _newTab _includeNewTabIcon
          </Link>
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="hover"
          >
            _newTab _includeNewTabIcon
          </Link>
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="none"
          >
            _newTab _includeNewTabIcon
          </Link>
        </Flex>
      </Examples>
    </Stack>
  );
};
