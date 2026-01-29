'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { AdBanner } from '@/components/layout/AdBanner';
import { InvoiceForm } from '@/components/invoice/InvoiceForm';
import { InvoicePreview } from '@/components/invoice/InvoicePreview';
import { generateInvoiceNumber } from '@/lib/invoice-utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileEdit, Eye } from 'lucide-react';
import { useUserSettings } from '@/hooks/use-user-settings';
import { useInvoiceStorage } from '@/hooks/use-invoice-storage';
import { StoragePopup } from '@/components/StoragePopup';

const GenerateInvoice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateFromUrl = searchParams.get('template') || 'modern';

  const { settings, isLoaded: settingsLoaded } = useUserSettings();
  const { saveInvoice, showStoragePopup, dismissStoragePopup } = useInvoiceStorage();

  const getDefaultDueDate = () => {
    const days = settings.defaultPaymentTerms || 30;
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
  };

  const [invoice, setInvoice] = useState({
    id: crypto.randomUUID(),
    invoiceNumber: generateInvoiceNumber(settings.invoicePrefix || 'INV'),
    status: 'draft',
    createdAt: new Date().toISOString().split('T')[0],
    dueDate: getDefaultDueDate(),
    senderName: '',
    senderEmail: '',
    senderAddress: '',
    senderPhone: '',
    senderLogo: undefined,
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientPhone: '',
    items: [],
    subtotal: 0,
    taxTotal: 0,
    discountTotal: 0,
    shippingCost: 0,
    total: 0,
    currency: 'USD',
    taxType: 'None',
    notes: '',
    termsAndConditions: 'Payment is due within 30 days of invoice date.',
    template: templateFromUrl,
  });

  useEffect(() => {
    if (settingsLoaded) {
      setInvoice(prev => ({
        ...prev,
        senderName: prev.senderName || settings.businessName || '',
        senderEmail: prev.senderEmail || settings.email || '',
        senderPhone: prev.senderPhone || settings.phone || '',
        senderAddress: prev.senderAddress || settings.address || '',
        senderLogo: prev.senderLogo || (settings.logo ? settings.logo : undefined),
        currency: settings.defaultCurrency || prev.currency,
        taxType: settings.defaultTaxType || prev.taxType,
        notes: prev.notes || settings.defaultNotes || '',
        termsAndConditions:
          prev.termsAndConditions ||
          settings.defaultTerms ||
          'Payment is due within 30 days of invoice date.',
        dueDate: getDefaultDueDate(),
      }));
    }
  }, [settingsLoaded, settings]);

  const handleComplete = () => {
    saveInvoice(invoice);
    router.push(`/invoice/${invoice.id}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <Header />

      {/* <SEOHead
        title="Generate Invoice"
        description=""
        keywords="generate invoice, create invoice, free invoice generator, invoice maker"
      /> */}

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto w-full">
        <AdBanner variant="horizontal" className="mb-6" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Generate Invoice
          </h1>
          <p className="text-muted-foreground mt-1">
            Create a professional invoice in minutes
          </p>
        </motion.div>

        <div className="lg:hidden">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="edit" className="gap-2">
                <FileEdit className="h-4 w-4" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <InvoiceForm
                invoice={invoice}
                onChange={setInvoice}
                onComplete={handleComplete}
              />
            </TabsContent>
            <TabsContent value="preview">
              <InvoicePreview invoice={invoice} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-10">
          <InvoiceForm
            invoice={invoice}
            onChange={setInvoice}
            onComplete={handleComplete}
          />
          <div className="sticky top-24">
            <InvoicePreview invoice={invoice} />
          </div>
        </div>

        <AdBanner variant="horizontal" className="mt-8" />
      </main>

      <Footer />
      <BottomNav />

      <StoragePopup
        isOpen={showStoragePopup}
        onClose={dismissStoragePopup}
      />
    </div>
  );
};

export default GenerateInvoice;
