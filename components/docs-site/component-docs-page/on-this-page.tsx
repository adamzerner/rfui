import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { titleToHref } from "@/utilities/title-to-href.ts";

type OnThisPageType = {
  examplesSectionTitles: string[];
  propsTableTitles: string[];
};

export const OnThisPage = (
  { examplesSectionTitles, propsTableTitles }: OnThisPageType,
) => {
  return (
    <nav class="text-neutral-900">
      <div class="mb-4 font-bold text-neutral-700">On this page</div>
      <Stack class="gap-2">
        <Link
          inPageLink
          underline="hover"
          href="#overview"
        >
          Overview
        </Link>
        <div>Examples</div>
        {examplesSectionTitles.map((examplesSectionTitle) => (
          <Link
            inPageLink
            underline="hover"
            href={`#example-${titleToHref(examplesSectionTitle)}`}
            class="ml-4"
          >
            {examplesSectionTitle}
          </Link>
        ))}
        <div>Props</div>
        {propsTableTitles.map((propsTableTitle, i) => (
          <Link
            inPageLink
            underline="hover"
            class="ml-4"
            href={i === 0 ? "#props" : `#props-${titleToHref(propsTableTitle)}`}
          >
            {propsTableTitle}
          </Link>
        ))}
      </Stack>
    </nav>
  );
};
