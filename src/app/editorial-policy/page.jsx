"use client";

import Link from "next/link";
import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Editorial Policy - Rapid Invoice",
//   description:
//     "Learn about Rapid Invoice's editorial standards, content accuracy guidelines, and our commitment to providing reliable invoicing and financial information.",
//   keywords:
//     "editorial policy, content standards, rapid invoice guidelines, accuracy policy",
//   alternates: {
//     canonical: "https://rapidinvoice.online/editorial-policy",
//   },
// };

export default function EditorialPolicy() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Rapid Invoice's editorial policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our editorial policy ensures all content on Rapid Invoice is accurate, unbiased, and created to genuinely help small businesses and freelancers with invoicing and financial calculations.",
        },
      },
      {
        "@type": "Question",
        name: "Who writes the content on Rapid Invoice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our content is created by a team of finance enthusiasts, small business advocates, and developers who understand real-world invoicing and tax challenges.",
        },
      },
      {
        "@type": "Question",
        name: "How often is Rapid Invoice content updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We review and update our content regularly to reflect the latest tax rates, regulations, and best practices in invoicing and financial management.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-primary py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Editorial Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Editorial Policy
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our commitment to accuracy, transparency, and helping real
              businesses succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <div className="prose prose-lg max-w-none text-foreground">

          <h2 className="text-2xl font-bold text-foreground mt-0">Our Editorial Mission</h2>
          <p className="text-muted-foreground">
            At Rapid Invoice, our mission is simple: provide small businesses, freelancers, and entrepreneurs with free, accurate, and genuinely useful financial tools and content. Every piece of content we publish—from blog posts to calculator guides—goes through a careful review process to ensure it meets our standards for accuracy and usefulness.
          </p>
          <p className="text-muted-foreground">
            We are not a news publication. We are a tools-first platform. Our content exists to educate users about invoicing, taxation, and financial best practices so they can make better decisions for their businesses.
          </p>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Content Creation Standards</h2>
          <p className="text-muted-foreground">
            All content published on Rapid Invoice follows these core principles:
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Accuracy First:</strong> Every calculation formula, tax rate, and financial concept is verified against official government sources and established accounting standards before publication.</li>
            <li><strong className="text-foreground">User-Centric:</strong> We write for real people—freelancers creating their first invoice, small business owners calculating GST, or entrepreneurs figuring out their profit margins. Our language is clear, jargon-free, and practical.</li>
            <li><strong className="text-foreground">No Misleading Claims:</strong> We never exaggerate the capabilities of our tools. If a calculator provides an estimate, we clearly state that. If tax rules vary by jurisdiction, we mention it.</li>
            <li><strong className="text-foreground">Regular Updates:</strong> Tax rates change. Regulations evolve. We review our content periodically and update it to reflect the latest information. When we update content, we note the last reviewed date.</li>
            <li><strong className="text-foreground">Independence:</strong> Our editorial content is independent of any advertising or sponsorship. Ads displayed on Rapid Invoice do not influence our calculator logic, recommendations, or content.</li>
          </ul>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Research & Sources</h2>
          <p className="text-muted-foreground">
            Our calculators and educational content are built on information from trusted sources, including:
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>Official government tax portals (GST Council of India, HMRC UK, IRS USA)</li>
            <li>Established accounting and bookkeeping standards</li>
            <li>Published financial education resources from recognized institutions</li>
            <li>Industry-standard formulas used by professional accountants and financial advisors</li>
          </ul>
          <p className="text-muted-foreground">
            We do not use unverified third-party data or user-generated content as the basis for our calculators or guides. Every formula is cross-checked and tested with real-world scenarios before being deployed.
          </p>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Corrections & Feedback</h2>
          <p className="text-muted-foreground">
            We believe in accountability. If you find an error in any of our calculators, content, or guides, we want to hear about it. We take corrections seriously and aim to fix verified errors within 48 hours.
          </p>
          <p className="text-muted-foreground">
            You can report errors or provide feedback through our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>. We appreciate every piece of feedback from our users—it helps us improve.
          </p>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Advertising Disclosure</h2>
          <p className="text-muted-foreground">
            Rapid Invoice is a free platform. To keep our tools free for everyone, we display advertisements on some pages. However:
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>Advertisements are clearly distinguishable from editorial content.</li>
            <li>Ad placement never interferes with the usability of our calculators or tools.</li>
            <li>We do not accept sponsored content that masquerades as editorial content.</li>
            <li>Our calculator results are never influenced by advertisers.</li>
          </ul>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Disclaimer</h2>
          <p className="text-muted-foreground">
            While we strive for maximum accuracy, Rapid Invoice's calculators and content are provided for informational and educational purposes only. They should not be considered a substitute for professional financial, tax, or legal advice. For specific tax situations, we always recommend consulting a qualified accountant or tax professional.
          </p>
          <p className="text-muted-foreground">
            For more details, please read our full <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl pt-3.5 font-bold text-foreground">Questions?</h2>
          <p className="text-muted-foreground">
            If you have any questions about our editorial standards or how we create content, feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link>. We're always happy to explain our process.
          </p>

          <p className="text-sm text-muted-foreground mt-8 italic">
            Last updated: February 2026
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
