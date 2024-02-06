// deno-lint-ignore no-explicit-any
export const getChildren = (children: any) =>
  children?.type?.displayName === "PreactServerComponent"
    ? children.props.children
    : children;
