'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Disclaimer - Rapid Invoice"
        description="Read our disclaimer regarding the use of Rapid Invoice invoice generator."
        keywords="disclaimer, terms, legal"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">RapidInvoice</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/templates" className="text-foreground hover:text-gradient-primary/10 transition-colors">
              Create Invoice
            </Link>
            <Link href="/disclaimer" className="text-foreground font-medium">
              Disclaimer
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
         <header className="mb-12 border-b pb-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        Disclaimer
      </h1>
      <p className="mt-3 text-sm text-gray-500">
        <strong>Last updated:</strong> January 2026
      </p>
    </header>

    {/* <!-- Content --> */}
    <article className="
      prose prose-lg max-w-none
      prose-headings:text-gray-900
      prose-headings:font-semibold
      prose-headings:tracking-tight
      prose-p:text-gray-600
      prose-li:text-gray-600
      prose-strong:text-gray-900
      prose-ul:pl-6
      prose-li:marker:text-gray-400
    ">

      <p>
        Welcome to <strong>RapidInvoice</strong>. By using this website, you agree to the terms of this Disclaimer.
      </p>

      <h2 className="pt-5">1. General Information</h2>

      <p>
        RapidInvoice is a <strong>free online invoice generation tool</strong>.<br/>
        It is provided for <strong>general informational and business convenience purposes only</strong>.
      </p>

      <h2 className="pt-5">2. No Legal or Tax Advice</h2>

      <p>The invoices generated using RapidInvoice:</p>
      <ul>
        <li>Do not constitute legal advice</li>
        <li>Do not constitute tax or financial advice</li>
        <li>Should not be treated as legally binding documents without verification</li>
      </ul>

      <p>
        Users are advised to consult a qualified professional (accountant, tax consultant, or legal advisor)
        before using invoices for official or legal purposes.
      </p>

      <h2 className="pt-5">3. Accuracy of Information</h2>

      <p>While we strive to provide a reliable invoice generation tool:</p>
      <ul>
        <li>RapidInvoice does not guarantee accuracy, completeness, or correctness of invoice calculations</li>
        <li>Users are fully responsible for verifying:</li>
      </ul>

      <ul>
        <li>GST details</li>
        <li>Tax rates</li>
        <li>Totals and amounts</li>
        <li>Client and business information</li>
      </ul>

      <h2 className="pt-5">4. GST and Tax Compliance</h2>

      <p>
        RapidInvoice is <strong>not an officially certified GST or tax-compliant software</strong>.<br/>
        It is only a <strong>tool to help generate invoices</strong>.
      </p>

      <p>
        Compliance with local tax laws and regulations is entirely the user’s responsibility.
      </p>

      <h2 className="pt-5">5. Limitation of Liability</h2>

      <p>RapidInvoice and its owner shall <strong>not be held liable</strong> for:</p>
      <ul>
        <li>Financial losses</li>
        <li>Tax penalties</li>
        <li>Legal disputes</li>
        <li>Incorrect invoices</li>
        <li>Data loss due to browser clearing or device issues</li>
      </ul>

      <p>
        Use of the website is <strong>entirely at your own risk</strong>.
      </p>

      <h2 className="pt-5">6. External Links</h2>

      <p>
        The website may contain links or advertisements from third-party websites in the future.<br/>
        RapidInvoice is <strong>not responsible</strong> for the content, privacy policies,
        or practices of any external sites.
      </p>

      <h2 className="pt-5">7. Changes to This Disclaimer</h2>

      <p>
        We reserve the right to modify this Disclaimer at any time without prior notice.<br/>
        Changes will be effective immediately once posted.
      </p>

      <h2 className="pt-5">8. Contact Information</h2>

      <p>For any questions regarding this Disclaimer, please contact:</p>

      <p>
        <strong>Email:</strong> roboltin@duck.com
      </p>

    </article>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
