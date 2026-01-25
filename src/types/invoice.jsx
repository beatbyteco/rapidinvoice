// Invoice item structure (reference object shape)
export const createInvoiceItem = () => ({
  id: '',
  description: '',
  quantity: 0,
  unitPrice: 0,
  taxRate: 0,
  discount: 0,
  total: 0,
});

// Invoice structure (reference object shape)
export const createInvoiceData = () => ({
  id: '',
  invoiceNumber: '',
  status: 'draft',
  createdAt: '',
  dueDate: '',

  // Sender info
  senderName: '',
  senderEmail: '',
  senderAddress: '',
  senderPhone: '',
  senderLogo: undefined,

  // Client info
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  clientPhone: '',

  // Items
  items: [],

  // Totals
  subtotal: 0,
  taxTotal: 0,
  discountTotal: 0,
  shippingCost: 0,
  total: 0,

  // Settings
  currency: 'USD',
  taxType: 'None',
  notes: '',
  termsAndConditions: '',

  // Template
  template: 'modern',
});

// Supported currencies
export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', locale: 'de-CH' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', locale: 'zh-CN' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', locale: 'pt-BR' },
];

// Tax types
export const TAX_TYPES = [
  { value: 'VAT', label: 'VAT (Value Added Tax)', regions: ['EU', 'UK'] },
  { value: 'GST', label: 'GST (Goods & Services Tax)', regions: ['India', 'Australia', 'Canada'] },
  { value: 'Sales Tax', label: 'Sales Tax', regions: ['US'] },
  { value: 'None', label: 'No Tax', regions: ['All'] },
];

// Invoice statuses (for UI)
export const INVOICE_STATUSES = {
  draft: { label: 'Draft', color: 'secondary' },
  sent: { label: 'Sent', color: 'primary' },
  paid: { label: 'Paid', color: 'success' },
  overdue: { label: 'Overdue', color: 'destructive' },
  cancelled: { label: 'Cancelled', color: 'muted' },
};
