import { ComponentChild, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { CloseIcon } from "../icons/close-icon.tsx";

export type ModalType = {
  isOpen: boolean;
  close: () => void;
  heading?: string;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDialogElement>;

/** *
 * @function Modal
 *
 * @see {@link https://rfui.deno.dev/molecules/modal}
 *
 * @example
 * <Modal isOpen={isOpen}>
 *   Example
 * </Modal>
 */
export const Modal = (
  {
    isOpen,
    close,
    heading,
    children,
    ...rest
  }: ModalType,
) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { class: restClass, ...restWithoutClass } = rest;
  const containerClass =
    ` w-[600px] p-4 rounded backdrop:backdrop-blur-sm ${restClass}`;

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen === true) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} class={containerClass} {...restWithoutClass}>
      <div class="text-right mb-2">
        <button onClick={close}>
          <CloseIcon />
        </button>
      </div>
      <div class="mx-4 mb-4">
        {heading && <h3 class="text-xl mb-4 text-neutral-700">{heading}</h3>}
        {children}
      </div>
    </dialog>
  );
};