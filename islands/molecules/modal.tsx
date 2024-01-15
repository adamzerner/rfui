import { Signal } from "@preact/signals";
import { ComponentChild, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

export type ModalType = {
  isOpen: Signal<boolean>;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDialogElement>;

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
    isOpen,
    children,
    ...rest
  }: ModalType,
) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen.value === true && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isOpen.value]);

  return (
    <dialog ref={dialogRef} {...rest}>
      {children}
    </dialog>
  );
};
