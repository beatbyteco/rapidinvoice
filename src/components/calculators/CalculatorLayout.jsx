"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
// import { SEOHead, StructuredData } from "@/components/seo/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { AdBanner } from "@/components/layout/AdBanner";
import { getRelatedTools } from "@/lib/toolsData";

export default function CalculatorLayout({ tool, children }) {
  const related = getRelatedTools(tool.slug);
  const canonicalUrl = `https://invoiceflow.app/tools/${tool.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://invoiceflow.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://invoiceflow.app/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <SEOHead
        title={tool.seoTitle}
        description={tool.description}
        canonicalUrl={canonicalUrl}
        keywords={`${tool.title}, free calculator, online calculator, ${tool.categoryLabel}`}
      /> */}

      {/* <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} /> */}

      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full py-6 pb-24 md:pb-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6"
        >
          <Link
            href="/"
            className="hover:text-foreground flex items-center gap-1"
          >
            <Home className="h-3.5 w-3.5" /> Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5" />

          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>

          <ChevronRight className="h-3.5 w-3.5" />

          <span className="text-foreground font-medium">
            {tool.title}
          </span>
        </nav>

        {/* Top Ad */}
        <div className="mb-6">
          <AdBanner variant="horizontal" />
        </div>

        {/* H1 + Intro */}
        <header className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
            {tool.categoryLabel}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {tool.h1}
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            {tool.intro}
          </p>
        </header>

        {/* Calculator */}
        <section aria-label="Calculator" className="mb-10">
          {children}
        </section>

        {/* How to Use */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How to Use This {tool.title}
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            {tool.howToUse.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Formula */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Formula Explanation
          </h2>

          <div className="bg-muted/50 border rounded-lg p-4">
            <p className="text-muted-foreground font-mono text-sm whitespace-pre-line">
              {tool.formulaExplanation}
            </p>
          </div>
        </section>

        {/* Real World Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Real-World Example
          </h2>

          <p className="text-muted-foreground">
            {tool.realWorldExample}
          </p>
        </section>

        {/* Mid Ad */}
        <div className="my-8">
          <AdBanner variant="horizontal" />
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <details key={i} className="border rounded-lg group">
                <summary className="px-4 py-3 cursor-pointer font-medium text-foreground hover:bg-muted/50 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Related Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors group"
              >
                <span className="text-xs text-primary font-semibold uppercase">
                  {t.categoryLabel}
                </span>

                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {t.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {t.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="/templates"
              className="text-primary hover:underline text-sm font-medium"
            >
              → Create a Professional Invoice with InvoiceFlow
            </Link>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="mt-6">
          <AdBanner variant="horizontal" />
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}