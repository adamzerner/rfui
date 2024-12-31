import {
  LinkItemType,
  NavigationLinks,
} from "@/components/molecules/navigation-links.tsx";
import { getComponents } from "@/routes/index.tsx";
import { useSignal } from "@preact/signals";

type ComponentsList = {
  isSticky?: boolean;
  shouldHideOverview?: boolean;
};

export const ComponentsList = (
  { isSticky = false, shouldHideOverview = false }: ComponentsList,
) => {
  const signal = useSignal(null);
  const components = getComponents(signal);
  const containerClass = isSticky
    ? "sticky top-6 max-h-[90vh] max-w-[200px] overflow-y-auto text-neutral-900"
    : undefined;
  const linkItems: LinkItemType[] = [
    { name: "Components", isHeader: true },
    {
      name: "Atoms",
      children: components.atoms.map((component) => ({
        name: component.name,
        href: component.href,
      })),
    },
    {
      name: "Molecules",
      children: components.molecules.map((component) => ({
        name: component.name,
        href: component.href,
      })),
    },
    {
      name: "Helpers",
      children: components.helpers.map((component) => ({
        name: component.name,
        href: component.href,
      })),
    },
  ];

  if (!shouldHideOverview) {
    linkItems.splice(1, 0, { name: "Overview", href: "/" });
  }

  return <NavigationLinks linkItems={linkItems} class={containerClass} />;
};
