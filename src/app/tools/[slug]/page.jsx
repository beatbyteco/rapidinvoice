import { notFound } from "next/navigation";
import { getToolBySlug } from "@/lib/toolsData";

import GSTCalculator from "@/components/calculators/GSTCalculator";
import VATCalculator from "@/components/calculators/VATCalculator";
import SalesTaxCalculator from "@/components/calculators/SalesTaxCalculator";
import ProfitMarginCalculator from "@/components/calculators/ProfitMarginCalculator";
import BreakEvenCalculator from "@/components/calculators/BreakEvenCalculator";
import MarkupCalculator from "@/components/calculators/MarkupCalculator";
import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { getToolBySlug, toolsData } from "@/lib/toolsData";

const calculatorComponents = {
  "gst-calculator": GSTCalculator,
  "vat-calculator": VATCalculator,
  "sales-tax-calculator": SalesTaxCalculator,
  "profit-margin-calculator": ProfitMarginCalculator,
  "break-even-calculator": BreakEvenCalculator,
  "markup-calculator": MarkupCalculator,
  "discount-calculator": DiscountCalculator,
};


export async function generateStaticParams() {
  return toolsData.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) return {};

  const url = `https://rapidinvoice.online/tools/${slug}`;

  return {
    title: tool.seoTitle,
    description: tool.description,
    keywords: [
      tool.title,
      "free calculator",
      "online calculator",
      tool.categoryLabel,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.description,
      url,
      siteName: "InvoiceFlow",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seoTitle,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;

  const tool = getToolBySlug(slug);
  const CalcComponent = calculatorComponents[slug];

  if (!tool || !CalcComponent) {
    notFound();
  }

  return (<CalculatorLayout tool={tool}>
      <CalcComponent />
    </CalculatorLayout>)
}