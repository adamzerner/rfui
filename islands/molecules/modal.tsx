import { Signal } from "@preact/signals";
import { ComponentChild, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

export type ModalType = {
  isOpen: Signal<boolean>;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDialogElement>;

/*

TODO:
- Styling
- Backdrop
- Docs

*/

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
  const close = () => {
    isOpen.value = false;
  };

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen.value === true) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen.value]);

  return (
    <dialog ref={dialogRef} {...rest}>
      <button onClick={close}>close</button>
      {children}
    </dialog>
  );
};
