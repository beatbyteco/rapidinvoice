"use client";

import Link from "next/link";
import { FileText, Mail, MessageSquare, Send } from "lucide-react";
// import { SEOHead } from "@/components/seo/SEOHead";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const subject = form.querySelector("#subject").value;
    const message = form.querySelector("#message").value;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:roboltin@duck.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title="Contact Us - Rapid Invoice"
        description="Get in touch with the Rapid Invoice team. We'd love to hear your feedback, questions, or suggestions."
        keywords="contact rapidinvoice, support, feedback, help"
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-dark">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-white">Rapid Invoice</span>
          </Link>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              roboltin@duck.com
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Feedback</h3>
            <p className="text-sm text-muted-foreground">
              We value your suggestions
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Link href='/blog'> 
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
            <p className="text-sm text-muted-foreground">
              Check our blog for guides
            </p>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What's this about?" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
