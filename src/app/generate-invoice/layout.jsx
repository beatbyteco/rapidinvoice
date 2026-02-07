import { Suspense } from 'react';

export const metadata = {
  title: "Generate Free Invoice | RapidInvoice",
  description:
    "Create professional invoices for free with our easy-to-use invoice generator. Supports multiple currencies, taxes, and custom templates.",
  keywords: [
    "generate invoice", 
    "create invoice",
    "free invoice generator", 
    "invoice maker",
    "gst invoice",
    "vat invoice",
    "best free GST invoice generator for small business Indi",
    "create GST compliant invoice online free India",
    "top invoice generator in India 2026",
    "best free invoice generator for freelancers USA",
    "professional invoice generator online free no signup",
    "easy invoice generator for small business USA",
  ],
  alternates: {
    canonical: "https://rapidinvoice.online/generate-invoice",
  },
}


export default function GenerateInvoiceLayout({ children }) {
  return (
    <Suspense fallback={
    <div className="flex items-center justify-center h-screen">
    <div className="text-center p-10">
        Loading invoice...
    </div>
    </div>
    }>
      {children}
    </Suspense>
  );
}
