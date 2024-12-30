import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export const OnThisPage = (
  { examplesSectionTitles }: { examplesSectionTitles: string[] },
) => {
  const getSectionTitleHref = (sectionTitle: string) =>
    `#${sectionTitle.toLowerCase().split(/\s+/).join("-")}`;

  return (
    <nav class="sticky top-8 text-neutral-900">
      <div class="mb-4 font-bold text-neutral-700">On this page</div>
      <Stack class="gap-2">
        <div>Examples</div>
        {examplesSectionTitles.map((examplesSectionTitle) => (
          <Link
            inPageLink
            underline="hover"
            href={getSectionTitleHref(examplesSectionTitle)}
            class="ml-4"
          >
            {examplesSectionTitle}
          </Link>
        ))}
        <Link inPageLink underline="hover" href="#props">
          Props
        </Link>
      </Stack>
    </nav>
  );
};
