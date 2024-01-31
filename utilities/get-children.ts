// deno-lint-ignore no-explicit-any
export const getChildren = (children: any) =>
  children?.type?.name === "ServerComponent"
    ? children.props.children
    : children;
