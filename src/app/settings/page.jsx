'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Save,
  Building,
  CreditCard,
  Globe,
  Upload,
  X,
} from 'lucide-react';

import Link from 'next/link';
import { useRef } from 'react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CURRENCIES, TAX_TYPES } from '@/types/invoice';
import { toast } from 'sonner';
import { useUserSettings } from '@/hooks/use-user-settings';

const Settings = () => {
  const { settings, saveSettings, isLoaded } = useUserSettings();
  const logoInputRef = useRef(null);

  const handleSave = () => {
    saveSettings(settings);
    toast.success('Settings saved!', {
  description: 'Your preferences have been updated.',
});
  };

  const updateSettings = (updates) => {
    saveSettings(updates);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: 'File too large',
        description: 'Logo must be less than 2MB',
        variant: 'destructive',
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      updateSettings({ logo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

           <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link href="/invoices">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Set your default details for invoices</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="business" className="space-y-6">
            <TabsList className="bg-muted/50 p-1 w-full md:w-auto grid grid-cols-3 md:inline-flex">
              <TabsTrigger value="business" className="gap-2">
                <Building className="h-4 w-4" />
                <span className="hidden sm:inline">Business</span>
              </TabsTrigger>
              <TabsTrigger value="invoicing" className="gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Invoicing</span>
              </TabsTrigger>
              <TabsTrigger value="localization" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Localization</span>
              </TabsTrigger>
            </TabsList>

            {/* Business Settings */}
            <TabsContent value="business">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Business Information</h3>
                  <p className="text-sm text-muted-foreground">This information will auto-fill when creating new invoices.</p>
                </div>
                
                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label>Business Logo</Label>
                  <input
                    ref={logoInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  {settings.logo ? (
                    <div className="relative inline-block">
                      <img 
                        src={settings.logo} 
                        alt="Logo" 
                        className="h-24 w-24 object-contain rounded-xl border border-border bg-muted/30"
                      />
                      <button
                        onClick={() => updateSettings({ logo: '' })}
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => logoInputRef.current?.click()}
                      className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer max-w-xs"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Click to upload logo</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 2MB</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="Your Company Name"
                      value={settings.businessName}
                      onChange={(e) => updateSettings({ businessName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="billing@company.com"
                      value={settings.email}
                      onChange={(e) => updateSettings({ email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={settings.phone}
                      onChange={(e) => updateSettings({ phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value={settings.website}
                      onChange={(e) => updateSettings({ website: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                    <Input
                      id="taxId"
                      placeholder="Your Tax ID"
                      value={settings.taxId}
                      onChange={(e) => updateSettings({ taxId: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea
                      id="address"
                      placeholder="123 Business Street, City, Country"
                      value={settings.address}
                      onChange={(e) => updateSettings({ address: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Invoicing Settings */}
            <TabsContent value="invoicing">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Invoice Defaults</h3>
                  <p className="text-sm text-muted-foreground">Set default values for new invoices.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoicePrefix">Invoice Number Prefix</Label>
                    <Input
                      id="invoicePrefix"
                      placeholder="INV"
                      value={settings.invoicePrefix}
                      onChange={(e) => updateSettings({ invoicePrefix: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentTerms">Default Payment Terms (days)</Label>
                    <Input
                      id="paymentTerms"
                      type="number"
                      placeholder="30"
                      value={settings.defaultPaymentTerms}
                      onChange={(e) => updateSettings({ defaultPaymentTerms: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Default Tax Type</Label>
                    <Select
                      value={settings.defaultTaxType}
                      onValueChange={(value) => updateSettings({ defaultTaxType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select tax type" />
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
                  <div className="space-y-2">
                    <Label htmlFor="defaultTaxRate">Default Tax Rate (%)</Label>
                    <Input
                      id="defaultTaxRate"
                      type="number"
                      placeholder="0"
                      value={settings.defaultTaxRate}
                      onChange={(e) => updateSettings({ defaultTaxRate: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="defaultNotes">Default Notes</Label>
                    <Textarea
                      id="defaultNotes"
                      placeholder="Thank you for your business!"
                      value={settings.defaultNotes}
                      onChange={(e) => updateSettings({ defaultNotes: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="defaultTerms">Default Terms & Conditions</Label>
                    <Textarea
                      id="defaultTerms"
                      placeholder="Payment is due within 30 days of the invoice date."
                      value={settings.defaultTerms}
                      onChange={(e) => updateSettings({ defaultTerms: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Localization Settings */}
            <TabsContent value="localization">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Currency & Format</h3>
                  <p className="text-sm text-muted-foreground">Configure regional settings for your invoices.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Default Currency</Label>
                    <Select
                      value={settings.defaultCurrency}
                      onValueChange={(value) => updateSettings({ defaultCurrency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
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
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-end mt-6"
          >
            <Button variant="gradient" size="lg" onClick={handleSave} className="gap-2">
              <Save className="h-5 w-5" />
              Save Changes
            </Button>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Settings;
