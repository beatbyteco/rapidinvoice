// 'use client';

// import { useParams } from 'next/navigation';
import Link from 'next/link';
// import { motion } from 'framer-motion';
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
    keyword: 'what is invoice, how to create invoice',
    category: 'Guides',
    content: (
      <>
        <p>
          An invoice is a document that serves as a bill for goods or services provided by a business to a customer. It includes important details such as the amount due, a description of the product or service, payment terms, and due dates. Invoices are essential for businesses to maintain accurate financial records and to ensure they are paid promptly.
        </p>
        <h2 className='text-2xl pt-4 font-bold'>What is an Invoice?</h2>
        <p>
          An invoice is a commercial document issued by a seller to a buyer relating to a sale transaction. It indicates the products, quantities, and agreed prices for products or services the seller had provided to the buyer.
        </p>
        <p>Invoices often contain the following details:</p>
        <ol className='list-disc'>
          <li><strong>Seller's Information:</strong> Name, address, and contact details.</li>
          <li><strong>Buyer's Information:</strong> Customer's name, address, and contact details.</li>
          <li><strong>Invoice Number:</strong> A unique identifier for the transaction.</li>
          <li><strong>Date:</strong> The date the invoice was issued.</li>
          <li><strong>Product/Service Details:</strong> Description of what was provided, including quantity, unit price, and total price.</li>
          <li><strong>Total Amount Due:</strong> The sum of all charges.</li>
          <li><strong>Payment Terms:</strong> Information on when the payment is due and acceptable payment methods.</li>
        </ol>
        <h2 className='text-2xl pt-4 font-bold'>How to Create an Invoice</h2>
        <p>
          Creating an invoice may seem like a daunting task, but it can be done quickly and easily with tools like RapidInvoice. Here’s a step-by-step guide to creating a professional invoice:
        </p>
        <ol className='list-disc'>
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
        <h2 className='text-2xl pt-4 font-bold'>Conclusion</h2>
        <p>
          Invoices are a crucial part of business transactions, providing a clear record of services or goods delivered and ensuring timely payments. With online invoicing tools like RapidInvoice, creating professional invoices has never been easier. Simply follow the steps outlined above, and you'll have an invoice ready in no time! Plus, with features like multi-currency support, tax compliance, and PDF exports, RapidInvoice is the ideal solution for freelancers and small businesses.
        </p>
        <p>
          Start creating your invoices today, free of charge, with <a className='text-blue-400' href="https://rapidinvoice.online/">RapidInvoice</a>.
        </p>
      </>
    ),
  },
  'invoice-vs-receipt-whats-the-difference': {
  title: 'Invoice vs Receipt: What’s the Difference? (Complete Guide for 2026)',
  excerpt: 'Learn the clear difference between invoice and receipt, when to use each, real examples, and common mistakes explained in simple language.',
  date: '2026-01-30',
  readTime: '10 min read',
  keyword: 'invoice vs receipt, difference between invoice and receipt, invoice vs receipt meaning, what is an invoice, what is a receipt, invoice vs receipt example, business invoice and receipt, invoice and receipt difference',
  category: 'Guides',
  content: (
    <>
      <p>
        If you run a business, freelance, or sell anything online or offline, you’ve definitely heard the terms <strong>invoice</strong> and <strong>receipt</strong>.
        Many people use them interchangeably — but <strong>they are not the same</strong>.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>What Is an Invoice?</h2>
      <p>
        An <strong>invoice</strong> is a <strong>payment request document</strong> sent by a seller to a buyer <strong>before payment is made</strong>.
      </p>

      <h3 className='pt-2 font-bold'>Purpose of an Invoice</h3>
      <p>An invoice tells the buyer:</p>
      <ol className='list-disc'>
        <li>What they bought</li>
        <li>How much they need to pay</li>
        <li>When the payment is due</li>
        <li>How to pay</li>
      </ol>

      <h3 className='pt-2 font-bold'>When Is an Invoice Issued?</h3>
      <p>➡️ <strong>Before receiving payment</strong></p>

      <h3 className='pt-2 font-bold'>Common Uses of an Invoice</h3>
      <ol className='list-disc'>
        <li>Freelancers billing clients</li>
        <li>Businesses selling products or services</li>
        <li>Contractors sending monthly bills</li>
        <li>Online services and SaaS billing</li>
      </ol>

      <h3 className='pt-2 font-bold'>What Does an Invoice Include?</h3>
      <p>A professional invoice usually contains:</p>
      <ol className='list-disc'>
        <li>Invoice number</li>
        <li>Seller & buyer details</li>
        <li>List of products or services</li>
        <li>Quantity and price</li>
        <li>Tax (GST/VAT if applicable)</li>
        <li>Total amount due</li>
        <li>Due date</li>
        <li>Payment terms</li>
      </ol>

      <p>
        💡 <strong>Example:</strong><br />
        A web developer completes a project and sends an invoice asking the client to pay ₹25,000 within 7 days.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>What Is a Receipt?</h2>
      <p>
        A <strong>receipt</strong> is a <strong>proof of payment</strong> given <strong>after the payment is completed</strong>.
      </p>

      <h3 className='pt-2 font-bold'>Purpose of a Receipt</h3>
      <p>A receipt confirms:</p>
      <ol className='list-disc'>
        <li>Payment has been received</li>
        <li>Amount paid</li>
        <li>Date of payment</li>
        <li>Payment method</li>
      </ol>

      <h3 className='pt-2 font-bold'>When Is a Receipt Issued?</h3>
      <p>➡️ <strong>After receiving payment</strong></p>

      <h3 className='pt-2 font-bold'>Common Uses of a Receipt</h3>
      <ol className='list-disc'>
        <li>Retail purchases</li>
        <li>Online payments confirmation</li>
        <li>Service payment acknowledgment</li>
        <li>Expense tracking and accounting</li>
      </ol>

      <h3 className='pt-2 font-bold'>What Does a Receipt Include?</h3>
      <ol className='list-disc'>
        <li>Receipt number</li>
        <li>Date of payment</li>
        <li>Amount paid</li>
        <li>Mode of payment (cash, UPI, card, etc.)</li>
        <li>Seller details</li>
        <li>Reference to invoice (optional)</li>
      </ol>

      <p>
        💡 <strong>Example:</strong><br />
        After paying ₹25,000, the client receives a receipt confirming successful payment.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>Invoice vs Receipt: Simple Explanation</h2>
      <p>
        Think of it like this 👇<br />
        <strong>Invoice = “Please pay this amount”</strong><br />
        <strong>Receipt = “We received your payment”</strong>
      </p>

      <p>You <strong>cannot replace one with the other</strong> — both serve different legal and accounting purposes.</p>

      <h2 className='text-2xl pt-4 font-bold'>Can an Invoice Act as a Receipt?</h2>
      <p>❌ <strong>No.</strong></p>
      <p>An invoice does <strong>not</strong> prove payment.</p>

      <p>
        However:
      </p>
      <ol className='list-disc'>
        <li>Once paid, you can mark an invoice as <strong>“Paid”</strong></li>
        <li>A separate receipt should still be issued for proper records</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold'>Why Knowing the Difference Is Important</h2>
      <ol className='list-disc'>
        <li>Maintain accurate business records</li>
        <li>Avoid tax and compliance issues</li>
        <li>Look professional to clients</li>
        <li>Track payments correctly</li>
        <li>Prevent disputes and confusion</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold'>Invoice vs Receipt for GST & Tax Purposes</h2>
      <p><strong>Invoice</strong> is required for:</p>
      <ol className='list-disc'>
        <li>GST filing</li>
        <li>Claiming input tax credit</li>
        <li>Business sales records</li>
      </ol>

      <p><strong>Receipt</strong> is required for:</p>
      <ol className='list-disc'>
        <li>Proof of payment</li>
        <li>Expense claims</li>
        <li>Audits and reimbursements</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold'>Common Mistakes People Make</h2>
      <ol className='list-disc'>
        <li>Calling a receipt an invoice</li>
        <li>Not issuing a receipt after payment</li>
        <li>Missing invoice numbers</li>
        <li>Using handwritten or unprofessional formats</li>
        <li>Losing payment records</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold'>Create Professional Invoices & Receipts Easily</h2>
      <p>
        With <strong>RapidInvoice</strong>, you can:
      </p>
      <ol className='list-disc'>
        <li>Create professional invoices in seconds</li>
        <li>Download & print invoices</li>
        <li>Share invoices instantly</li>
        <li>Keep everything simple — no signup needed</li>
        <li>Use it 100% free</li>
      </ol>

      <p>
        👉 Try it now: <strong><a className='text-blue-500' href="https://rapidinvoice.online/">Rapid Invoice</a></strong>
      </p>

      {/* <h2 className='text-2xl pt-4'>Invoice vs Receipt – FAQs</h2>
      <p><strong>Is invoice mandatory?</strong><br />Yes, for most businesses and tax purposes.</p>
      <p><strong>Is receipt mandatory?</strong><br />Yes, after payment is received.</p>
      <p><strong>Can I issue both invoice and receipt?</strong><br />Yes — invoice before payment, receipt after payment.</p>
      <p><strong>Is invoice proof of payment?</strong><br />No — only a receipt is proof of payment.</p> */}

      <h2 className='text-2xl pt-4 font-bold'>Final Summary</h2>
      <p>
        <strong>Invoice</strong> = Payment request (before payment)<br />
        <strong>Receipt</strong> = Payment confirmation (after payment)
      </p>

      <p>
        Both are essential for professional and legal business operations.
      </p>
    </>
  ),
},
'w-9-vs-invoice-whats-the-difference': {
  title: 'W-9 vs Invoice: What’s the Difference? (Complete Guide for 2026)',
  excerpt: 'Learn the clear difference between W-9 and Invoice, when each is required, real-life examples, and common mistakes explained in simple English.',
  date: '2026-02-02',
  readTime: '10 min read',
  keyword: 'w-9 vs invoice, difference between w-9 and invoice, what is w-9 form, invoice vs w-9, freelancer w-9 and invoice, w-9 form vs invoice meaning, tax form vs invoice',
  category: 'Guides',
  content: (
    <>
      <p>
        If you work as a <strong>freelancer</strong>, <strong>independent contractor</strong>, or run a small business, you’ve probably been asked for a <strong>W-9 form</strong> and also sent <strong>invoices</strong> to clients.
        Many people think they are similar — <strong>but they serve completely different purposes</strong>.
      </p>

      <p>
        In this <strong>SEO-optimized, beginner-friendly guide</strong>, you’ll learn the <strong>clear difference between W-9 and Invoice</strong>, when each is required, real-life examples, and common mistakes — explained in <strong>simple English</strong>.
      </p>

      <p>
        This article is written to rank for keywords like <strong>w-9 vs invoice</strong>, <strong>difference between w-9 and invoice</strong>, <strong>what is a w-9 form</strong>, and <strong>invoice vs tax form</strong>, helping users of <strong>RapidInvoice</strong>.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>What Is a W-9 Form?</h2>
      <p>
        A <strong>W-9 form</strong> is a <strong>tax document</strong> used in the United States to provide your <strong>taxpayer information</strong> to a client or company.
      </p>

      <h3 className='pt-2 font-bold'>Purpose of a W-9</h3>
      <p>A W-9 tells the payer:</p>
      <ol className='list-disc'>
        <li>Your legal name</li>
        <li>Business name (if any)</li>
        <li>Tax classification (individual, LLC, etc.)</li>
        <li>Address</li>
        <li>Taxpayer Identification Number (SSN or EIN)</li>
      </ol>

      <p>
        This information is required so the payer can report payments made to you to the <strong>IRS</strong>.
      </p>

      <h3 className='pt-2 font-bold'>When Is a W-9 Required?</h3>
      <p>➡️ <strong>Before or during a working relationship</strong>, usually <strong>before payment</strong></p>

      <h3 className='pt-2 font-bold'>Who Needs to Fill a W-9?</h3>
      <ol className='list-disc'>
        <li>Freelancers</li>
        <li>Independent contractors</li>
        <li>Consultants</li>
        <li>Agencies working with US clients</li>
        <li>Vendors paid more than $600 in a year (US rule)</li>
      </ol>

      <p>
        💡 <strong>Example:</strong><br />
        A US company hires a freelance designer. Before paying them, the company asks for a W-9 to collect tax details.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>What Is an Invoice?</h2>
      <p>
        An <strong>invoice</strong> is a <strong>payment request document</strong> sent by a seller to a buyer asking for money for products or services provided.
      </p>

      <h3 className='pt-2 font-bold'>Purpose of an Invoice</h3>
      <p>An invoice tells the client:</p>
      <ol className='list-disc'>
        <li>What service or product was provided</li>
        <li>How much to pay</li>
        <li>When to pay</li>
        <li>How to pay</li>
      </ol>

      <h3 className='pt-2 font-bold'>When Is an Invoice Issued?</h3>
      <p>➡️ <strong>After the work is done but before payment</strong></p>

      <h3>Who Uses Invoices?</h3>
      <ol className='list-disc'>
        <li>Freelancers</li>
        <li>Businesses</li>
        <li>Consultants</li>
        <li>Service providers</li>
        <li>SaaS companies</li>
      </ol>

      <p>
        💡 <strong>Example:</strong><br />
        After completing a design project, the freelancer sends an invoice for $1,200 with a 7-day payment deadline.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>W-9 vs Invoice: Simple Explanation</h2>
      <p>
        Think of it like this 👇<br />
        <strong>W-9 = “Here is my tax information”</strong><br />
        <strong>Invoice = “Please pay me this amount”</strong>
      </p>

      <p>
        They <strong>do completely different jobs</strong> and <strong>cannot replace each other</strong>.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>Do You Need Both W-9 and Invoice?</h2>
      <p>✅ <strong>Yes, often you need both</strong></p>

      <ol className='list-disc'>
        <li><strong>W-9</strong> → Required for tax reporting (mainly in the US)</li>
        <li><strong>Invoice</strong> → Required to get paid</li>
      </ol>

      <p>
        One is for <strong>tax compliance</strong>, the other is for <strong>payment processing</strong>.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>Is a W-9 a Proof of Payment?</h2>
      <p>❌ <strong>No</strong></p>

      <ol className='list-disc'>
        <li>Does NOT show payment amount</li>
        <li>Does NOT confirm payment</li>
        <li>Does NOT act as a receipt or invoice</li>
      </ol>

      <p>It is <strong>only for tax identification</strong>.</p>

      <h2 className='text-2xl pt-4 font-bold'>Is an Invoice a Tax Document?</h2>
      <p>❌ <strong>No</strong></p>

      <ol className='list-disc'>
        <li>Requests payment</li>
        <li>Shows services and charges</li>
        <li>Is not submitted to the IRS directly</li>
      </ol>

      <p>
        However, invoices help businesses <strong>track income</strong>, which is later used for tax filing.
      </p>

      <h2 className='text-2xl pt-4 font-bold'>Why Clients Ask for a W-9 Before Paying You</h2>
      <ol className='list-disc'>
        <li>It’s legally required for US tax reporting</li>
        <li>They must issue <strong>Form 1099-NEC</strong> if applicable</li>
        <li>Without a W-9, payments may be delayed or withheld</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold'>Common Mistakes People Make</h2>
      <ol className='list-disc'>
        <li>Sending an invoice instead of a W-9</li>
        <li>Thinking W-9 is only for employees</li>
        <li>Not updating W-9 after changing business details</li>
        <li>Expecting payment without submitting W-9</li>
        <li>Mixing tax forms with billing documents</li>
      </ol>

      <h2 className='text-2xl pt-4 font-bold' >Create Professional Invoices Easily (No Signup)</h2>
      <p>
        With <strong>RapidInvoice</strong>, you can:
      </p>
      <ol className='list-disc'>
        <li>Create professional invoices instantly</li>
        <li>Download & print invoices</li>
        <li>Share invoices via link or PDF</li>
        <li>No signup, no payment</li>
        <li>100% free & browser-based</li>
      </ol>

      <p>
        Try it now: <strong><a href="https://rapidinvoice.online/">Rapid Invoice</a></strong>
      </p>

      <h2 className='text-2xl pt-4 font-bold'>W-9 vs Invoice – FAQs</h2>
      <p><strong>Is W-9 mandatory?</strong><br />Yes, if a US client needs your tax information.</p>
      <p><strong>Can I get paid without a W-9?</strong><br />Sometimes, but many US clients legally require it.</p>
      <p><strong>Is W-9 only for US citizens?</strong><br />No, it can also apply to non-US contractors working with US companies.</p>
      <p><strong>Can an invoice replace a W-9?</strong><br />No — they serve different purposes.</p>

      <h2 className='text-2xl pt-4 font-bold'>Final Summary</h2>
      <p>
        <strong>W-9</strong> = Tax information form (US-specific)<br />
        <strong>Invoice</strong> = Payment request document
      </p>

      <p>
        Both are important, but <strong>for different reasons</strong>.
      </p>

      <p>
        Using the correct document avoids delays, confusion, and legal issues.
      </p>
    </>
  ),
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


// 🔥 SEO (PER BLOG)
export async function generateMetadata({ params }) {
  // const post = blogContent[params.slug];
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.keyword}, invoice, billing, rapidinvoice`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}


export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }));
}

const BlogPost = async ({ params }) => {
  // const params = useParams();
  // const slug = params?.slug;
  const { slug } = await params;
  const post = blogContent[slug];

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

          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}> */}
          <div>
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
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Content */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 sm:py-16">
        <div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
        >
          {post.content}
        </div>

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
