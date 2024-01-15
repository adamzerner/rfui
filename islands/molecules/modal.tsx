import { ComponentChild, JSX } from "preact";

export type ModalType = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDivElement>;

/** *
 * @function Modal
 *
 * @see {@link https://rfui.deno.dev/molecules/modal}
 *
 * @example
 * <Modal>Example</Modal>
 */
export const Modal = (
  {
    children,
    ...rest
  }: ModalType,
) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};
