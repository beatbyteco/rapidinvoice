import Link from "next/link";
import { Calculator, TrendingUp, ChevronRight, Home } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { AdBanner } from "@/components/layout/AdBanner";
import { getTaxTools, getBusinessTools } from "@/lib/toolsData";

export const metadata = {
  title: "Free Business & Tax Calculators – Rapid Invoice Tools",
  description:
    "Free online calculators for GST, VAT, Sales Tax, Profit Margin, Break Even, Markup, and Discounts. No signup required. Instant results.",
  alternates: {
    canonical: "https://rapidinvoice.online/tools",
  },
};

export default function ToolsPage() {
  const taxTools = getTaxTools();
  const businessTools = getBusinessTools();

  const faqs = [
    {
      question: "What free calculators does Rapid Invoice offer?",
      answer:
        "Rapid Invoice offers free GST Calculator (India), VAT Calculator (UK), Sales Tax Calculator (USA), Profit Margin Calculator, Break Even Calculator, Markup Calculator, and Discount Calculator.",
    },
    {
      question: "Are these calculators free to use?",
      answer:
        "Yes, all calculators are 100% free with no signup required. Your calculations stay on your device.",
    },
    {
      question: "Can I use these calculators on mobile?",
      answer:
        "Yes, all calculators are fully responsive and work perfectly on smartphones, tablets, and desktops.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-6 pb-24 md:pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">Tools</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Free Business & Tax Calculators
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Simplify your business finances with our suite of free online calculators.
            Calculate GST, VAT, Sales Tax, Profit Margins, Break-Even Points,
            Markup pricing, and Discounts instantly. All tools are free and run
            entirely in your browser.
          </p>
        </header>

        <div className="mb-6">
          <AdBanner variant="horizontal" />
        </div>

        {/* Tax Calculators */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Tax Calculators
            </h2>
          </div>

          <p className="text-muted-foreground mb-4">
            Calculate GST, VAT, and Sales Tax with detailed breakdowns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {taxTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group bg-card"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {tool.categoryLabel}
                </span>

                <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {tool.description}
                </p>

                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Use Calculator <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Business Calculators */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Business Calculators
            </h2>
          </div>

          <p className="text-muted-foreground mb-4">
            Essential financial tools for entrepreneurs and businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group bg-card"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {tool.categoryLabel}
                </span>

                <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {tool.description}
                </p>

                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Use Calculator <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mb-10">
          <AdBanner variant="horizontal" />
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

        {/* CTA */}
        <section className="text-center border rounded-xl p-8 bg-muted/30">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Need to Create an Invoice?
          </h2>

          <p className="text-muted-foreground mb-4">
            Use our free invoice generator alongside these calculators.
          </p>

          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Create Free Invoice <ChevronRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}