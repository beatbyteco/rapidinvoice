import Link from "next/link";
// import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// export const metadata = {
//   title: "How We Calculate Taxes & Business Metrics - Rapid Invoice",
//   description:
//     "Understand the exact formulas and methodology behind Rapid Invoice's GST, VAT, Sales Tax, Profit Margin, Break-Even, Markup, and Discount calculators.",
//   keywords:
//     "tax calculation methodology, GST formula, VAT formula, profit margin formula, break even formula",
//   alternates: {
//     canonical: "https://rapidinvoice.online/how-we-calculate",
//   },
// };

export default function HowWeCalculate() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Rapid Invoice calculate GST?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For exclusive GST: GST Amount = Base Amount × GST Rate / 100. For inclusive GST: Base Amount = Total / (1 + Rate/100), GST = Total - Base. CGST and SGST are each half of the total GST.",
        },
      },
      {
        "@type": "Question",
        name: "Are Rapid Invoice's tax calculations accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our formulas are sourced from official tax authorities and verified against standard accounting practices.",
        },
      },
      {
        "@type": "Question",
        name: "What formula is used for profit margin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profit = Revenue - Cost. Profit Margin (%) = (Profit / Revenue) × 100.",
        },
      },
      {
        "@type": "Question",
        name: "How is the break-even point calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Break-Even Point (units) = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit).",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">

      <Header />

      {/* Hero */}
      <section className="gradient-primary py-12 sm:py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">How We Calculate</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            How We Calculate Taxes & Business Metrics
          </h1>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Full transparency on the formulas, sources, and logic behind every
            Rapid Invoice calculator.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <div className="prose prose-lg max-w-none text-foreground">

          <p className="text-muted-foreground text-lg">
            We believe in complete transparency. Below, you'll find the exact formulas and methodology our calculators use. Every formula is sourced from official tax authorities and standard accounting practices. No black boxes, no guesswork—just math.
          </p>

          {/* GST */}
          <h2 className="text-2xl pt-4 font-bold text-foreground">🇮🇳 GST Calculator (India)</h2>
          <p className="text-muted-foreground">
            India's Goods and Services Tax (GST) is a multi-rate system with slabs at 5%, 12%, 18%, and 28%. Our calculator supports both inclusive and exclusive GST calculations and automatically splits the result into CGST (Central) and SGST (State) components.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formulas Used</h3>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Exclusive GST</strong> (adding GST to a base price):</p>
            <code className="block bg-background p-3 rounded-lg text-sm mb-3">
              GST Amount = Base Amount × (GST Rate / 100)<br/>
              Total = Base Amount + GST Amount<br/>
              CGST = GST Amount / 2<br/>
              SGST = GST Amount / 2
            </code>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Inclusive GST</strong> (extracting GST from a total):</p>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Base Amount = Total Amount / (1 + GST Rate / 100)<br/>
              GST Amount = Total Amount − Base Amount<br/>
              CGST = GST Amount / 2<br/>
              SGST = GST Amount / 2
            </code>
          </div>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Source:</strong> GST Council of India (<a href="https://gstcouncil.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gstcouncil.gov.in</a>). Rates are updated when the GST Council announces changes.
          </p>
          <p className="text-muted-foreground">
            <Link href="/tools/gst-calculator" className="text-primary hover:underline">→ Try our GST Calculator</Link>
          </p>

          {/* VAT */}
          <h2 className="text-2xl p-4 font-bold text-foreground">🇬🇧 VAT Calculator (UK)</h2>
          <p className="text-muted-foreground">
            The UK's Value Added Tax (VAT) standard rate is 20%. Our calculator lets you add VAT to a net amount or remove VAT from a gross amount, with support for custom rates.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formulas Used</h3>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Add VAT:</strong></p>
            <code className="block bg-background p-3 rounded-lg text-sm mb-3">
              VAT Amount = Net Amount × (VAT Rate / 100)<br/>
              Gross Total = Net Amount + VAT Amount
            </code>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Remove VAT:</strong></p>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Net Amount = Gross Amount / (1 + VAT Rate / 100)<br/>
              VAT Amount = Gross Amount − Net Amount
            </code>
          </div>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Source:</strong> HM Revenue & Customs (<a href="https://www.gov.uk/vat-rates" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk/vat-rates</a>).
          </p>
          <p className="text-muted-foreground">
            <Link href="/tools/vat-calculator" className="text-primary hover:underline">→ Try our VAT Calculator</Link>
          </p>

          {/* Sales Tax */}
          <h2 className="text-2xl p-4 font-bold text-foreground">🇺🇸 Sales Tax Calculator (USA)</h2>
          <p className="text-muted-foreground">
            Sales tax in the United States varies by state, county, and sometimes city. Our calculator lets you input your specific local tax rate to get accurate results.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formulas Used</h3>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Add Tax:</strong></p>
            <code className="block bg-background p-3 rounded-lg text-sm mb-3">
              Tax Amount = Subtotal × (Tax Rate / 100)<br/>
              Total = Subtotal + Tax Amount
            </code>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Remove Tax:</strong></p>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Subtotal = Total / (1 + Tax Rate / 100)<br/>
              Tax Amount = Total − Subtotal
            </code>
          </div>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Source:</strong> State-level tax rates are referenced from official state revenue departments and the Tax Foundation.
          </p>
          <p className="text-muted-foreground">
            <Link href="/tools/sales-tax-calculator" className="text-primary hover:underline">→ Try our Sales Tax Calculator</Link>
          </p>

          {/* Profit Margin */}
          <h2 className="text-2xl p-4 font-bold text-foreground">📊 Profit Margin Calculator</h2>
          <p className="text-muted-foreground">
            Profit margin is one of the most important metrics for any business. It tells you what percentage of your revenue is actual profit after costs.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formula Used</h3>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Profit = Revenue − Cost<br/>
              Profit Margin (%) = (Profit / Revenue) × 100
            </code>
          </div>
          <p className="text-muted-foreground">
            This is the standard net profit margin formula used by accountants and financial analysts worldwide.
          </p>
          <p className="text-muted-foreground">
            <Link href="/tools/profit-margin-calculator" className="text-primary hover:underline">→ Try our Profit Margin Calculator</Link>
          </p>

          {/* Break Even */}
          <h2 className="text-2xl p-4 font-bold text-foreground">⚖️ Break-Even Calculator</h2>
          <p className="text-muted-foreground">
            The break-even point tells you exactly how many units you need to sell before your business starts making a profit. It's critical for pricing strategy and business planning.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formula Used</h3>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Break-Even Point (units) = Fixed Costs / (Selling Price per Unit − Variable Cost per Unit)<br/>
              Break-Even Revenue = Break-Even Units × Selling Price per Unit
            </code>
          </div>
          <p className="text-muted-foreground">
            <Link href="/tools/break-even-calculator" className="text-primary hover:underline">→ Try our Break-Even Calculator</Link>
          </p>

          {/* Markup */}
          <h2 className="text-2xl p-4 font-bold text-foreground">💰 Markup Calculator</h2>
          <p className="text-muted-foreground">
            Markup is the amount added to the cost price to arrive at the selling price. Understanding markup helps you set competitive yet profitable prices.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formula Used</h3>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Markup Amount = Cost × (Markup % / 100)<br/>
              Selling Price = Cost + Markup Amount
            </code>
          </div>
          <p className="text-muted-foreground">
            <Link href="/tools/markup-calculator" className="text-primary hover:underline">→ Try our Markup Calculator</Link>
          </p>

          {/* Discount */}
          <h2 className="text-2xl p-4 font-bold text-foreground">🏷️ Discount Calculator</h2>
          <p className="text-muted-foreground">
            Whether you're running a sale or negotiating a deal, our discount calculator shows you the exact savings and final price.
          </p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border my-4">
            <h3 className="text-lg font-semibold text-foreground mt-0">Formula Used</h3>
            <code className="block bg-background p-3 rounded-lg text-sm">
              Discount Amount = Original Price × (Discount % / 100)<br/>
              Final Price = Original Price − Discount Amount
            </code>
          </div>
          <p className="text-muted-foreground">
            <Link href="/tools/discount-calculator" className="text-primary hover:underline">→ Try our Discount Calculator</Link>
          </p>

          {/* Accuracy */}
          <h2 className="text-2xl p-4 font-bold text-foreground">Our Accuracy Commitment</h2>
          <p className="text-muted-foreground">
            Every calculator on Rapid Invoice is tested with real-world scenarios before deployment. We cross-verify results against manual calculations and trusted accounting software. If you ever find a discrepancy, please <Link href="/contact" className="text-primary hover:underline">report it to us</Link>—we take accuracy very seriously.
          </p>
          <p className="text-muted-foreground pt-3">
            <strong className="text-foreground">Important:</strong> Our calculators provide estimates for educational purposes. For official tax filings and complex financial decisions, please consult a qualified accountant or tax professional.
          </p>

          <p className="text-sm text-muted-foreground mt-8 italic">
            Last reviewed: February 2026
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}