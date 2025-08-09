"use client";

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Minimal modal dialog implementation. When `isOpen` is true the modal
 * is rendered into a portal attached to the document body. The dialog
 * can be closed by clicking the backdrop or pressing the Escape key.
 */
export function Dialog({ isOpen, onClose, children }: DialogProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 max-h-[90vh] w-[90vw] overflow-y-auto rounded-md bg-white p-4 shadow-lg">
        {children}
      </div>
    </div>,
    document.body
  );
}