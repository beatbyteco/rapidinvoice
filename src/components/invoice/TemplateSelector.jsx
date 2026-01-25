'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAvailableTemplates } from '@/lib/invoice-themes';

export const TemplateSelector = ({ selectedTemplate, onSelect }) => {
  const templates = getAvailableTemplates();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Choose Template</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate === template.id}
            onSelect={() => onSelect(template.id)}
          />
        ))}
      </div>
    </div>
  );
};

const TemplateCard = ({ template, isSelected, onSelect }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={cn(
        "relative p-3 rounded-xl border-2 transition-all text-left",
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50 bg-card"
      )}
    >
      {/* Template Preview */}
      <div
        className="aspect-3/4 rounded-lg mb-3 overflow-hidden"
        style={{ backgroundColor: template.accentColor }}
      >
        <div className="p-3 h-full flex flex-col">
          {/* Mini header */}
          <div className="flex justify-between items-start mb-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: template.primaryColor }}
            />
            <div className="text-right">
              <div
                className="w-12 h-1.5 rounded"
                style={{ backgroundColor: template.textColor, opacity: 0.3 }}
              />
              <div
                className="w-8 h-1 rounded mt-1"
                style={{ backgroundColor: template.primaryColor, opacity: 0.5 }}
              />
            </div>
          </div>

          {/* Mini content */}
          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <div className="flex-1 space-y-1">
                <div
                  className="w-full h-1 rounded"
                  style={{ backgroundColor: template.textColor, opacity: 0.2 }}
                />
                <div
                  className="w-3/4 h-1 rounded"
                  style={{ backgroundColor: template.textColor, opacity: 0.1 }}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div
                  className="w-full h-1 rounded"
                  style={{ backgroundColor: template.textColor, opacity: 0.2 }}
                />
                <div
                  className="w-3/4 h-1 rounded"
                  style={{ backgroundColor: template.textColor, opacity: 0.1 }}
                />
              </div>
            </div>

            {/* Mini table */}
            <div className="mt-auto space-y-1">
              <div
                className="w-full h-2 rounded"
                style={{ backgroundColor: template.primaryColor, opacity: 0.2 }}
              />
              <div
                className="w-full h-1.5 rounded"
                style={{ backgroundColor: template.textColor, opacity: 0.1 }}
              />
              <div
                className="w-full h-1.5 rounded"
                style={{ backgroundColor: template.textColor, opacity: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Template Name */}
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm text-foreground">
          {template.name}
        </span>
      </div>

      {/* Selected indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        >
          <Check className="h-4 w-4 text-primary-foreground" />
        </motion.div>
      )}
    </motion.button>
  );
};
