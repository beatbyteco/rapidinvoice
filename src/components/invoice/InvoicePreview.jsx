'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/invoice-utils';
import { cn } from '@/lib/utils';

export const InvoicePreview = ({ invoice, className }) => {
  const templateStyles = {
    modern: {
      accent: 'bg-primary',
      headerBg: 'bg-primary/5',
    },
    classic: {
      accent: 'bg-foreground',
      headerBg: 'bg-muted/50',
    },
    minimal: {
      accent: 'bg-border',
      headerBg: 'bg-transparent',
    },
    professional: {
      accent: 'bg-teal-600',
      headerBg: 'bg-teal-50',
    },
    elegant: {
      accent: 'bg-violet-600',
      headerBg: 'bg-violet-50',
    },
    corporate: {
      accent: 'bg-blue-800',
      headerBg: 'bg-blue-50',
    },
  };

  const styles = templateStyles[invoice.template];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-card rounded-2xl border border-border shadow-lg overflow-hidden",
        className
      )}
      id="invoice-preview"
    >
      {/* Header */}
      <div className={cn("p-8", styles.headerBg)}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            {invoice.senderLogo ? (
              <img
                src={invoice.senderLogo}
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
            ) : (
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center",
                  styles.accent
                )}
              >
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                {invoice.senderName || 'Your Company'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {invoice.senderEmail}
              </p>
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-foreground">INVOICE</h1>
            <p className="text-lg font-semibold text-primary mt-1">
              {invoice.invoiceNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 space-y-8">
        {/* Addresses & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              From
            </h4>
            <p className="font-medium text-foreground">
              {invoice.senderName || '—'}
            </p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {invoice.senderAddress || '—'}
            </p>
            <p className="text-sm text-muted-foreground">
              {invoice.senderPhone}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Bill To
            </h4>
            <p className="font-medium text-foreground">
              {invoice.clientName || '—'}
            </p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {invoice.clientAddress || '—'}
            </p>
            <p className="text-sm text-muted-foreground">
              {invoice.clientEmail}
            </p>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Invoice Date
              </h4>
              <p className="font-medium text-foreground">
                {formatDate(invoice.createdAt, 'long')}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Due Date
              </h4>
              <p className="font-medium text-foreground">
                {formatDate(invoice.dueDate, 'long')}
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="text-left text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Description
                </th>
                <th className="text-center text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Qty
                </th>
                <th className="text-right text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Price
                </th>
                <th className="text-right text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Tax
                </th>
                <th className="text-right text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Discount
                </th>
                <th className="text-right text-xs font-semibold text-foreground uppercase tracking-wider px-4 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    No items added
                  </td>
                </tr>
              ) : (
                invoice.items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={cn(
                      index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
                    )}
                  >
                    <td className="px-4 py-3 text-foreground">
                      {item.description || '—'}
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {formatCurrency(item.unitPrice, invoice.currency)}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {item.taxRate}%
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {item.discount}%
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-foreground">
                      {formatCurrency(item.total, invoice.currency)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">
                {formatCurrency(invoice.subtotal, invoice.currency)}
              </span>
            </div>

            {invoice.discountTotal > 0 && (
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Discount</span>
                <span className="font-medium text-success">
                  -{formatCurrency(invoice.discountTotal, invoice.currency)}
                </span>
              </div>
            )}

            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">
                Tax ({invoice.taxType})
              </span>
              <span className="font-medium text-foreground">
                {formatCurrency(invoice.taxTotal, invoice.currency)}
              </span>
            </div>

            {invoice.shippingCost > 0 && (
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-foreground">
                  {formatCurrency(invoice.shippingCost, invoice.currency)}
                </span>
              </div>
            )}

            <div
              className={cn(
                "flex justify-between py-3 border-t-2",
                styles.accent === 'bg-primary'
                  ? 'border-primary'
                  : 'border-foreground'
              )}
            >
              <span className="text-lg font-bold text-foreground">Total</span>
              <span className="text-lg font-bold text-primary">
                {formatCurrency(invoice.total, invoice.currency)}
              </span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(invoice.notes || invoice.termsAndConditions) && (
          <div className="pt-6 border-t border-border space-y-4">
            {invoice.notes && (
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Notes
                </h4>
                <p className="text-sm text-foreground">{invoice.notes}</p>
              </div>
            )}
            {invoice.termsAndConditions && (
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Terms & Conditions
                </h4>
                <p className="text-sm text-muted-foreground">
                  {invoice.termsAndConditions}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={cn("px-8 py-4 text-center", styles.headerBg)}>
        <p className="text-sm text-muted-foreground">
          Thank you for your business!
        </p>
      </div>
    </motion.div>
  );
};
