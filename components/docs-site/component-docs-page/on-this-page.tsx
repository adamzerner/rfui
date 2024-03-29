import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export const OnThisPage = ({ sectionTitles }: { sectionTitles: string[] }) => {
  return (
    <nav>
      <div class="mb-4 font-bold text-neutral-700">On this page</div>
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
