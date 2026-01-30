"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
// import { SEOHead } from '@/components/seo/SEOHead';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

const blogPosts = [
  {
    slug: "what-is-an-invoice-and-how-to-create-one",
    title: "What is an Invoice and How to Create One",
    excerpt:
      "Learn what an invoice is and how to create one with this step-by-step guide. Includes tips on making professional invoices easily.",
    date: "2026-01-29",
    readTime: "6 min read",
    category: "Guides",
    author: "RapidInvoice Team",
    featured: true,
  },
  {
    slug: "invoice-vs-receipt-whats-the-difference",
    title:
      "Invoice vs Receipt: What’s the Difference? (Complete Guide for 2026)",
    excerpt:
      "Learn the clear difference between invoice and receipt, when to use each, real examples, and common mistakes explained in simple language.",
    date: "2026-01-30",
    readTime: "10 min read",
    category: "Guides",
    author: "RapidInvoice Team",
  },
  //   {
  //     slug: 'how-to-create-professional-invoice',
  //     title: 'How to Create a Professional Invoice: Complete Guide 2024',
  //     excerpt: 'Learn the essential elements of a professional invoice and how to create one that gets you paid faster. Includes templates and best practices.',
  //     date: '2024-01-15',
  //     readTime: '8 min read',
  //     category: 'Guides',
  //     author: 'Invoice Team',
  //     featured: true,
  //   },
  //   {
  //     slug: 'invoice-payment-terms',
  //     title: 'Invoice Payment Terms: What You Need to Know',
  //     excerpt: 'Understanding payment terms like Net 30, Net 15, and Due on Receipt. Learn how to choose the right payment terms for your business.',
  //     date: '2024-01-10',
  //     readTime: '6 min read',
  //     category: 'Business',
  //     author: 'Finance Expert',
  //   },
  //   {
  //     slug: 'gst-invoice-requirements-india',
  //     title: 'GST Invoice Requirements in India: A Complete Guide',
  //     excerpt: 'Everything you need to know about GST invoicing in India, including mandatory fields, formats, and compliance requirements.',
  //     date: '2024-01-05',
  //     readTime: '10 min read',
  //     category: 'Tax & Compliance',
  //     author: 'Tax Specialist',
  //   },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* <SEOHead
        title="Invoice Generator Blog - Tips & Guides"
        description="Learn about invoicing best practices, tax compliance, and business tips. Free guides and tutorials for small businesses."
        keywords="invoice tips, invoicing guide, business invoice, tax invoice, GST invoice, payment terms"
      /> */}

      <Header />

      {/* Hero Section */}
      <section className="relative gradient-primary from-brand-dark via-brand-medium to-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Tag className="h-4 w-4" />
              Invoicing Tips & Guides
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              RapidInvoice Blog
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Expert insights, practical tips, and comprehensive guides to help
              you master invoicing and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16">
        {/* Featured Post */}
        {featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Featured Article
            </h2>

            <Link href={`/blog/${featuredPost.slug}`}>
              <article className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-full gradient-primary from-brand-dark to-brand-medium relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 text-9xl font-bold">📄</div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" },
                        )}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <div className="h-48 gradient-primary from-brand-dark/80 to-brand-medium/80 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 gradient-primary from-brand-dark to-brand-medium rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Professional Invoices?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Start generating beautiful, professional invoices in minutes. No
              signup required.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-dark font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Create Invoice Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Blog;
