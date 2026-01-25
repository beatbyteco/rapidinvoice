'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'invoiceflow_invoices';
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export const useInvoiceStorage = () => {
  const [invoices, setInvoices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStoragePopup, setShowStoragePopup] = useState(false);

  // Clean up old invoices (older than 1 month)
  const cleanupOldInvoices = useCallback((storedInvoices) => {
    const now = Date.now();
    return storedInvoices.filter((item) => {
      const age = now - item.createdAt;
      return age < ONE_MONTH_MS;
    });
  }, []);

  // Load invoices from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const cleaned = cleanupOldInvoices(parsed);

        if (cleaned.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
        }

        setInvoices(cleaned.map((item) => item.invoice));
      }
    } catch (error) {
      console.error('Failed to load invoices:', error);
    }
    setIsLoaded(true);
  }, [cleanupOldInvoices]);

  // Save or update invoice
  const saveInvoice = useCallback((invoice) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let storedInvoices = stored ? JSON.parse(stored) : [];

      storedInvoices = cleanupOldInvoices(storedInvoices);

      const existingIndex = storedInvoices.findIndex(
        (item) => item.invoice.id === invoice.id
      );

      const newStoredInvoice = {
        invoice,
        createdAt: Date.now(),
      };

      if (existingIndex >= 0) {
        storedInvoices[existingIndex] = newStoredInvoice;
      } else {
        storedInvoices.unshift(newStoredInvoice);

        if (!localStorage.getItem('invoiceflow_storage_explained')) {
          setShowStoragePopup(true);
          localStorage.setItem('invoiceflow_storage_explained', 'true');
        }
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(storedInvoices));
      setInvoices(storedInvoices.map((item) => item.invoice));

      return true;
    } catch (error) {
      console.error('Failed to save invoice:', error);
      return false;
    }
  }, [cleanupOldInvoices]);

  // Delete invoice
  const deleteInvoice = useCallback((invoiceId) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        let storedInvoices = JSON.parse(stored);
        storedInvoices = storedInvoices.filter(
          (item) => item.invoice.id !== invoiceId
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedInvoices));
        setInvoices(storedInvoices.map((item) => item.invoice));
      }
      return true;
    } catch (error) {
      console.error('Failed to delete invoice:', error);
      return false;
    }
  }, []);

  // Get invoice by ID
  const getInvoice = useCallback(
    (invoiceId) => invoices.find((inv) => inv.id === invoiceId),
    [invoices]
  );

  // Hide storage popup
  const dismissStoragePopup = useCallback(() => {
    setShowStoragePopup(false);
  }, []);

  return {
    invoices,
    isLoaded,
    saveInvoice,
    deleteInvoice,
    getInvoice,
    showStoragePopup,
    dismissStoragePopup,
  };
};
