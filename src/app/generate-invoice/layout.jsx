import { Suspense } from 'react';

export default function GenerateInvoiceLayout({ children }) {
  return (
    <Suspense fallback={<div className="p-10">Loading invoice...</div>}>
      {children}
    </Suspense>
  );
}
