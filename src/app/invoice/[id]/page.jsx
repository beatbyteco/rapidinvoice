'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  Share2,
  Printer,
  Trash2,
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { AdBanner } from '@/components/layout/AdBanner';
// import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { InvoiceRenderer } from '@/components/invoice/InvoiceRenderer';
import { useInvoiceStorage } from '@/hooks/use-invoice-storage';
import { StoragePopup } from '@/components/StoragePopup';
import { shareInvoicePDF } from '@/lib/shareInvoicePDF';
import { toast } from 'sonner';

const InvoiceViewPage = ( ) => {
  const params = useParams();      
  const id = params.id;            
  const invoiceRef = useRef(null);
  const router = useRouter();

  const {
    getInvoice,
    deleteInvoice,
    showStoragePopup,
    dismissStoragePopup,
  } = useInvoiceStorage();

  const invoice = id ? getInvoice(id) : undefined;


const handleDownload = useReactToPrint({
  contentRef: invoiceRef,
  documentTitle: invoice
    ? `invoice-${invoice.invoiceNumber}`
    : 'invoice',
  onAfterPrint: () => {
    toast.success('PDF Downloaded!',{
        description: `Invoice ${invoice.invoiceNumber} has been saved to your device.`,
    });
  },
//   onBeforePrint: () =>{
//     new Promise((resolve) => {
//       setTimeout(resolve, 100); // allow layout to settle
//   });
// },
  onPrintError: () => {
    toast.error('Download Failed', {
      description: 'There was an error generating your PDF.',
    });
},
});



//   const handlePrint = () => window.print();

const handleShare = async () => {
  try {
    await shareInvoicePDF(invoiceRef.current, invoice.invoiceNumber);
    toast.success('Invoice Shared!', {
      description: 'PDF shared successfully.',
    });
  } catch (err) {
    toast.error('Share Failed', {
      description: 'Your device does not support PDF sharing.',
    });
  }
};


  // const handleShare = async () => {
  //   if (!invoice) return;

  //   if (navigator.share) {
  //     await navigator.share({
  //       title: `Invoice ${invoice.invoiceNumber}`,
  //       text: `Invoice from ${invoice.senderName}`,
  //       url: window.location.href,
  //     });
  //   } else {
  //     await navigator.clipboard.writeText(window.location.href);
  //     toast.success('Link Copied!',{
  //       description: 'Invoice link copied to clipboard.',
  //     });
  //   }
  // };

  const handleDelete = () => {
    if (!invoice) return;
    if (confirm('Delete this invoice permanently?')) {
      deleteInvoice(invoice.id);
      toast.success('Invoice Deleted',{
        description: 'Invoice removed from device.',
      });
      router.push('/invoices');
    }
  };

  if (!invoice) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 px-6 py-12 text-center">
          <div className="h-20 w-20 bg-muted rounded-2xl mx-auto flex items-center justify-center mb-6">
            <FileText className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Invoice Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Invoice expired or deleted.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/invoices">
              <Button variant="outline">View Invoices</Button>
            </Link>
            <Link href="/templates">
              <Button variant="gradient">Create New</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  
  return (
     <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      {/* <SEOHead
        title={`Invoice ${invoice.invoiceNumber}`}
        description={`Invoice ${invoice.invoiceNumber} from ${invoice.senderName} to ${invoice.clientName}`}
        keywords="invoice, billing, payment"
      /> */}

      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-5xl mx-auto w-full">
        {/* Ad Banner */}
        <AdBanner variant="horizontal" className="mb-6" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push('/invoices')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Invoice {invoice.invoiceNumber}
              </h1>
              <p className="text-muted-foreground">
                Created for {invoice.clientName}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pl-12 sm:pl-0">
            {/* <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print</span>
            </Button> */}
            <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button variant="gradient" size="sm" onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleDelete}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

{/* Mobile Alert Banner */}
<motion.div
  initial={{ y: -10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="mb-6 p-4 rounded-xl flex gap-3 border 
             bg-red-500/10 border-red-500/30
             text-amber-900 dark:text-amber-300 
             sm:hidden"
>
  <AlertTriangle className="h-5 w-5 mt-0.5 text-amber-500 animate-pulse" />

  <div>
    <p className="font-semibold">
      Desktop mode recommended
    </p>
    <p className="text-sm opacity-90">
      Mobile view may distort invoices.
Open in desktop mode to avoid layout issues.
    </p>
  </div>
</motion.div>


        {/* Invoice Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="print:shadow-none print-invoice"
          id="invoice-pdf-content"
        >
           {invoice && (
    <InvoiceRenderer
      ref={invoiceRef}
      invoice={invoice}
    />
  )}
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">
            🎉 Your invoice is ready!
          </h3>
          <p className="text-muted-foreground mb-4">
            Download the PDF to share with your client, or print it directly.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="gradient" onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Link href="/templates">
              <Button variant="outline">Create Another</Button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom Ad Banner */}
        <AdBanner variant="horizontal" className="mt-8" />
      </main>

      <Footer />
      <BottomNav />
      
      {/* Storage Popup */}
      <StoragePopup isOpen={showStoragePopup} onClose={dismissStoragePopup} />
    </div>
  );
};

export default InvoiceViewPage;
