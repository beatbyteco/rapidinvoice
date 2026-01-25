'use client'
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import {
  FileText, Globe, Shield, Zap, ArrowRight, Star,
  Download, CreditCard, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/Footer';
// import { SEOHead } from '@/components/seo/SEOHead';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const features = [
  { icon: Globe, title: 'Multi-Currency Support', description: 'Create invoices in any currency with proper formatting and exchange rates.' },
  { icon: Shield, title: 'Private & Secure', description: 'Your data stays on your device. We never upload to servers. 100% privacy.' },
  { icon: Zap, title: 'Lightning Fast', description: 'Generate professional invoices in under 30 seconds. No signup required.' },
  { icon: FileText, title: 'Custom Templates', description: 'Choose from Modern, Classic, or Minimal professional invoice designs.' },
  { icon: CreditCard, title: 'Tax Compliant', description: 'Full support for GST, VAT, and sales tax calculations worldwide.' },
  { icon: Download, title: 'PDF Export', description: 'Download invoices as high-quality PDF files for sharing and printing.' },
];

const faqs = [
  { q: 'Is this really 100% free?', a: 'Yes! RapidInvoice is completely free with no hidden charges, subscriptions, or premium tiers. We support ourselves through non-intrusive ads.' },
  { q: 'Where is my data stored?', a: 'All your invoices and settings are stored locally on your device using browser storage. We never upload your data to any server.' },
  { q: 'How long are invoices saved?', a: 'Invoices are automatically deleted after 30 days to save storage space. Download PDFs to keep them permanently.' },
  { q: 'Do I need to create an account?', a: 'No! There\'s no login or signup required. Just start creating invoices immediately.' },
  { q: 'Can I use my own logo?', a: 'Absolutely! You can upload your company logo in the invoice form or save it permanently in Settings.' },
  { q: 'Is RapidInvoice GST/VAT compliant?', a: 'Yes! Our invoices support GST, VAT, and other tax formats with proper tax registration number fields and automatic calculations.' },
];

const Landing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Free Invoice Generator Online - Create Professional Invoices"
        description="Create professional invoices for free online. No signup required. Multi-currency support, GST/VAT compliant, custom templates, PDF export. Best free invoice maker."
        keywords="free invoice generator, online invoice maker, invoice template free, billing software, GST invoice generator, VAT invoice, freelance invoice, small business invoice, create invoice online, professional invoice"
        canonicalUrl="https://invoiceflow.app/"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center shadow-md">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">RapidInvoice</span>
          </Link>
          <div className='flex flex-row gap-6'>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>
          <Link href="/templates">
            <Button variant="gradient">Create Invoice</Button>
          </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="h-4 w-4" /> 100% Free • No Login Required
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Create Professional Invoices in <span>Seconds</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The simplest way to create invoices. Multi-currency support, tax compliance, and beautiful templates — completely free, no signup needed.
          </p>
          <Link href="/templates">
            <Button variant="gradient" size="lg" className="gap-2 text-base px-8">
              Create Invoice Now <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
          {[{ v: '100%', l: 'Free Forever' }, { v: 'No', l: 'Login Required' }, { v: '30s', l: 'To Create' }].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Everything You Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Powerful features to create professional invoices.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[{ n: '1', t: 'Choose Template', d: 'Select from our professional invoice designs' },
            { n: '2', t: 'Fill Details', d: 'Add your business and client information' },
            { n: '3', t: 'Download PDF', d: 'Get your invoice ready to send' }].map((s, i) => (
            <div key={i} className="text-center">
              <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">{s.n}</div>
              <h3 className="font-semibold text-foreground mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                <span className="font-medium text-foreground">{faq.q}</span>
                <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", openFaq === i && "rotate-180")} />
              </button>
              {openFaq === i && <div className="px-4 pb-4 text-muted-foreground">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="rounded-3xl gradient-primary p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Create Your Invoice?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Join thousands creating professional invoices for free.</p>
          <Link href="/templates">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 px-8">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
