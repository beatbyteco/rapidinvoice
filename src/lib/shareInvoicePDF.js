'use client';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function shareInvoicePDF(element, invoiceNumber) {
  if (!element) throw new Error('Invoice not found');

  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: '#ffffff',
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const imgWidth = pageWidth - 20;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

  // 👇 IMPORTANT: Blob instead of save()
  const pdfBlob = pdf.output('blob');

  const file = new File(
    [pdfBlob],
    `invoice-${invoiceNumber}.pdf`,
    { type: 'application/pdf' }
  );

  if (!navigator.canShare || !navigator.canShare({ files: [file] })) {
    throw new Error('Sharing not supported');
  }

  await navigator.share({
    title: `Invoice ${invoiceNumber}`,
    text: 'Invoice PDF',
    files: [file],
  });
}
