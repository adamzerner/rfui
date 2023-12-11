import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/blockquote.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/blockquote.tsx
        </Link>
      </div>
      <Examples title="Default">
        <Blockquote>All models are wrong. Some are useful.</Blockquote>
      </Examples>
    </Stack>
  );
};
