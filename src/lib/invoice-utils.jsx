import { CURRENCIES } from '@/types/invoice';

/* Generate invoice number */
export const generateInvoiceNumber = (prefix = 'INV') => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');

  return `${prefix}-${year}${month}-${random}`;
};

/* Generate random ID */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

/* Calculate single item total */
export const calculateItemTotal = (item) => {
  const subtotal = item.quantity * item.unitPrice;
  const discountAmount = subtotal * (item.discount / 100);
  const afterDiscount = subtotal - discountAmount;
  const taxAmount = afterDiscount * (item.taxRate / 100);

  return afterDiscount + taxAmount;
};

/* Calculate invoice totals */
export const calculateInvoiceTotals = (items, shippingCost = 0) => {
  let subtotal = 0;
  let taxTotal = 0;
  let discountTotal = 0;

  items.forEach((item) => {
    const itemSubtotal = item.quantity * item.unitPrice;
    const itemDiscount = itemSubtotal * (item.discount / 100);
    const afterDiscount = itemSubtotal - itemDiscount;
    const itemTax = afterDiscount * (item.taxRate / 100);

    subtotal += itemSubtotal;
    discountTotal += itemDiscount;
    taxTotal += itemTax;
  });

  const total = subtotal - discountTotal + taxTotal + shippingCost;

  return { subtotal, taxTotal, discountTotal, total };
};

/* Format currency */
export const formatCurrency = (amount, currencyCode) => {
  const currency =
    CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];

  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/* Format date */
export const formatDate = (dateString, format = 'short') => {
  const date = new Date(dateString);

  if (format === 'long') {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

/* Create empty invoice */
export const createEmptyInvoice = () => ({
  id: generateId(),
  invoiceNumber: generateInvoiceNumber(),
  status: 'draft',
  createdAt: new Date().toISOString().split('T')[0],
  dueDate: new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000
  )
    .toISOString()
    .split('T')[0],

  senderName: '',
  senderEmail: '',
  senderAddress: '',
  senderPhone: '',

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
  termsAndConditions:
    'Payment is due within 30 days of the invoice date. Late payments may be subject to additional fees.',

  template: 'modern',
});

/* Create empty invoice item */
export const createEmptyItem = () => ({
  id: generateId(),
  description: '',
  quantity: 1,
  unitPrice: 0,
  taxRate: 0,
  discount: 0,
  total: 0,
});

/* Sample invoices (demo data) */
export const SAMPLE_INVOICES = [
  {
    id: '1',
    invoiceNumber: 'INV-202501-0001',
    status: 'paid',
    createdAt: '2025-01-01',
    dueDate: '2025-01-31',
    senderName: 'Acme Corp',
    senderEmail: 'billing@acme.com',
    senderAddress: '123 Business Ave, New York, NY 10001',
    senderPhone: '+1 (555) 123-4567',
    clientName: 'TechStart Inc',
    clientEmail: 'accounts@techstart.io',
    clientAddress: '456 Innovation Blvd, San Francisco, CA 94102',
    clientPhone: '+1 (555) 987-6543',
    items: [
      {
        id: '1',
        description: 'Web Development Services',
        quantity: 40,
        unitPrice: 150,
        taxRate: 10,
        discount: 0,
        total: 6600,
      },
      {
        id: '2',
        description: 'UI/UX Design',
        quantity: 20,
        unitPrice: 120,
        taxRate: 10,
        discount: 5,
        total: 2508,
      },
    ],
    subtotal: 8400,
    taxTotal: 798,
    discountTotal: 120,
    shippingCost: 0,
    total: 9078,
    currency: 'USD',
    taxType: 'Sales Tax',
    notes: 'Thank you for your business!',
    termsAndConditions: 'Payment is due within 30 days.',
    template: 'modern',
  },
  {
    id: '2',
    invoiceNumber: 'INV-202501-0002',
    status: 'sent',
    createdAt: '2025-01-02',
    dueDate: '2025-02-01',
    senderName: 'Acme Corp',
    senderEmail: 'billing@acme.com',
    senderAddress: '123 Business Ave, New York, NY 10001',
    senderPhone: '+1 (555) 123-4567',
    clientName: 'Global Solutions Ltd',
    clientEmail: 'finance@globalsolutions.com',
    clientAddress: '789 Enterprise St, London, UK',
    clientPhone: '+44 20 1234 5678',
    items: [
      {
        id: '1',
        description: 'Consulting Services',
        quantity: 16,
        unitPrice: 200,
        taxRate: 20,
        discount: 0,
        total: 3840,
      },
    ],
    subtotal: 3200,
    taxTotal: 640,
    discountTotal: 0,
    shippingCost: 0,
    total: 3840,
    currency: 'GBP',
    taxType: 'VAT',
    notes: '',
    termsAndConditions: 'Payment is due within 30 days.',
    template: 'classic',
  },
  {
    id: '3',
    invoiceNumber: 'INV-202501-0003',
    status: 'overdue',
    createdAt: '2024-12-01',
    dueDate: '2024-12-31',
    senderName: 'Acme Corp',
    senderEmail: 'billing@acme.com',
    senderAddress: '123 Business Ave, New York, NY 10001',
    senderPhone: '+1 (555) 123-4567',
    clientName: 'StartupXYZ',
    clientEmail: 'pay@startupxyz.io',
    clientAddress: '321 Venture Lane, Austin, TX 78701',
    clientPhone: '+1 (555) 246-8135',
    items: [
      {
        id: '1',
        description: 'Mobile App Development',
        quantity: 80,
        unitPrice: 100,
        taxRate: 8.25,
        discount: 10,
        total: 7794,
      },
    ],
    subtotal: 8000,
    taxTotal: 594,
    discountTotal: 800,
    shippingCost: 0,
    total: 7794,
    currency: 'USD',
    taxType: 'Sales Tax',
    notes: 'Please pay at your earliest convenience.',
    termsAndConditions: 'Payment is due within 30 days.',
    template: 'minimal',
  },
];
