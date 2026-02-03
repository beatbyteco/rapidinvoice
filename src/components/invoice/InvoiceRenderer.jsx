'use client';

import { forwardRef } from 'react';
import { getTheme } from '@/lib/invoice-themes';
import { getTemplateComponent } from './templates';
import { cn } from '@/lib/utils';

// This component is the SINGLE SOURCE OF TRUTH for both preview and PDF generation
export const InvoiceRenderer = forwardRef(function InvoiceRenderer(
  { invoice, className },
  ref
) {
   if (!invoice) return null;
  const theme = getTheme(invoice.template);
  const TemplateComponent = getTemplateComponent(invoice.template);

  return (
    <div
      ref={ref}
      id="invoice-pdf-content"
      className={cn('bg-white shadow-lg overflow-hidden', className)}
    >
      <TemplateComponent invoice={invoice} theme={theme} />
    </div>
  );
});

InvoiceRenderer.displayName = 'InvoiceRenderer';
