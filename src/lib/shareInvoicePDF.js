// 'use client';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// export async function shareInvoicePDF(element, invoiceNumber) {
//   if (!element) throw new Error('Invoice element not found');

//   if (document.fonts) {
//     await document.fonts.ready;
//   }

//   const canvas = await html2canvas(element, {
//     scale: 2,
//     backgroundColor: '#ffffff',
//     useCORS: true,
//     allowTaint: true,
//     windowWidth: element.scrollWidth,
//     windowHeight: element.scrollHeight,
//   });

//   if (!canvas || canvas.width === 0) {
//     throw new Error('Canvas generation failed');
//   }

//   const imgData = canvas.toDataURL('image/png');

//   const pdf = new jsPDF('p', 'mm', 'a4');
//   const pageWidth = pdf.internal.pageSize.getWidth();
//   const pageHeight = pdf.internal.pageSize.getHeight();

//   const imgWidth = pageWidth - 20;
//   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   let heightLeft = imgHeight;
//   let position = 10;

//   pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//   heightLeft -= pageHeight;

//   while (heightLeft > 0) {
//     position = heightLeft - imgHeight + 10;
//     pdf.addPage();
//     pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;
//   }

//   const blob = pdf.output('blob');

//   const file = new File(
//     [blob],
//     `invoice-${invoiceNumber}.pdf`,
//     { type: 'application/pdf' }
//   );

//   if (navigator.canShare && navigator.canShare({ files: [file] })) {
//     await navigator.share({
//       title: `Invoice ${invoiceNumber}`,
//       files: [file],
//     });
//   } else {
//     pdf.save(`invoice-${invoiceNumber}.pdf`);
//     throw new Error('SHARE_NOT_SUPPORTED');
//   }
// }
