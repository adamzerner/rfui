import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/text.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/text.tsx
        </Link>
      </div>
      <Examples title="Small">
        <Text size="sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            odio facilisis mauris sit.
          </p>
          <p>
            Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
            maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
            quisque egestas diam in.
          </p>
        </Text>
      </Examples>
      <Examples title="Medium">
        <Text size="md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            odio facilisis mauris sit.
          </p>
          <p>
            Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
            maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
            quisque egestas diam in.
          </p>
        </Text>
      </Examples>
      <Examples title="Large">
        <Text size="lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            odio facilisis mauris sit.
          </p>
          <p>
            Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
            maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
            quisque egestas diam in.
          </p>
        </Text>
      </Examples>
    </Stack>
  );
};
