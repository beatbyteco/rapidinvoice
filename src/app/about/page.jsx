'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Zap, Globe, Shield, Heart } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="About Us - InvoiceFlow Free Invoice Generator"
        description="Learn about InvoiceFlow, a free invoice generator designed to help businesses create professional invoices quickly and easily."
        keywords="about invoiceflow, free invoice generator, invoice maker, billing software"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">RapidInvoice</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/templates" className="text-foreground hover:text-gradient-primary/10 transition-colors">
              Create Invoice
            </Link>
            <Link href="/blog" className="text-foreground hover:text-gradient-primary/10 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-foreground font-medium">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-primary py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About RapidInvoice
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We believe every business deserves professional invoicing tools, regardless of size or budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              RapidInvoice was created with a simple mission: to provide a completely free, professional-grade invoice generator that anyone can use without barriers.
            </p>
            <p className="text-muted-foreground">
              We understand that small businesses and freelancers often struggle with expensive software subscriptions. That's why we've built a tool that's 100% free, requires no signup, and delivers professional results every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Zap, title: 'Fast', desc: 'Create invoices in seconds' },
              { icon: Globe, title: 'Global', desc: 'Multi-currency support' },
              { icon: Shield, title: 'Secure', desc: 'Your data stays private' },
              { icon: Heart, title: 'Free', desc: 'No hidden costs ever' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card rounded-2xl border border-border">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose RapidInvoice?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've packed powerful features into a simple, free tool.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Multiple professional templates',
              'Multi-currency support',
              'Automatic tax calculations',
              'PDF download',
              'No signup required',
              'Mobile-friendly design',
              'Custom branding with logo',
              'Multiple tax types (VAT, GST)',
              'Detailed invoice breakdown',
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Create your first professional invoice in seconds. No signup, no credit card, completely free.
          </p>
          <Link href="/templates">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Create Free Invoice
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
