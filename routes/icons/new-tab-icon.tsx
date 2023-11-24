import { Link } from "@/components/atoms/link.tsx";
import { NewTabIcon } from "@/components/icons/new-tab-icon.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/icons/new-tab-icon.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/icons/new-tab-icon.tsx
        </Link>
      </div>
      <div>
        <NewTabIcon />
      </div>
    </div>
  );
};
