import { useEffect, ReactNode } from 'react';
import { Button } from './button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  closeOnOutsideClick?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  closeOnOutsideClick = true,
}: ModalProps) {

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div
          className="inset-0 transition-opacity"
          aria-hidden="true"
          onClick={closeOnOutsideClick ? onClose : undefined}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-50" />
        </div>

        {/* Modal */}
        <div
          className="relative mx-auto w-full max-w-lg transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all focus:outline-none"
        >
          {/* Header */}
          {title && (
            <div className="bg-white px-4 py-3 sm:px-6">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </h3>
            </div>
          )}

          {/* Conteúdo */}
          <div className="px-4 py-5 sm:p-6">{children}</div>

          {/* Footer (opcional) */}
          <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Button
              onClick={onClose}
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}