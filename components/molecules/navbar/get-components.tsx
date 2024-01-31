import { getChildren } from "../../../utilities/get-children.ts";
import { NavbarLeft } from "./navbar-left.tsx";
import { NavbarRight } from "./navbar-right.tsx";

// deno-lint-ignore no-explicit-any
export const getComponents = (_children: any) => {
  const children = getChildren(_children);

  if (!Array.isArray(children)) {
    const numItems = Array.isArray(children.props.children)
      ? children.props.children.length
      : 1;

    return { navbarLeft: children, numItems };
  }

  const navbarLeft = children.find(
    (child) => child && child.type && child.type.name === NavbarLeft.name,
  );

  const navbarRight = children.find(
    (child) => child && child.type && child.type.name === NavbarRight.name,
  );

  if (!navbarLeft && !navbarRight) {
    throw new Error(
      "`NavbarLeft` or `NavbarRight` is needed if you pass an array of elements to `Navbar` as `children`.",
    );
  }

  const numLeftItems = navbarLeft
    ? Array.isArray(navbarLeft.props.children)
      ? navbarLeft.props.children.length
      : 1
    : 0;
  const numRightItems = navbarRight
    ? Array.isArray(navbarRight.props.children)
      ? navbarRight.props.children.length
      : 1
    : 0;
  const numItems = numLeftItems + numRightItems;

  return { navbarLeft, navbarRight, numItems };
};
