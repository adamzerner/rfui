import { Highlight } from "@/components/atoms/highlight.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/highlight.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/highlight.tsx
        </Link>
      </div>
      <Stack class="gap-5">
        <h1 class="text-3xl">
          Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
        </h1>
        <div>
          Lorem ipsum{" "}
          <Highlight>dolor sit amet</Highlight>, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.{" "}
          <Highlight>Duis aute irure</Highlight>{" "}
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Stack>
    </Stack>
  );
};
