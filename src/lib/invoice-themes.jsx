// Centralized theme system for invoice templates
// All colors and fonts are defined here - NEVER hardcode in templates

// Theme registry - add new themes here
export const INVOICE_THEMES = {
  modern: {
    id: 'modern',
    name: 'Modern',
    primaryColor: '#3B82F6',
    secondaryColor: '#6366F1',
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937',
    mutedTextColor: '#6B7280',
    borderColor: '#E5E7EB',
    accentColor: '#EFF6FF',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  classic: {
    id: 'classic',
    name: 'Classic',
    primaryColor: '#1F2937',
    secondaryColor: '#374151',
    backgroundColor: '#FFFFFF',
    textColor: '#111827',
    mutedTextColor: '#6B7280',
    borderColor: '#D1D5DB',
    accentColor: '#F9FAFB',
    fontFamily: 'Georgia, serif',
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    primaryColor: '#000000',
    secondaryColor: '#374151',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    mutedTextColor: '#9CA3AF',
    borderColor: '#F3F4F6',
    accentColor: '#FAFAFA',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    primaryColor: '#0F766E',
    secondaryColor: '#14B8A6',
    backgroundColor: '#FFFFFF',
    textColor: '#134E4A',
    mutedTextColor: '#5EEAD4',
    borderColor: '#CCFBF1',
    accentColor: '#F0FDFA',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant',
    primaryColor: '#7C3AED',
    secondaryColor: '#A78BFA',
    backgroundColor: '#FFFFFF',
    textColor: '#4C1D95',
    mutedTextColor: '#8B5CF6',
    borderColor: '#EDE9FE',
    accentColor: '#F5F3FF',
    fontFamily: 'Georgia, serif',
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    primaryColor: '#1E40AF',
    secondaryColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
    textColor: '#1E3A8A',
    mutedTextColor: '#60A5FA',
    borderColor: '#DBEAFE',
    accentColor: '#EFF6FF',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
};

export const getTheme = (templateId) => {
  return INVOICE_THEMES[templateId] || INVOICE_THEMES.modern;
};

export const getAvailableTemplates = () => {
  return Object.values(INVOICE_THEMES);
};
