import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Free Invoice Generator | RapidInvoice',
  description: 'Create professional invoices for free online. No signup required. Multi-currency support, GST/VAT compliant, custom templates, PDF export. Best free invoice maker.',
  keywords: [
    'invoice generator',
    'free invoice',
    'gst invoice',
    'vat invoice',
    'best free GST invoice generator for small business Indi', 
    'create GST compliant invoice online free India', 
    'top invoice generator in India 2026',
    'best free invoice generator for freelancers USA',
    'professional invoice generator online free no signup', 
    'easy invoice generator for small business USA'
  ],
  openGraph: {
    title: 'RapidInvoice – Free Invoice Generator',
    description: 'Create professional invoices for free online. No signup required. Multi-currency support, GST/VAT compliant, custom templates, PDF export. Best free invoice maker.',
    url: 'https://rapidinvoice.online',
    siteName: 'RapidInvoice',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RapidInvoice',
    description: 'Free invoice generator',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://rapidinvoice.online/',
  },
  verification: {
    google: "8PI_cJTBmxtryp1RAvyHUg9cqdLwZN8vTmUro4T9EsA",
  },
};

{/* <meta name="google-site-verification" content="8PI_cJTBmxtryp1RAvyHUg9cqdLwZN8vTmUro4T9EsA" /> */}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
