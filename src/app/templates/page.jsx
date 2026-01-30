'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { getAvailableTemplates } from '@/lib/invoice-themes';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const TemplateSelection = () => {
  const router = useRouter();
  const templates = getAvailableTemplates();
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  const handleContinue = () => {
    router.push(`/generate-invoice?template=${selectedTemplate}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <Header />
      
      {/* <SEOHead
        title="Choose Invoice Template"
        description="Select from our collection of professional invoice templates. Modern, Classic, and Minimal designs to match your brand."
        keywords="invoice template, invoice design, professional invoice, free invoice template"
      /> */}

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl mx-auto w-full">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Step 1 of 2
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Choose Your Template
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a professional template that matches your brand. You can always change it later.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onSelect={() => setSelectedTemplate(template.id)}
              delay={index * 0.05}
            />
          ))}
        </motion.div>

        {/* Continue Button - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden sm:flex justify-center"
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={handleContinue}
            className="gap-2 px-8"
          >
            Continue with {templates.find(t => t.id === selectedTemplate)?.name}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </main>

      {/* Floating Continue Button - Mobile Only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-24 left-4 right-4 z-50 sm:hidden"
      >
        <Button
          variant="gradient"
          size="lg"
          onClick={handleContinue}
          className="w-full gap-2 shadow-xl"
        >
          Continue with {templates.find(t => t.id === selectedTemplate)?.name}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>

      <Footer />
      <BottomNav />
    </div>
  );
};

const TemplateCard = ({ template, isSelected, onSelect, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      onClick={onSelect}
      className={cn(
        "relative bg-card rounded-2xl border-2 overflow-hidden cursor-pointer transition-all",
        isSelected
          ? "border-primary shadow-lg shadow-primary/20"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
          <Check className="h-4 w-4 text-primary-foreground" />
        </div>
      )}

      {/* Template Preview */}
      <div className="p-4">
        <div
          className="aspect-4/5 rounded-lg overflow-hidden"
          style={{ backgroundColor: template.accentColor }}
        >
          <div className="h-full p-3 flex flex-col">
            <div
              className="h-8 rounded mb-2"
              style={{ backgroundColor: template.primaryColor, opacity: 0.2 }}
            />

            <div className="flex-1 space-y-2">
              <div
                className="h-3 w-3/4 rounded"
                style={{ backgroundColor: template.textColor, opacity: 0.3 }}
              />
              <div
                className="h-3 w-1/2 rounded"
                style={{ backgroundColor: template.textColor, opacity: 0.2 }}
              />
              <div className="pt-3 space-y-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-2 rounded"
                    style={{ backgroundColor: template.borderColor }}
                  />
                ))}
              </div>
            </div>

            <div
              className="h-6 rounded mt-auto"
              style={{ backgroundColor: template.primaryColor, opacity: 0.15 }}
            />
          </div>
        </div>
      </div>

      {/* Template Info */}
      <div className="px-4 pb-4">
        <h3 className="font-semibold text-foreground">{template.name}</h3>
        <p className="text-sm text-muted-foreground">
          {template.id === 'modern' && 'Clean and contemporary design'}
          {template.id === 'classic' && 'Traditional professional look'}
          {template.id === 'minimal' && 'Simple and elegant style'}
          {template.id === 'professional' && 'Business-focused layout'}
          {template.id === 'elegant' && 'Sophisticated appearance'}
          {template.id === 'corporate' && 'Enterprise-ready design'}
        </p>
      </div>
    </motion.div>
  );
};

export default TemplateSelection;
