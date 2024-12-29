// deno-lint-ignore no-explicit-any
export const getChildren = (children: any): any =>
  children?.type?.displayName === "PreactServerComponent"
    ? getChildren(children.props.children)
    : children;
