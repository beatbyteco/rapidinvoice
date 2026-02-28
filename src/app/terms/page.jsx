"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from "@/components/layout/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Terms and Conditions - RapidInvoice"
        description="Read the terms and conditions governing the use of RapidInvoice."
        keywords="RapidInvoice terms, legal policy, usage agreement"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">
              RapidInvoice
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/templates"
              className="text-foreground hover:text-gradient-primary/10 transition-colors"
            >
              Create Invoice
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-foreground font-medium"
            >
              Terms and Conditions
            </Link>
          </nav>
        </div>
      </header>

      <main className="bg-background">
        <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-14 sm:py-20">
          {/* Title */}
          <header className="mb-12 border-b pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </header>

          {/* Content */}
          <div
            className="
            prose prose-lg 
            max-w-none
            prose-headings:text-foreground
            prose-headings:font-semibold
            prose-headings:tracking-tight
            prose-p:text-muted-foreground
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-ul:pl-6
            prose-li:marker:text-muted-foreground
            prose-a:text-primary
          "
          >
            <p>
              Welcome to <strong>RapidInvoice</strong>. These Terms and
              Conditions ("Terms") govern your use of this website. By accessing
              or using RapidInvoice, you agree to comply with and be bound by
              these Terms.
            </p>

            <h2 className="pt-5">1. Nature of the Service</h2>
            <p>
              RapidInvoice is a free, browser-based invoice generation tool. It
              allows users to create and download invoices for personal or
              business use.
            </p>
            <ul>
              <li>The service is completely free</li>
              <li>No registration or login is required</li>
              <li>No payments are processed through this website</li>
              <li>
                RapidInvoice does not handle or facilitate financial
                transactions
              </li>
            </ul>

            <h2 className="pt-5">2. Data Storage and Privacy</h2>
            <ul>
              <li>
                All invoice data is stored locally on your device using browser
                local storage
              </li>
              <li>
                No invoice data is transmitted to or stored on our servers
              </li>
              <li>
                Users are solely responsible for backing up their own data
              </li>
              <li>
                Clearing browser data may permanently delete stored invoices
              </li>
            </ul>

            <h2 className="pt-5">3. User Responsibilities</h2>
            <p>By using RapidInvoice, you agree that:</p>
            <ul>
              <li>You will use the tool only for lawful purposes</li>
              <li>
                You are responsible for the accuracy of the information entered
                into invoices
              </li>
              <li>
                You will not use the platform to create fraudulent or misleading
                documents
              </li>
              <li>
                You comply with all applicable tax and financial regulations in
                your jurisdiction
              </li>
            </ul>

            <h2 className="pt-5">4. No Professional or Legal Advice</h2>
            <p>
              RapidInvoice does not provide legal, tax, or financial advice. The
              invoices generated are templates and users should consult
              qualified professionals if needed.
            </p>

            <h2 className="pt-5">5. Limitation of Liability</h2>
            <p>
              RapidInvoice is provided on an "as-is" and "as-available" basis.
              To the fullest extent permitted under Indian law:
            </p>
            <ul>
              <li>We make no warranties regarding accuracy or reliability</li>
              <li>
                We are not liable for financial losses resulting from invoice
                use
              </li>
              <li>
                We are not responsible for data loss caused by browser clearing,
                device failure, or user actions
              </li>
            </ul>

            <h2 className="pt-5">6. Intellectual Property</h2>
            <p>
              All website content, branding, design, and functionality are the
              intellectual property of RapidInvoice. Unauthorized copying or
              redistribution is prohibited.
            </p>

            <h2 className="pt-5">7. Third-Party Services</h2>
            <p>We may use third-party services such as:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Search Console</li>
              <li>Google AdSense (in the future)</li>
            </ul>
            <p>
              These services operate under their own policies. RapidInvoice is
              not responsible for how third parties collect or process data.
            </p>

            <h2 className="pt-5">8. Termination of Access</h2>
            <p>
              We reserve the right to restrict or terminate access to the
              website at any time without notice if misuse is detected.
            </p>

            <h2 className="pt-5">9. Governing Law</h2>
            <p>
              These Terms shall be governed and interpreted in accordance with
              the laws of India. Any disputes arising from the use of this
              website shall fall under the jurisdiction of Indian courts.
            </p>

            <h2 className="pt-5">10. Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions at any time. Continued
              use of the website after updates constitutes acceptance of the
              revised Terms.
            </p>

            <h2 className="pt-5">11. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, you may contact:
            </p>
            <div className="flex gap-2">
              <strong>Email:</strong> <p className="text-blue-500">roboltin@duck.com</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
