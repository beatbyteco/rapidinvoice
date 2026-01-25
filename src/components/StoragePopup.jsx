'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HardDrive, X, Shield, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StoragePopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-auto p-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="gradient-primary p-6 text-center relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <HardDrive className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-primary-foreground">
                  Your Invoice is Saved!
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-center">
                  We store your invoices locally on your device for your convenience. Here's what you need to know:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Private & Secure</p>
                      <p className="text-xs text-muted-foreground">
                        Data stays on your device only. We never upload it to any server.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">30-Day Retention</p>
                      <p className="text-xs text-muted-foreground">
                        Invoices are automatically deleted after 30 days to save space.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Browser Storage</p>
                      <p className="text-xs text-muted-foreground">
                        Clearing browser data will remove your invoices. Download PDFs to keep them permanently.
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={onClose} variant="gradient" className="w-full">
                  Got it, thanks!
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
