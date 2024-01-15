import { Button } from "@/islands/atoms/button.tsx";
import { Modal } from "@/islands/molecules/modal.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChild } from "preact";

export const ModalExample = ({ children }: { children: ComponentChild }) => {
  const isOpen = useSignal(false);
  const open = () => {
    isOpen.value = true;
  };

  return (
    <div>
      <Button onClick={open}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen}>{children}</Modal>
    </div>
  );
};
