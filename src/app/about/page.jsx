'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Zap, Globe, Shield, Heart, Target, Users, CheckCircle, BookOpen } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">

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
              A free, research-backed invoicing and financial tools platform — built by a student, for real businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Why We Built Rapid Invoice</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-4">
            The idea for Rapid Invoice was born out of frustration. As a student working on freelance projects, I noticed something that didn't make sense — creating a simple invoice shouldn't require a $20/month subscription. Yet, almost every invoicing tool out there either locks features behind a paywall, forces you to create an account, or limits how many invoices you can generate for free.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            I spoke with dozens of freelancers, small shop owners, and independent contractors. The story was always the same: they needed a clean, professional invoice, but didn't want to pay for enterprise-level software just to bill a client. Many were using Word documents or handwritten receipts — which looked unprofessional and made tax tracking a nightmare.
          </p>
          <p className="text-muted-foreground text-lg">
            That's when I decided to build Rapid Invoice — a completely free invoice generator that anyone can use, from anywhere, without creating an account. No trial periods, no credit card requirements, no feature restrictions. Just open the website, fill in your details, and download a professional PDF invoice. It's that simple.
          </p>
        </motion.div>
      </section>

      
      {/* Who We Help */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Who Rapid Invoice Helps</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Rapid Invoice is designed for real people running real businesses — not just corporations with dedicated accounting teams. Our users include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                'Freelancers & independent consultants',
                'Small business owners & shopkeepers',
                'Students doing part-time work',
                'Tutors, designers & content creators',
                'Contractors & service providers',
                'Startups watching every rupee & dollar',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              Whether you're billing a client in Mumbai, London, or New York, Rapid Invoice gives you multi-currency support, multiple professional templates, and automatic tax calculations — all for free. Your data never leaves your device unless you choose to download a PDF. We don't store your invoices on any server. Your privacy is non-negotiable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research & Methodology */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Research & Methodology</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-4">
            Rapid Invoice isn't just a pretty interface — every calculator and tool on this platform is built on verified, research-backed formulas. We don't guess. We don't approximate. We use the exact same formulas that professional accountants use.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            Our tax calculators source their rates and logic from official government bodies:
          </p>
          <ul className="text-muted-foreground text-lg space-y-2 mb-4 list-disc list-inside">
            <li><strong className="text-foreground">GST (India):</strong> Rates and CGST/SGST split logic from the GST Council of India</li>
            <li><strong className="text-foreground">VAT (UK):</strong> Standard rate and calculation methodology from HMRC</li>
            <li><strong className="text-foreground">Sales Tax (USA):</strong> State-level rate references from official state revenue departments</li>
          </ul>
          <p className="text-muted-foreground text-lg mb-4">
            Our business calculators — Profit Margin, Break-Even, Markup, and Discount — use industry-standard formulas taught in accounting courses worldwide. Every formula is documented on our <Link href="/how-we-calculate" className="text-primary hover:underline">How We Calculate</Link> page for full transparency.
          </p>
          <p className="text-muted-foreground text-lg">
            Before any calculator goes live, we test it with at least 10 real-world scenarios and cross-verify results with manual calculations. If a tax rate changes, we update our tools and note the revision date.
          </p>
        </motion.div>
      </section>

      {/* Accuracy Policy */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Accuracy Policy</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              Accuracy isn't optional for a financial tool — it's the foundation. Here's how we ensure every result you see on Rapid Invoice is reliable:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: 'Verified Formulas', desc: 'Every formula is sourced from official government portals and established accounting standards — never from unverified third-party content.' },
                { title: 'Real-World Testing', desc: 'Each calculator is tested with multiple real-world scenarios before deployment. We compare our results with manual calculations and trusted accounting software.' },
                { title: 'Regular Reviews', desc: 'Tax rates change, regulations evolve. We periodically review and update all our tools to ensure they reflect the latest information.' },
                { title: 'Open Corrections', desc: 'Found an error? We want to know. Report it on our Contact page and we aim to fix verified errors within 48 hours.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              <strong className="text-foreground">Important disclaimer:</strong> While we strive for maximum accuracy, our calculators are for informational and educational purposes. For official tax filings or complex financial decisions, we always recommend consulting a qualified professional. Read our full <Link href="/editorial-policy" className="text-primary hover:underline">Editorial Policy</Link> for more details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-4">
            Rapid Invoice is a passion project built by a student developer who believes in making financial tools accessible to everyone. I'm not a corporation. I'm not backed by venture capital. I'm a student who codes, learns about finance, and wants to make life a little easier for people who are hustling to build something of their own.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            I started this project because I needed it myself — and I realized millions of others needed it too. Every feature on Rapid Invoice, from the invoice templates to the tax calculators, was built with real feedback from real users. I actively listen to suggestions and continuously improve the platform.
          </p>
          <p className="text-muted-foreground text-lg">
            If Rapid Invoice has helped you save time or money, that's all the motivation I need to keep building. And if you have ideas on how to make it better, I'd genuinely love to hear from you on our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
          </p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted/30 py-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: '7+', desc: 'Free Calculators' },
              { icon: Globe, title: '150+', desc: 'Currencies Supported' },
              { icon: Shield, title: '100%', desc: 'Privacy Focused' },
              { icon: Heart, title: '0', desc: 'Cost to You' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border text-center"
              >
                <item.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
