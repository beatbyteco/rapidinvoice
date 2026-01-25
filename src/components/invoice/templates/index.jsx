import React from 'react';
import { ModernTemplate } from './ModernTemplate';
import { ClassicTemplate } from './ClassicTemplate';
import { MinimalTemplate } from './MinimalTemplate';

// Template registry - add new templates here
export const TEMPLATE_REGISTRY = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
};

export const getTemplateComponent = (templateId) => {
  return TEMPLATE_REGISTRY[templateId] || TEMPLATE_REGISTRY.modern;
};

export { ModernTemplate, ClassicTemplate, MinimalTemplate };


// Usage stays the same
// const TemplateComponent = getTemplateComponent(invoice.template);
// <TemplateComponent invoice={invoice} theme={theme} />