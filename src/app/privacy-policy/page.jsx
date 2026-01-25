'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Privacy Policy - InvoiceFlow"
        description="Read our privacy policy to understand how we handle your data."
        keywords="privacy policy, data protection, GDPR"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">InvoiceFlow</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/templates" className="text-foreground hover:text-gradient-primary/10 transition-colors">
              Create Invoice
            </Link>
            <Link href="/privacy-policy" className="text-foreground font-medium">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
          <p><strong>Last updated:</strong> January 2024</p>

          <h2>Introduction</h2>
          <p>
            InvoiceFlow ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our invoice generator service.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide when using our service:
          </p>
          <ul>
            <li>Business information you enter in invoices (name, address, email)</li>
            <li>Client information for billing purposes</li>
            <li>Invoice details including items, prices, and terms</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information solely to:
          </p>
          <ul>
            <li>Generate invoices as requested by you</li>
            <li>Improve our service functionality</li>
            <li>Provide customer support when needed</li>
          </ul>

          <h2>Data Storage</h2>
          <p>
            Your invoice data is processed locally in your browser. We do not store your invoice data on our servers unless you explicitly choose to save it. All data transmission is encrypted using industry-standard SSL/TLS protocols.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for analytics and advertising. These services may collect anonymous usage data to help us improve the service.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Download your data in a portable format</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@invoiceflow.com.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
