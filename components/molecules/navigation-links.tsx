import { Link } from "../../components/atoms/link.tsx";
import { Stack, StackType } from "../../components/helpers/stack.tsx";

export type NavigationLinksType = {
  linkItems: LinkItemType[];
} & Omit<StackType, "children">;

export type LinkItemType = {
  name: string;
  href?: string;
  isHeader?: boolean;
  inPage?: boolean;
  children: LinkItemType[];
};

/**
 * @function NavigationLinks
 *
 * @see {@link https://rfui.deno.dev/molecules/navigation-links}
 *
 * @example
 * <NavigationLinks links={[{ name: 'Example', href: '/example' }]}>
 */
export const NavigationLinks = (
  {
    linkItems,
    ...rest
  }: NavigationLinksType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "gap-2 text-neutral-900";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <Stack class={className} {...restWithoutClass}>
      <LinkItems linkItems={linkItems} indentationLevel={0} />
    </Stack>
  );
};

const LinkItems = (
  { linkItems, indentationLevel }: {
    linkItems: LinkItemType[];
    indentationLevel: number;
  },
) => {
  return (
    <>
      {linkItems.map((linkItem) => (
        <>
          <LinkItem linkItem={linkItem} indentationLevel={indentationLevel} />
          <LinkItems
            linkItems={linkItem.children}
            indentationLevel={indentationLevel + 1}
          />
        </>
      ))}
    </>
  );
};

const LinkItem = (
  { linkItem, indentationLevel }: {
    linkItem: LinkItemType;
    indentationLevel: number;
  },
) => {
  const indentationLevelClass = `ml-${indentationLevel * 4}`;

  if (linkItem.isHeader) {
    return (
      <div class={`mb-2 font-bold text-neutral-700 ${indentationLevel}`}>
        {linkItem.name}
      </div>
    );
  } else if (!linkItem.href) {
    return <div class={indentationLevelClass}>{linkItem.name}</div>;
  } else {
    return (
      <Link
        inPageLink={linkItem.inPage}
        underline="hover"
        href={linkItem.href}
        class={indentationLevelClass}
      >
        {linkItem.name}
      </Link>
    );
  }
};
