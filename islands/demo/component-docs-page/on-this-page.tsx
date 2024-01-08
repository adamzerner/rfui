import { Link } from "@/islands/atoms/link.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";

export const OnThisPage = ({ sectionTitles }: { sectionTitles: string[] }) => {
  return (
    <nav class="pb-8 border-b border-b-neutral-100">
      <div class="font-bold text-neutral-700 mb-4">On this page</div>
      <Stack class="gap-2">
        {sectionTitles.map((sectionTitle) => (
          <Link
            underline="hover"
            href={`#${sectionTitle.toLowerCase().split(/\s+/).join("-")}`}
          >
            {sectionTitle}
          </Link>
        ))}
        <Link underline="hover" href="#props">
          Props
        </Link>
      </Stack>
    </nav>
  );
};
