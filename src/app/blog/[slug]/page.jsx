'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, FileText } from 'lucide-react';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

// Blog post content
const blogContent = {
  'what-is-an-invoice-and-how-to-create-one': {
    title: 'What is an Invoice and How to Create One',
    excerpt: 'Learn what an invoice is and how to create one easily with RapidInvoice. This guide walks you through the steps and important elements of creating an invoice.',
    date: '2026-01-29',
    readTime: '6 min read',
    category: 'Guides',
    content: (
      <>
        <p>
          An invoice is a document that serves as a bill for goods or services provided by a business to a customer. It includes important details such as the amount due, a description of the product or service, payment terms, and due dates. Invoices are essential for businesses to maintain accurate financial records and to ensure they are paid promptly.
        </p>
        <h2 className='text-2xl pt-4'>What is an Invoice?</h2>
        <p>
          An invoice is a commercial document issued by a seller to a buyer relating to a sale transaction. It indicates the products, quantities, and agreed prices for products or services the seller had provided to the buyer.
        </p>
        <p>Invoices often contain the following details:</p>
        <ul>
          <li><strong>Seller's Information:</strong> Name, address, and contact details.</li>
          <li><strong>Buyer's Information:</strong> Customer's name, address, and contact details.</li>
          <li><strong>Invoice Number:</strong> A unique identifier for the transaction.</li>
          <li><strong>Date:</strong> The date the invoice was issued.</li>
          <li><strong>Product/Service Details:</strong> Description of what was provided, including quantity, unit price, and total price.</li>
          <li><strong>Total Amount Due:</strong> The sum of all charges.</li>
          <li><strong>Payment Terms:</strong> Information on when the payment is due and acceptable payment methods.</li>
        </ul>
        <h2 className='text-2xl pt-4'>How to Create an Invoice</h2>
        <p>
          Creating an invoice may seem like a daunting task, but it can be done quickly and easily with tools like RapidInvoice. Here’s a step-by-step guide to creating a professional invoice:
        </p>
        <ol>
          <li><strong>Choose Your Template:</strong> First, choose a suitable invoice template. Tools like RapidInvoice offer modern, classic, or minimal designs to match your business style.</li>
          <li><strong>Fill in the Details:</strong>
            <ul>
              <li><strong>Seller Information:</strong> Add your business name, address, phone number, and email.</li>
              <li><strong>Client Information:</strong> Include your client’s name, address, and contact details.</li>
              <li><strong>Invoice Number:</strong> Assign a unique invoice number to keep track of your transactions.</li>
              <li><strong>Invoice Date:</strong> Specify the date the invoice is being created.</li>
              <li><strong>Products/Services Provided:</strong> List the products or services provided, along with the quantities and unit prices.</li>
              <li><strong>Total Amount Due:</strong> Make sure the total reflects all the charges.</li>
            </ul>
          </li>
          <li><strong>Calculate Tax (if applicable):</strong> Ensure you include any applicable taxes like VAT, GST, or sales tax. Many invoicing tools automatically calculate taxes for you.</li>
          <li><strong>Set Payment Terms:</strong> Mention the payment terms clearly, including the due date and accepted payment methods (e.g., bank transfer, PayPal).</li>
          <li><strong>Download and Send:</strong> Once all details are filled in, download the invoice as a high-quality PDF and send it to your client via email or print it out for physical delivery.</li>
        </ol>
        <h2 className='text-2xl pt-4'>Conclusion</h2>
        <p>
          Invoices are a crucial part of business transactions, providing a clear record of services or goods delivered and ensuring timely payments. With online invoicing tools like RapidInvoice, creating professional invoices has never been easier. Simply follow the steps outlined above, and you'll have an invoice ready in no time! Plus, with features like multi-currency support, tax compliance, and PDF exports, RapidInvoice is the ideal solution for freelancers and small businesses.
        </p>
        <p>
          Start creating your invoices today, free of charge, with <a className='text-blue-400' href="https://rapidinvoice.online/">RapidInvoice</a>.
        </p>
      </>
    )
  },

//   'how-to-create-professional-invoice': {
//     title: 'How to Create a Professional Invoice: Complete Guide 2024',
//     excerpt: 'Learn the essential elements of a professional invoice and how to create one that gets you paid faster.',
//     date: '2024-01-15',
//     readTime: '8 min read',
//     category: 'Guides',
//     content: (
//       <>
//         <p>
//           Creating a professional invoice is essential for any business. A well-designed invoice not only helps you get paid faster but also reflects your brand's professionalism. In this comprehensive guide, we'll walk you through everything you need to know about creating invoices that work.
//         </p>

//         <h2>What is an Invoice?</h2>
//         <p>
//           An invoice is a commercial document issued by a seller to a buyer relating to a sale transaction. It indicates the products, quantities, and agreed prices for products or services the seller had provided to the buyer.
//         </p>

//         <h2>Essential Elements of a Professional Invoice</h2>
//         <ul>
//           <li><strong>Invoice Number:</strong> A unique identifier for tracking and reference</li>
//           <li><strong>Invoice Date:</strong> The date when the invoice is issued</li>
//           <li><strong>Due Date:</strong> When payment is expected</li>
//           <li><strong>Your Business Details:</strong> Name, address, contact information, and logo</li>
//           <li><strong>Client Details:</strong> Client's name and billing address</li>
//           <li><strong>Itemized List:</strong> Description of products/services with quantities and prices</li>
//           <li><strong>Subtotal, Taxes, and Total:</strong> Clear breakdown of all charges</li>
//           <li><strong>Payment Terms:</strong> Accepted payment methods and terms</li>
//         </ul>

//         <h2>Conclusion</h2>
//         <p>
//           A professional invoice is more than just a payment request—it's a reflection of your business.
//         </p>
//       </>
//     ),
//   },

//   'invoice-payment-terms': {
//     title: 'Invoice Payment Terms: What You Need to Know',
//     excerpt: 'Understanding payment terms like Net 30, Net 15, and Due on Receipt.',
//     date: '2024-01-10',
//     readTime: '6 min read',
//     category: 'Business',
//     content: (
//       <>
//         <p>
//           Payment terms are the conditions under which a seller will complete a sale.
//         </p>
//       </>
//     ),
//   },

//   'gst-invoice-requirements-india': {
//     title: 'GST Invoice Requirements in India: A Complete Guide',
//     excerpt: 'Everything you need to know about GST invoicing in India.',
//     date: '2024-01-05',
//     readTime: '10 min read',
//     category: 'Tax & Compliance',
//     content: (
//       <>
//         <p>
//           The Goods and Services Tax (GST) has transformed the Indian taxation system.
//         </p>
//       </>
//     ),
//   },
};

const BlogPost = () => {
  const params = useParams();
  const slug = params?.slug;
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="gradient">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, invoice, billing, business`}
      /> */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white glass-effect">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">RapidInvoice</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/templates" className="text-foreground hover:text-gradient-primary/10 transition-colors">
              Create Invoice
            </Link>
            <Link href="/blog" className="text-foreground font-medium">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-primary py-12 sm:py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
        >
          {post.content}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 p-8 gradient-primary rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Create Your Invoice?
          </h3>
          <p className="text-white/80 mb-6">
            Use our free invoice generator to create professional invoices in seconds.
          </p>
          <Link href="/templates">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Create Free Invoice
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
