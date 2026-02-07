import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { type ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
  description?: string;
}

export default function Modal({
  isOpen,
  closeModal,
  title,
  children,
  description,
}: IProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div
          className="fixed inset-0 z-10 w-screen backdrop-blur-sm overflow-y-auto"
          aria-hidden="true"
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black"
                >
                  {title}
                </DialogTitle>
              )}
              {description && (
                <DialogTitle
                  as="h3"
                  className="text-base/6 font-medium text-gray-500"
                >
                  {description}
                </DialogTitle>
              )}

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
