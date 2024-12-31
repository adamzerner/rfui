import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
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
  const containerClass = `text-neutral-900${
    isSticky &&
    " sticky top-6 max-h-[90vh] max-w-[200px] overflow-y-auto text-neutral-900"
  }`;

  return (
    <nav class={containerClass}>
      <div class="mb-4 font-bold text-neutral-700">Components</div>
      <Stack class="gap-2">
        {!shouldHideOverview && (
          <Link
            underline="hover"
            href="/"
          >
            Overview
          </Link>
        )}
        <div>Atoms</div>
        {components.atoms.map((component) => (
          <Link
            underline="hover"
            href={component.href}
            class="ml-4 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {component.name}
          </Link>
        ))}
        <div>Molecules</div>
        {components.molecules.map((component) => (
          <Link
            underline="hover"
            href={component.href}
            class="ml-4 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {component.name}
          </Link>
        ))}
        <div>Helpers</div>
        {components.helpers.map((component) => (
          <Link
            underline="hover"
            href={component.href}
            class="ml-4 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {component.name}
          </Link>
        ))}
      </Stack>
    </nav>
  );
};
