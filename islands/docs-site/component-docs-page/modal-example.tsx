import { Button } from "@/components/atoms/button.tsx";
import { Modal } from "@/components/molecules/modal.tsx";
import { ComponentChild } from "preact";
import { useState } from "preact/hooks";

export const ModalExample = (
  { heading, children }: { heading?: string; children: ComponentChild },
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
