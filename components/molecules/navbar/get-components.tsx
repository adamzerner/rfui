// deno-lint-ignore-file no-explicit-any
import { ComponentChild, toChildArray } from "preact";
import { NavbarLeft } from "./navbar-left.tsx";
import { NavbarRight } from "./navbar-right.tsx";

export const getComponents = (children: ComponentChild) => {
  const childrenArray = toChildArray(children);

  if (childrenArray.length === 1) {
    const numItems = toChildArray(childrenArray[0]).length;

    return { navbarLeft: children, numItems };
  }

  const navbarLeft = childrenArray.find(
    (child: any) => child && child.type && child.type.name === NavbarLeft.name,
  );

  const navbarRight = childrenArray.find(
    (child: any) => child && child.type && child.type.name === NavbarRight.name,
  );

  if (!navbarLeft && !navbarRight) {
    throw new Error(
      "`NavbarLeft` or `NavbarRight` is needed if you pass an array of elements to `Navbar` as `children`.",
    );
  }

  const numLeftItems = toChildArray(navbarLeft).length;
  const numRightItems = toChildArray(navbarRight).length;
  const numItems = numLeftItems + numRightItems;

  return { navbarLeft, navbarRight, numItems };
};
