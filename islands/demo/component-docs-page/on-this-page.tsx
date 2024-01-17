import { Link } from "@/islands/atoms/link.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";

export const OnThisPage = ({ sectionTitles }: { sectionTitles: string[] }) => {
  return (
    <nav>
      <div class="font-bold text-neutral-700 mb-4">On this page</div>
      <Stack class="gap-2">
        {sectionTitles.map((sectionTitle) => (
          <Link
            inPageLink
            underline="hover"
            href={`#${sectionTitle.toLowerCase().split(/\s+/).join("-")}`}
          >
            {sectionTitle}
          </Link>
        ))}
        <Link inPageLink underline="hover" href="#props">
          Props
        </Link>
      </Stack>
    </nav>
  );
};
