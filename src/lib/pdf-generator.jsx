// 'use client';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const sanitizeColors = (root) => {
//   const elements = root.querySelectorAll('*');

//   elements.forEach((el) => {
//     const style = window.getComputedStyle(el);

//     [
//       'backgroundColor',
//       'color',
//       'borderColor',
//       'borderTopColor',
//       'borderRightColor',
//       'borderBottomColor',
//       'borderLeftColor',
//     ].forEach((prop) => {
//       const value = style[prop];
//       if (value && (value.includes('lab(') || value.includes('oklch('))) {
//         el.style[prop] = '#ffffff';
//       }
//     });
//   });
// };

// export const generatePDF = async (element, options = {}) => {
//   if (!element) {
//     throw new Error('PDF element not found');
//   }

//   const clone = element.cloneNode(true);
//   clone.style.position = 'absolute';
//   clone.style.left = '-9999px';
//   clone.style.top = '0';
//   clone.style.width = '800px';
//   clone.style.backgroundColor = '#ffffff';

//   document.body.appendChild(clone);
//   sanitizeColors(clone);

//   try {
//     const canvas = await html2canvas(clone, {
//       scale: 2,
//       useCORS: true,
//       backgroundColor: '#ffffff',
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');

//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const imgWidth = pageWidth - 20;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//     pdf.save(options.filename || 'invoice.pdf');
//   } finally {
//     document.body.removeChild(clone);
//   }
// };

// export const downloadInvoicePDF = async (invoiceNumber) => {
//   const element = document.getElementById('invoice-pdf-content');

//   if (!element) {
//     throw new Error('Invoice DOM element not found');
//   }

//   const safeName = invoiceNumber.replace(/[^a-zA-Z0-9]/g, '-');

//   await generatePDF(element, {
//     filename: `invoice-${safeName}.pdf`,
//   });
// };
