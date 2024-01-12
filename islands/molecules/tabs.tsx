import { Signal, useSignal } from "@preact/signals";
import type { ComponentChild } from "preact";
import { Flex } from "../helpers/flex.tsx";

export type TabsType = {
  tabNames: string[];
  children: ComponentChild;
};

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
  { tabNames, children }: TabsType,
) => {
  const activeTab = useSignal<string>(tabNames[0]);

  return (
    <div>
      <Flex>
        {tabNames.map((tabName) => (
          <Tab tabName={tabName} activeTab={activeTab} />
        ))}
      </Flex>
      <div class="mt-6">{children}</div>
    </div>
  );
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

export const TabSection = () => {
};
