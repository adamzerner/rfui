// deno-lint-ignore-file no-explicit-any
import { Signal, useSignal } from "@preact/signals";
import type { ComponentChild, JSX } from "preact";
import { Flex } from "../helpers/flex.tsx";

export type TabsType = {
  tabNames: string[];
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDivElement>;

/*

TODO:
- UI of tabs
- UI of tab section
- Switching between tabs

*/

/** *
 * @function Tabs
 *
 * @see {@link https://rfui.deno.dev/molecules/tabs}
 *
 * @example
 * <Tabs />
 */
export const Tabs = (
  { tabNames, children, ...rest }: TabsType,
) => {
  const activeTab = useSignal<string>(tabNames[0]);
  const activeTabSection = getActiveTabSection(children, activeTab.value);

  return (
    <div {...rest}>
      <Flex>
        {tabNames.map((tabName) => (
          <Tab tabName={tabName} activeTab={activeTab} />
        ))}
      </Flex>
      <div class="mt-6">{activeTabSection}</div>
    </div>
  );
};

const getActiveTabSection = (props: any, tabName: string) => {
  const children = props.props.children;

  if (!Array.isArray(children)) {
    return children;
  }

  return children.find((child) => child.props.tabName === tabName);
};

const Tab = (
  { tabName, activeTab }: { tabName: string; activeTab: Signal<string> },
) => {
  const handleClick = () => {
    activeTab.value = tabName;
  };
  const isActive = tabName === activeTab.value;
  let containerClass =
    "border-b w-full text-center py-4 cursor-pointer border-neutral-500";

  if (isActive) {
    containerClass += " border-b-2 text-neutral-900";
  } else {
    containerClass += " text-neutral-500";
  }

  return <div class={containerClass} onClick={handleClick}>{tabName}</div>;
};

export const TabSection = (
  { tabName, children }: { tabName: string; children: ComponentChild },
) => {
  return <>{children}</>;
};
