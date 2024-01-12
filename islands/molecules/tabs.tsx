// deno-lint-ignore-file no-explicit-any
import { Signal, useSignal } from "@preact/signals";
import type { ComponentChild, JSX } from "preact";
import { Flex } from "../helpers/flex.tsx";

export type TabsType = {
  fullWidth?: boolean;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDivElement>;

/** *
 * @function Tabs
 *
 * @see {@link https://rfui.deno.dev/molecules/tabs}
 *
 * @example
 * <Tabs />
 */
export const Tabs = (
  { fullWidth = false, children, ...rest }: TabsType,
) => {
  const tabNames = getTabNames(children);
  const activeTab = useSignal<string>(tabNames[0]);
  const activeTabSection = getActiveTabSection(children, activeTab.value);

  return (
    <div {...rest}>
      <Flex class="border-b border-b-neutral-500">
        {tabNames.map((tabName) => (
          <Tab tabName={tabName} activeTab={activeTab} fullWidth={fullWidth} />
        ))}
      </Flex>
      <div class="mt-6">{activeTabSection}</div>
    </div>
  );
};

const getTabNames = (props: any) => {
  const children = props.props.children;

  if (!Array.isArray(children)) {
    return [children.props.tabName];
  }

  return children.map((child) => child.props.tabName);
};

const getActiveTabSection = (props: any, tabName: string) => {
  const children = props.props.children;

  if (!Array.isArray(children)) {
    return children;
  }

  return children.find((child) => child.props.tabName === tabName);
};

const Tab = (
  { tabName, activeTab, fullWidth }: {
    tabName: string;
    activeTab: Signal<string>;
    fullWidth: boolean;
  },
) => {
  const handleClick = () => {
    activeTab.value = tabName;
  };
  const isActive = tabName === activeTab.value;
  let containerClass = "rfui-tab px-5 text-center py-4 cursor-pointer";

  if (isActive) {
    containerClass += " border-b text-neutral-900";
  } else {
    containerClass += " text-neutral-500";
  }

  if (fullWidth) {
    containerClass += " w-full";
  }

  return <div class={containerClass} onClick={handleClick}>{tabName}</div>;
};

export const TabSection = (
  { tabName, children }: { tabName: string; children: ComponentChild },
) => {
  return <>{children}</>;
};
