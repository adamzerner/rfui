import { ComponentProps } from "preact";
import { Link } from "../../components/atoms/link.tsx";

export type NavigationLinksType = {
  linkItems: LinkItemType[];
} & ComponentProps<"nav">;

export type LinkItemType = {
  name: string;
  href?: string;
  isHeader?: boolean;
  inPage?: boolean;
  children?: LinkItemType[];
};

/**
 * @function NavigationLinks
 *
 * @see {@link https://rfui.deno.dev/molecules/navigation-links}
 *
 * @example
 * <NavigationLinks
    linkItems={[{
      name: "One",
      href: "/one",
    }, {
      name: "Two",
      href: "/two",
    }]}
  />
 */
export const NavigationLinks = (
  {
    linkItems,
    ...rest
  }: NavigationLinksType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "text-sm text-neutral-900";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <nav class={className} {...restWithoutClass}>
      <LinkItems linkItems={linkItems} indentationLevel={0} />
    </nav>
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
          {linkItem.children && (
            <LinkItems
              linkItems={linkItem.children}
              indentationLevel={indentationLevel + 1}
            />
          )}
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
  const sharedClass =
    `${indentationLevelClass} block my-3 overflow-x-hidden text-ellipsis whitespace-nowrap`;

  if (linkItem.isHeader) {
    return (
      <div class={`font-bold text-neutral-700 ${sharedClass}`}>
        {linkItem.name}
      </div>
    );
  } else if (!linkItem.href) {
    return <div class={sharedClass}>{linkItem.name}</div>;
  } else {
    return (
      <Link
        inPageLink={linkItem.inPage}
        underline="hover"
        href={linkItem.href}
        class={sharedClass}
      >
        {linkItem.name}
      </Link>
    );
  }
};
