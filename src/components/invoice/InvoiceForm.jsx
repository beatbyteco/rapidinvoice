'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Upload, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { CURRENCIES, TAX_TYPES } from '@/types/invoice';
import { CURRENCIES, TAX_TYPES, INVOICE_STATUSES } from '@/types/invoice';
import {
  createEmptyItem,
  calculateItemTotal,
  calculateInvoiceTotals,
  formatCurrency,
} from '@/lib/invoice-utils';
import { cn } from '@/lib/utils';

export const InvoiceForm = ({ invoice, onChange, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const totalSteps = 4;
  const logoInputRef = useRef(null);

  const updateInvoice = (updates) => {
    onChange({ ...invoice, ...updates });
  };

  const updateItem = (index, updates) => {
    const newItems = [...invoice.items];
    const updatedItem = { ...newItems[index], ...updates };
    updatedItem.total = calculateItemTotal(updatedItem);
    newItems[index] = updatedItem;

    const totals = calculateInvoiceTotals(newItems, invoice.shippingCost);
    onChange({ ...invoice, items: newItems, ...totals });
  };

  const addItem = () => {
    const newItem = createEmptyItem();
    const newItems = [...invoice.items, newItem];
    onChange({ ...invoice, items: newItems });
  };

  const removeItem = (index) => {
    const newItems = invoice.items.filter((_, i) => i !== index);
    const totals = calculateInvoiceTotals(newItems, invoice.shippingCost);
    onChange({ ...invoice, items: newItems, ...totals });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Logo must be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        updateInvoice({ senderLogo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!invoice.senderName.trim()) {
        newErrors.senderName = 'Business name is required';
      }
      if (!invoice.senderEmail.trim()) {
        newErrors.senderEmail = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invoice.senderEmail)) {
        newErrors.senderEmail = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!invoice.clientName.trim()) {
        newErrors.clientName = 'Client name is required';
      }
      if (
        invoice.clientEmail &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invoice.clientEmail)
      ) {
        newErrors.clientEmail = 'Please enter a valid email';
      }
    }

    if (step === 3) {
      if (invoice.items.length === 0) {
        newErrors.items = 'Add at least one item to the invoice';
      } else {
        const hasValidItem = invoice.items.some(
          (item) =>
            item.description.trim() &&
            item.quantity > 0 &&
            item.unitPrice > 0
        );
        if (!hasValidItem) {
          newErrors.items =
            'Each item needs a description, quantity, and price';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        setTouched({});
      } else if (onComplete) {
        onComplete();
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
    setErrors({});
    setTouched({});
  };

  const markTouched = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      validateStep(currentStep);
    }
  }, [invoice, currentStep]);

  const steps = [
    { number: 1, title: 'Your Details' },
    { number: 2, title: 'Client Info' },
    { number: 3, title: 'Invoice Items' },
    { number: 4, title: 'Settings' },
  ];

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <button
              onClick={() => {
                if (step.number < currentStep) {
                  setCurrentStep(step.number);
                }
              }}
              className={cn(
                "flex items-center gap-1 sm:gap-2",
                currentStep === step.number 
                  ? 'text-primary' 
                  : currentStep > step.number 
                    ? 'text-green-500 cursor-pointer' 
                    : 'text-muted-foreground cursor-default'
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                currentStep === step.number 
                  ? 'bg-primary text-primary-foreground' 
                  : currentStep > step.number 
                    ? 'bg-green-500 text-white' 
                    : 'bg-muted text-muted-foreground'
              )}>
                {step.number}
              </div>
              <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
            </button>
            {index < steps.length - 1 && (
              <div className={cn(
                "w-4 sm:w-6 lg:w-8 h-0.5 mx-1",
                currentStep > step.number ? 'bg-green-500' : 'bg-border'
              )} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Sender Details */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Your Business Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="senderName">
                  Business Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="senderName"
                  placeholder="Your Company Name"
                  value={invoice.senderName}
                  onChange={(e) => updateInvoice({ senderName: e.target.value })}
                  onBlur={() => markTouched('senderName')}
                  className={cn(errors.senderName && touched.senderName && 'border-destructive')}
                />
                {errors.senderName && touched.senderName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.senderName}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderEmail">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="senderEmail"
                  type="email"
                  placeholder="billing@company.com"
                  value={invoice.senderEmail}
                  onChange={(e) => updateInvoice({ senderEmail: e.target.value })}
                  onBlur={() => markTouched('senderEmail')}
                  className={cn(errors.senderEmail && touched.senderEmail && 'border-destructive')}
                />
                {errors.senderEmail && touched.senderEmail && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.senderEmail}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderPhone">Phone</Label>
                <Input
                  id="senderPhone"
                  placeholder="+1 (555) 000-0000"
                  value={invoice.senderPhone}
                  onChange={(e) => updateInvoice({ senderPhone: e.target.value })}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="senderAddress">Address</Label>
                <Textarea
                  id="senderAddress"
                  placeholder="123 Business Street, City, Country"
                  value={invoice.senderAddress}
                  onChange={(e) => updateInvoice({ senderAddress: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Logo (Optional)</Label>
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                {invoice.senderLogo ? (
                  <div className="relative inline-block">
                    <img 
                      src={invoice.senderLogo} 
                      alt="Logo" 
                      className="h-20 w-20 object-contain rounded-xl border border-border"
                    />
                    <button
                      onClick={() => updateInvoice({ senderLogo: undefined })}
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => logoInputRef.current?.click()}
                    className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 2MB</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 2: Client Details */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Client Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">
                  Client Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="clientName"
                  placeholder="Client or Company Name"
                  value={invoice.clientName}
                  onChange={(e) => updateInvoice({ clientName: e.target.value })}
                  onBlur={() => markTouched('clientName')}
                  className={cn(errors.clientName && touched.clientName && 'border-destructive')}
                />
                {errors.clientName && touched.clientName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.clientName}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientEmail">Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="client@company.com"
                  value={invoice.clientEmail}
                  onChange={(e) => updateInvoice({ clientEmail: e.target.value })}
                  onBlur={() => markTouched('clientEmail')}
                  className={cn(errors.clientEmail && touched.clientEmail && 'border-destructive')}
                />
                {errors.clientEmail && touched.clientEmail && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.clientEmail}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientPhone">Phone</Label>
                <Input
                  id="clientPhone"
                  placeholder="+1 (555) 000-0000"
                  value={invoice.clientPhone}
                  onChange={(e) => updateInvoice({ clientPhone: e.target.value })}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="clientAddress">Address</Label>
                <Textarea
                  id="clientAddress"
                  placeholder="Client's billing address"
                  value={invoice.clientAddress}
                  onChange={(e) => updateInvoice({ clientAddress: e.target.value })}
                  rows={2}
                />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Invoice Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input
                  id="invoiceNumber"
                  value={invoice.invoiceNumber}
                  onChange={(e) => updateInvoice({ invoiceNumber: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="createdAt">Invoice Date</Label>
                <Input
                  id="createdAt"
                  type="date"
                  value={invoice.createdAt}
                  onChange={(e) => updateInvoice({ createdAt: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => updateInvoice({ dueDate: e.target.value })}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 3: Items */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Invoice Items</h3>
              <Button onClick={addItem} variant="outline" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Item
              </Button>
            </div>

            {errors.items && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{errors.items}</span>
              </div>
            )}

            {invoice.items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No items added yet</p>
                <Button onClick={addItem} variant="gradient" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add First Item
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {invoice.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-muted/30 rounded-xl p-4"
                  >
                    <div className="grid grid-cols-12 gap-3 items-end">
                      <div className="col-span-12 md:col-span-4 space-y-2">
                        <Label>Description</Label>
                        <Input
                          placeholder="Item description"
                          value={item.description}
                          onChange={(e) => updateItem(index, { description: e.target.value })}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-2 space-y-2">
                        <Label>Qty</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(index, { quantity: Number(e.target.value) })}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-2 space-y-2">
                        <Label>Unit Price</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(index, { unitPrice: Number(e.target.value) })}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-2 space-y-2">
                        <Label>Tax %</Label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={item.taxRate}
                          onChange={(e) => updateItem(index, { taxRate: Number(e.target.value) })}
                        />
                      </div>
                      <div className="col-span-6 md:col-span-2 space-y-2">
                        <Label>Discount %</Label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={item.discount}
                          onChange={(e) => updateItem(index, { discount: Number(e.target.value) })}
                        />
                      </div>

                      {/* By mee */}
                      <div className='flex flex-row gap-1'>
                        
                      
                      <div className="col-span-4 md:col-span-1 ">
                        <Label>Total</Label>
                        <p className="h-10 flex items-center font-semibold text-foreground">
                          {formatCurrency(item.total, invoice.currency)}
                        </p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Totals */}
            {invoice.items.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="max-w-xs ml-auto space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatCurrency(invoice.subtotal, invoice.currency)}</span>
                  </div>
                  {invoice.discountTotal > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-medium text-green-500">-{formatCurrency(invoice.discountTotal, invoice.currency)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">{formatCurrency(invoice.taxTotal, invoice.currency)}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2 pt-2 border-t border-border">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="shipping" className="text-muted-foreground">Shipping</Label>
                      <Input
                        id="shipping"
                        type="number"
                        min="0"
                        step="0.01"
                        value={invoice.shippingCost}
                        onChange={(e) => {
                          const shipping = Number(e.target.value);
                          const totals = calculateInvoiceTotals(invoice.items, shipping);
                          updateInvoice({ shippingCost: shipping, ...totals });
                        }}
                        className="w-24 h-8 text-sm"
                      />
                    </div>
                    <span className="font-medium">{formatCurrency(invoice.shippingCost, invoice.currency)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">{formatCurrency(invoice.total, invoice.currency)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Step 4: Settings */}
      {currentStep === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Invoice Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Currency</Label>
                <Select
                  value={invoice.currency}
                  onValueChange={(value) => updateInvoice({ currency: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Tax Type</Label>
                <Select
                  value={invoice.taxType}
                  onValueChange={(value) => updateInvoice({ taxType: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TAX_TYPES.map((tax) => (
                      <SelectItem key={tax.value} value={tax.value}>
                        {tax.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Notes & Terms</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any additional notes for the client..."
                  value={invoice.notes}
                  onChange={(e) => updateInvoice({ notes: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="terms">Terms & Conditions</Label>
                <Textarea
                  id="terms"
                  placeholder="Payment terms, late fees, etc."
                  value={invoice.termsAndConditions}
                  onChange={(e) => updateInvoice({ termsAndConditions: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          variant={currentStep === totalSteps ? 'gradient' : 'default'}
          onClick={handleNext}
        >
          {currentStep === totalSteps ? 'Generate Invoice' : 'Next'}
        </Button>
      </div>
    </div>
  );
};
