import { Button } from "@/components/atoms/button.tsx";
import { Modal } from "@/islands/molecules/modal.tsx";
import { ComponentChild } from "preact";
import { useState } from "preact/hooks";

type ModalExampleProps = { heading?: string; children: ComponentChild };

export const ModalExample = (
  { heading, children }: ModalExampleProps,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={open}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} close={close} heading={heading}>{children}</Modal>
    </div>
  );
};
