"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">
              Rapid Invoice
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
              href="/privacy-policy"
              className="text-foreground font-medium"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      <main className="bg-background">
  <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-14 sm:py-20">

    {/* Title */}
    <header className="mb-12 border-b pb-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: January 2026
      </p>
    </header>

    {/* Content */}
    <div className="
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
    ">

      <p>
        Welcome to <strong>RapidInvoice</strong> (https://rapidinvoice.online/).
        Your privacy is very important to us. This Privacy Policy document explains
        how we handle information when you use our website.
      </p>

      <h2 className="pt-5">1. Information We Collect</h2>

      <p>
        <strong>RapidInvoice does not collect or store any personal information on its servers.</strong>
      </p>

      <ul>
        <li>There is no sign-up or login system</li>
        <li>We do not ask for name, email, phone number, or payment details</li>
        <li>All invoice-related data entered by the user is stored locally in the user’s browser (local storage)</li>
      </ul>

      <h3>Local Storage</h3>
      <ul>
        <li>Invoice data is saved only on your device using browser local storage</li>
        <li>This data is not sent to or stored on our servers</li>
        <li>The locally stored data is automatically deleted after 30 days</li>
      </ul>

      <h2 className="pt-5">2. How We Use Your Information</h2>

      <p>Since we do not collect personal data:</p>
      <ul>
        <li>We do not sell, rent, or share user information</li>
        <li>We do not access invoice data created by users</li>
        <li>All invoice generation happens directly in your browser</li>
      </ul>

      <h2 className="pt-5">3. Cookies and Analytics</h2>

      <p>
        We use <strong>Google Analytics</strong> to understand how users interact with our website.
      </p>

      <ul>
        <li>Anonymous usage data (pages visited, device type, browser, approximate location)</li>
        <li>Cookies to track website performance and improve user experience</li>
      </ul>

      <p>This data does not personally identify you.</p>

      <p>
        In the future, we may display <strong>Google AdSense advertisements</strong>,
        which may also use cookies to show relevant ads.
      </p>

      <p>You can disable cookies anytime through your browser settings.</p>

      <h2 className="pt-5">4. Third-Party Services</h2>

      <ul>
        <li>Google Analytics</li>
        <li>Google Search Console</li>
        <li>(Future) Google AdSense</li>
      </ul>

      <p>
        These third-party services follow their own privacy policies.
        RapidInvoice does not control how these services collect or use data.
      </p>

      <h2 className="pt-5">5. Data Security</h2>

      <ul>
        <li>All invoice data remains on the user’s device</li>
        <li>We do not store any invoice or business data on our servers</li>
        <li>Users are responsible for securing their own devices and browsers</li>
      </ul>

      <h2 className="pt-5">6. Children’s Information</h2>

      <p>
        RapidInvoice does not knowingly collect any personal information from children under the age of 13.
      </p>

      <h2 className="pt-5">7. Your Consent</h2>

      <p>
        By using RapidInvoice, you consent to this Privacy Policy and agree to its terms.
      </p>

      <h2 className="pt-5">8. Changes to This Policy</h2>

      <p>
        We may update this Privacy Policy from time to time.
        Any changes will be posted on this page with an updated date.
      </p>

      <h2 className="pt-5">9. Contact Us</h2>

      <p>If you have any questions about this Privacy Policy, you can contact us at:</p>

      <p>
        <strong>Email:</strong> roboltin@duck.com
      </p>

    </div>
  </article>
</main>


      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
