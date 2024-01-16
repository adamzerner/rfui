import { Signal } from "@preact/signals";
import { ComponentChild, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { CloseIcon } from "../icons/close-icon.tsx";

export type ModalType = {
  isOpen: Signal<boolean>;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLDialogElement>;

/*

TODO:
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
  const { class: restClass, ...restWithoutClass } = rest;
  const containerClass =
    ` w-[600px] p-4 rounded backdrop:backdrop-blur-sm ${restClass}`;
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
    <dialog ref={dialogRef} class={containerClass} {...restWithoutClass}>
      <div class="text-right mb-2">
        <button onClick={close}>
          <CloseIcon />
        </button>
      </div>
      {children}
    </dialog>
  );
};
