export const toolsData = [
  {
    slug: "gst-calculator",
    title: "GST Calculator",
    seoTitle:
      "Free GST Calculator (India) | Complete Guide for Businesses & Freelancers (2026)",
    description:
      "Use our free GST calculator to calculate inclusive and exclusive GST instantly. Supports 5%, 12%, 18%, and 28% GST rates with CGST and SGST breakdown.",
    category: "tax",
    categoryLabel: "Tax Calculator",
    h1: "GST Calculator (India) | Complete Guide for Businesses & Freelancers (2026)",
    intro:
      "Calculate Goods and Services Tax (GST) for India quickly and accurately. Our free GST calculator supports both inclusive and exclusive GST calculations across all standard rates — 5%, 12%, 18%, and 28%. Whether you are a business owner preparing invoices, a freelancer quoting clients, or an accountant verifying tax figures, this tool gives you instant results with a detailed breakdown of CGST and SGST components.",
    howToUse: [
      "Enter the amount in the input field.",
      "Select whether the amount is GST Exclusive (add GST) or GST Inclusive (GST already included).",
      "Choose the applicable GST rate: 5%, 12%, 18%, or 28%.",
      "View the calculated GST amount, CGST, SGST, and total instantly.",
    ],
    // formulaExplanation: 'For GST Exclusive: GST Amount = Amount × Rate / 100. Total = Amount + GST. For GST Inclusive: Base Amount = Amount / (1 + Rate/100). GST = Amount − Base. In both cases, CGST = GST / 2 and SGST = GST / 2 for intra-state transactions.',
    // realWorldExample: 'A freelancer invoices ₹10,000 (exclusive of GST) at 18% GST. GST = ₹10,000 × 18/100 = ₹1,800. CGST = ₹900, SGST = ₹900. Total invoice = ₹11,800.',
    faqs: [
      {
        question: "Is GST mandatory for freelancers?",
        answer: "Only if turnover exceeds ₹20 lakh or you export services.",
      },
      {
        question: "How do I calculate GST on an amount?",
        answer:
          "To calculate GST on an amount, multiply the base amount by the GST rate and divide by 100. For example, 18% GST on ₹10,000 = ₹10,000 × 18/100 = ₹1,800.",
      },
      {
        question: "What are the GST rates in India?",
        answer:
          "India has four GST slabs: 5%, 12%, 18%, and 28%. Essential goods fall under 5%, standard goods under 12% or 18%, and luxury and sin goods under 28%.",
      },
      {
        question: "Do I need GST for foreign clients?",
        answer: "Yes, but tax rate is 0% under export of services.",
      },
      {
        question: "What is the difference between CGST and SGST?",
        answer:
          "CGST (Central GST) goes to the Central Government and SGST (State GST) goes to the State Government. Both are equal halves of the total GST for intra-state sales.",
      },
    ],
  },
  {
    slug: "vat-calculator",
    title: "VAT Calculator",
    seoTitle: "Free VAT Calculator (UK) – Add or Remove VAT Online",
    description:
      "Calculate VAT instantly with our free UK VAT calculator. Add or remove VAT at 20% or any custom rate. Perfect for businesses, freelancers, and accountants.",
    category: "tax",
    categoryLabel: "Tax Calculator",
    h1: "VAT Calculator (UK)",
    intro:
      "Calculate Value Added Tax (VAT) quickly with our free online calculator. The standard UK VAT rate is 20%, but you can customise the rate for reduced or zero-rated goods. This tool lets you add VAT to a net amount or remove VAT from a gross amount, making it perfect for invoicing, pricing, and accounting purposes.",
    howToUse: [
      "Enter the amount you want to calculate VAT on.",
      "Select whether to Add VAT or Remove VAT.",
      "Adjust the VAT rate if needed (default is 20%).",
      "View the net amount, VAT amount, and gross total instantly.",
    ],
    formulaExplanation:
      "To Add VAT: VAT Amount = Net Amount × Rate / 100. Gross = Net + VAT. To Remove VAT: Net Amount = Gross / (1 + Rate/100). VAT = Gross − Net.",
    realWorldExample:
      "A product costs £500 before VAT at 20%. VAT = £500 × 20/100 = £100. Total price = £600. If you have a VAT-inclusive price of £600, the net is £600 / 1.20 = £500.",
    faqs: [
      {
        question: "What is VAT?",
        answer:
          "VAT (Value Added Tax) is a consumption tax added to products and services at each stage of production or distribution. In the UK, the standard rate is 20%.",
      },
      {
        question: "How do I add VAT to a price?",
        answer:
          "Multiply the net price by the VAT rate (e.g., 20%) and add it to the original price. For example, £100 + 20% VAT = £120.",
      },
      { question: "Is VAT mandatory?", answer: "Only after £90,000 turnover." },
      {
        question: "How do I remove VAT from a gross amount?",
        answer:
          "Divide the gross amount by (1 + VAT rate). For 20% VAT: £120 / 1.20 = £100 net price. The VAT portion is £20.",
      },
    ],
  },
  {
    slug: "sales-tax-calculator",
    title: "Sales Tax Calculator",
    seoTitle: "Free Sales Tax Calculator (USA) – Calculate Tax Online",
    description:
      "Calculate US sales tax instantly. Add or remove state sales tax with custom rates. Free, fast, and accurate for all 50 states.",
    category: "tax",
    categoryLabel: "Tax Calculator",
    h1: "Sales Tax Calculator (USA)",
    intro:
      "Calculate sales tax for any US state quickly and accurately. Sales tax rates vary by state, county, and city, so our calculator lets you enter a custom rate. Whether you are pricing products, preparing invoices, or verifying receipts, this free tool gives you instant results showing subtotal, tax amount, and final total.",
    howToUse: [
      "Enter the amount (subtotal or total).",
      "Select whether to Add Tax or Remove Tax.",
      "Enter your state or local sales tax rate.",
      "View the subtotal, tax amount, and total instantly.",
    ],
    formulaExplanation:
      "To Add Tax: Tax = Subtotal × Rate / 100. Total = Subtotal + Tax. To Remove Tax: Subtotal = Total / (1 + Rate/100). Tax = Total − Subtotal.",
    realWorldExample:
      "A product costs $200 before tax in California (7.25%). Tax = $200 × 7.25/100 = $14.50. Total = $214.50.",
    faqs: [
      {
        question: "What is sales tax?",
        answer:
          "Sales tax is a consumption tax imposed by state and local governments on the sale of goods and services. Rates vary by location in the United States.",
      },
      {
        question: "Which US states have no sales tax?",
        answer:
          "Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon. However, some localities in Alaska do charge sales tax.",
      },
      {
        question: "Does USA have national sales tax?",
        answer:
          "No, the United States does not have a national sales tax. Sales tax is determined and collected at the state and local levels.",
      },
      {
        question: "How do I calculate sales tax?",
        answer:
          "Multiply the purchase price by the sales tax rate (as a decimal). For example, $100 × 0.0725 = $7.25 tax for a 7.25% rate.",
      },
      {
        question: "Are services taxable?",
        answer:
          "It depends on the state. Some states tax certain services while others do not.",
      },
      {
        question: "Are digital products taxable?",
        answer:
          "Yes, in many states digital products such as software, downloads, and subscriptions are taxable.",
      },
      {
        question: "How often do I need to file sales tax?",
        answer:
          "Sales tax returns are typically filed monthly or quarterly depending on your state and sales volume.",
      },
      {
        question: "What happens if I don’t collect sales tax?",
        answer:
          "You may still be required to pay the tax yourself along with penalties and interest.",
      },
      {
        question: "Do I need a sales tax permit?",
        answer:
          "Yes, you must obtain a sales tax permit from the state before collecting sales tax.",
      },
      {
        question: "Is sales tax the same as VAT?",
        answer:
          "No, sales tax is collected only at the final sale, while VAT is collected at multiple stages of production and distribution.",
      },
      {
        question: "Can marketplaces collect sales tax for me?",
        answer:
          "Sometimes. Under marketplace facilitator laws, platforms like Amazon or Etsy may collect and remit tax on your behalf in certain states.",
      },
    ],
  },
  {
    slug: "profit-margin-calculator",
    title: "Profit Margin Calculator",
    seoTitle: "Free Profit Margin Calculator – Calculate Margin % Online",
    description:
      "Calculate profit margin percentage instantly. Enter revenue and cost to find profit and margin. Free tool for businesses and entrepreneurs.",
    category: "business",
    categoryLabel: "Business Calculator",
    h1: "Profit Margin Calculator",
    intro:
      "Calculate your profit margin quickly and accurately. Profit margin is one of the most important financial metrics for any business, measuring how much of your revenue translates into profit. Whether you are analysing product pricing, evaluating business performance, or preparing financial reports, this free calculator gives you instant results.",
    howToUse: [
      "Enter your total revenue (sales income).",
      "Enter your total cost (expenses).",
      "View the calculated profit and profit margin percentage instantly.",
    ],
    formulaExplanation:
      "Profit = Revenue − Cost. Profit Margin (%) = (Profit / Revenue) × 100. A higher margin means more of each dollar in revenue is kept as profit.",
    realWorldExample:
      "A business earns $50,000 revenue with $35,000 in costs. Profit = $15,000. Margin = ($15,000 / $50,000) × 100 = 30%.",
    faqs: [
      {
        question: "What is profit margin?",
        answer:
          "Profit margin is the percentage of revenue that remains as profit after all costs are deducted. It measures how efficiently a business converts revenue into profit.",
      },
      {
        question: "What is a good profit margin?",
        answer:
          "A good profit margin varies by industry. Generally, 10% is average, 20% is considered good, and 30%+ is excellent. Service businesses typically have higher margins than retail.",
      },
      {
        question: "What is the difference between gross and net profit margin?",
        answer:
          "Gross profit margin only deducts cost of goods sold (COGS), while net profit margin deducts all expenses including operating costs, taxes, and interest.",
      },
    ],
  },
  {
    slug: "break-even-calculator",
    title: "Break Even Calculator",
    seoTitle: "Free Break Even Calculator – Find Your Break Even Point",
    description:
      "Calculate your break-even point in units and revenue. Enter fixed costs, variable cost, and selling price. Free tool for business planning.",
    category: "business",
    categoryLabel: "Business Calculator",
    h1: "Break Even Calculator",
    intro:
      "Determine exactly how many units you need to sell to cover all your costs. The break-even point is critical for business planning, pricing strategy, and financial forecasting. This free calculator helps entrepreneurs, startups, and established businesses understand when they will start making profit.",
    howToUse: [
      "Enter your total fixed costs (rent, salaries, etc.).",
      "Enter the variable cost per unit (materials, labour per item).",
      "Enter the selling price per unit.",
      "View the break-even point in units and revenue.",
    ],
    formulaExplanation:
      "Break-Even Point (units) = Fixed Costs / (Selling Price per Unit − Variable Cost per Unit). The denominator is called the contribution margin per unit.",
    realWorldExample:
      "A bakery has fixed costs of $5,000/month. Each cake costs $10 to make and sells for $25. Break-even = $5,000 / ($25 − $10) = 333.33, so 334 cakes must be sold to break even.",
    faqs: [
      {
        question: "What is a break-even point?",
        answer:
          "The break-even point is the number of units a business must sell for total revenue to equal total costs. Below this point, the business operates at a loss; above it, at a profit.",
      },
      {
        question: "Why is break-even analysis important?",
        answer:
          "Break-even analysis helps businesses set pricing, control costs, and make informed decisions about launching new products or expanding operations.",
      },
      {
        question: "What happens if variable cost exceeds selling price?",
        answer:
          "If variable cost per unit is higher than the selling price, you cannot break even — every unit sold increases the loss. You must either raise prices or reduce costs.",
      },
    ],
  },
  {
    slug: "markup-calculator",
    title: "Markup Calculator",
    seoTitle: "Free Markup Calculator – Calculate Selling Price Online",
    description:
      "Calculate selling price from cost and markup percentage. Free markup calculator for retailers, wholesalers, and businesses.",
    category: "business",
    categoryLabel: "Business Calculator",
    h1: "Markup Calculator",
    intro:
      "Calculate the selling price of your products based on cost and desired markup percentage. Markup is essential for retailers, wholesalers, and any business setting prices. This free calculator instantly shows you the markup amount and final selling price, helping you maintain healthy profit margins.",
    howToUse: [
      "Enter the cost price of your product.",
      "Enter your desired markup percentage.",
      "View the markup amount and selling price instantly.",
    ],
    formulaExplanation:
      "Markup Amount = Cost × Markup% / 100. Selling Price = Cost + Markup Amount. For example, a $50 product with 40% markup: Markup = $50 × 40/100 = $20. Selling Price = $70.",
    realWorldExample:
      "A retailer buys a shirt for $20 and wants a 60% markup. Markup = $20 × 60/100 = $12. Selling Price = $20 + $12 = $32.",
    faqs: [
      {
        question: "What is markup?",
        answer:
          "Markup is the percentage added to the cost price to determine the selling price. It represents the profit as a percentage of the cost.",
      },
      {
        question: "What is the difference between markup and margin?",
        answer:
          "Markup is calculated on cost (profit/cost × 100), while margin is calculated on revenue (profit/revenue × 100). A 50% markup equals a 33.3% margin.",
      },
      {
        question: "How much markup should I add?",
        answer:
          "Markup varies by industry: retail typically uses 50-100%, wholesale 10-30%, and food service 200-400%. Consider competition, demand, and operating costs.",
      },
    ],
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    seoTitle: "Free Discount Calculator – Calculate Sale Price Online",
    description:
      "Calculate discount amount and final sale price instantly. Enter original price and discount percentage. Free tool for shoppers and retailers.",
    category: "business",
    categoryLabel: "Business Calculator",
    h1: "Discount Calculator",
    intro:
      "Calculate the final price after applying a discount quickly and easily. Whether you are a shopper checking sale prices, a retailer setting promotional pricing, or a business offering client discounts, this free tool gives you instant results showing the discount amount and final price.",
    howToUse: [
      "Enter the original price of the item.",
      "Enter the discount percentage.",
      "View the discount amount and final price instantly.",
    ],
    formulaExplanation:
      "Discount Amount = Original Price × Discount% / 100. Final Price = Original Price − Discount Amount.",
    realWorldExample:
      "A laptop originally priced at $1,000 is on sale at 15% off. Discount = $1,000 × 15/100 = $150. Final Price = $1,000 − $150 = $850.",
    faqs: [
      {
        question: "How do I calculate a discount?",
        answer:
          "Multiply the original price by the discount percentage, then divide by 100. Subtract the result from the original price to get the final price.",
      },
      {
        question:
          "How do I calculate the original price from a discounted price?",
        answer:
          "Original Price = Discounted Price / (1 − Discount%/100). For example, if you paid $85 after a 15% discount: $85 / 0.85 = $100.",
      },
      {
        question: "Can I stack multiple discounts?",
        answer:
          "Yes, but they are applied sequentially, not added. A 20% + 10% discount on $100: first $100 × 0.80 = $80, then $80 × 0.90 = $72. Total discount is 28%, not 30%.",
      },
    ],
  },
];

export const getToolBySlug = (slug) => toolsData.find((t) => t.slug === slug);

export const getRelatedTools = (currentSlug) =>
  toolsData.filter((t) => t.slug !== currentSlug).slice(0, 4);

export const getTaxTools = () => toolsData.filter((t) => t.category === "tax");

export const getBusinessTools = () =>
  toolsData.filter((t) => t.category === "business");
