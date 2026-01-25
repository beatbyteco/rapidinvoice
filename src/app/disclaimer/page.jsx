'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Disclaimer - InvoiceFlow"
        description="Read our disclaimer regarding the use of InvoiceFlow invoice generator."
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
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
          <p><strong>Last updated:</strong> January 2024</p>

          <h2>General Information</h2>
          <p>
            The information provided by RapidInvoice is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The site cannot and does not contain legal, tax, or accounting advice. The legal, tax, and accounting information is provided for general informational and educational purposes only and is not a substitute for professional advice.
          </p>
          <p>
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal, tax, or accounting advice. The use or reliance of any information contained on this site is solely at your own risk.
          </p>

          <h2>Invoice Templates</h2>
          <p>
            The invoice templates provided are for general use. Tax requirements, invoice formats, and legal requirements vary by country and region. It is your responsibility to ensure that your invoices comply with applicable laws and regulations in your jurisdiction.
          </p>

          <h2>Tax Calculations</h2>
          <p>
            While we strive to provide accurate tax calculations, the automatic tax calculations provided by our service are estimates only. You are responsible for verifying all tax amounts and ensuring compliance with applicable tax laws.
          </p>

          <h2>External Links</h2>
          <p>
            The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h2>Limitation of Liability</h2>
 <p>
            In no event shall RapidInvoice be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, the service.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Disclaimer, please contact us at Emaiiiiiiill.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
