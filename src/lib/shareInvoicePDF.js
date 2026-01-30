const handleShare = async () => {
  try {
    const element = invoiceRef.current;
    if (!element) throw new Error('Invoice not found');

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

    const blob = pdf.output('blob');
    const file = new File(
      [blob],
      `invoice-${invoice.invoiceNumber}.pdf`,
      { type: 'application/pdf' }
    );

    // ✅ TRY native share
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `Invoice ${invoice.invoiceNumber}`,
        files: [file],
      });

      toast.success('Invoice Shared!', {
        description: 'PDF shared successfully.',
      });
    } 
    // 🔁 FALLBACK
    else {
      pdf.save(`invoice-${invoice.invoiceNumber}.pdf`);

      toast.info('PDF Downloaded', {
        description: 'Your browser does not support direct sharing. Please share the downloaded PDF.',
      });
    }
  } catch (err) {
    toast.error('Share Failed', {
      description: 'Unable to generate or share PDF.',
    });
  }
};
