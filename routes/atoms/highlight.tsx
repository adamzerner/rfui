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
      <div>
        <div>
          Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
        </div>
      </div>
    </Stack>
  );
};
