"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

export interface Toast {
  id: number;
  message: string;
  variant: 'success' | 'error';
}

interface ToastContextValue {
  toasts: Toast[];
  showToast: (message: string, variant?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, variant: 'success' | 'error' = 'success') => {
    setToasts((current) => [
      ...current,
      {
        id: Date.now(),
        message,
        variant
      }
    ]);
  }, []);

  // Remove toast after 3 seconds
  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      setToasts((current) => current.slice(1));
    }, 3000);
    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[200px] rounded-md bg-white p-3 shadow-md border-l-4 ${toast.variant === 'success' ? 'border-green-500' : 'border-red-500'}`}
          >
            <p className="text-sm font-medium text-gray-800">{toast.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return ctx;
}