"use client"

import clsx from 'clsx';
import { type ReactNode, useEffect } from 'react';
import { Button } from './button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  closeOnOutsideClick?: boolean;
  isSaveDisabled?: boolean;
  onSave?: () => void;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  closeOnOutsideClick = true,
  isSaveDisabled = true,
  onSave,
}: ModalProps) {

  // Close modal on ESC and handle body overflow
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      // Enable scroll
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Overlay */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={closeOnOutsideClick ? onClose : undefined}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-50" />
        </div>

        {/* Modal */}
        <div
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md"
        >
          {/* Header */}
          {title && (
            <div className="bg-white px-4 pt-3">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </h3>
            </div>
          )}

          {/* Conteúdo */}
          <div className="p-4 sm:p-6">{children}</div>

          {/* Footer (opcional) */}
          <div className="bg-gray-50 gap-2 px-4 py-3 flex flex-row-reverse sm:px-6">
            <Button
              type='button'
              onClick={onClose}
            >
              Fechar
            </Button>

            <Button
              type="button"
              onClick={onSave}
              disabled={isSaveDisabled}
              className={clsx(
                isSaveDisabled && "bg-black text-white hover:bg-black/70 opacity-50 cursor-not-allowed",
                !isSaveDisabled && "bg-black text-white hover:bg-black/70"
              )}
            >
              Salvar
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}