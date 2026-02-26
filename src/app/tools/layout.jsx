
export const metadata = {
  title: "Free Business & Tax Calculators – RapidInvoice Tools",
  description:
    "Free online calculators for GST, VAT, Sales Tax, Profit Margin, Break Even, Markup, and Discounts. No signup required. Instant results.",
  alternates: {
    canonical: "https://rapidinvoice.online/tools",
  },
  openGraph: {
    title: "Free Business & Tax Calculators – RapidInvoice Tools",
    description:
      "Use GST, VAT, Sales Tax and business calculators online. 100% free.",
    url: "https://rapidinvoice.online/tools",
    siteName: "RapidInvoice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidInvoice Free Calculators",
    description:
      "GST, VAT, Sales Tax, Profit, Break-even and more business tools.",
  },
};


export default function GenerateInvoiceLayout({ children }) {
  return (
    <>
    {children}
    </>
 
  );
}
