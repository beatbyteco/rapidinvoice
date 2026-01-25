'use client';

import { useState, useEffect, useCallback } from 'react';

const DEFAULT_SETTINGS = {
  businessName: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  taxId: '',
  logo: '',
  defaultCurrency: 'USD',
  defaultTaxType: 'None',
  defaultTaxRate: 0,
  invoicePrefix: 'INV',
  defaultPaymentTerms: 30,
  defaultNotes: 'Thank you for your business!',
  defaultTerms: 'Payment is due within 30 days of invoice date.',
};

const STORAGE_KEY = 'invoiceflow_user_settings';

export const useUserSettings = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      }
    } catch (error) {
      console.error('Failed to load user settings:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback(
    (newSettings) => {
      const updated = { ...settings, ...newSettings };
      setSettings(updated);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save user settings:', error);
      }
      return updated;
    },
    [settings]
  );

  // Clear all settings
  const clearSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear user settings:', error);
    }
  }, []);

  return {
    settings,
    isLoaded,
    saveSettings,
    clearSettings,
    hasSettings: Boolean(settings.businessName || settings.email),
  };
};
