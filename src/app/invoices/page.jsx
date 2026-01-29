"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Plus, Trash2, Eye, Calendar, Clock } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { AdBanner } from "@/components/layout/AdBanner";
// import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from "@/components/ui/button";
import { useInvoiceStorage } from "@/hooks/use-invoice-storage";
import { formatCurrency, formatDate } from "@/lib/invoice-utils";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const MyInvoices = () => {
  const { invoices, deleteInvoice, isLoaded } = useInvoiceStorage();
  const [deleteTarget, setDeleteTarget] = useState(null);

  //   const handleDelete = (id, invoiceNumber) => {
  //     if (confirm(`Delete invoice ${invoiceNumber}? This cannot be undone.`)) {
  //       deleteInvoice(id);
  //       toast.success("Invoice Deleted", {
  //         description: `Invoice ${invoiceNumber} has been removed.`,
  //       });
  //     }
  //   };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      {/* <SEOHead
        title="My Invoices"
        description="View and manage all your invoices. Download PDFs, share, or create new invoices."
        keywords="invoices, invoice list, manage invoices"
      /> */}

      <Header />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto w-full">
        <AdBanner variant="horizontal" className="mb-6" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">My Invoices</h1>
            <p className="text-muted-foreground mt-1">
              {invoices.length} invoice{invoices.length !== 1 ? "s" : ""} stored
              locally
            </p>
          </div>

          <Link href="/templates">
            <Button variant="gradient" className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New Invoice</span>
            </Button>
          </Link>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-muted/30 border rounded-xl flex gap-3"
        >
          <Clock className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Invoices are stored locally</p>
            <p className="text-sm text-muted-foreground">
              Invoices auto-delete after 30 days. Download PDFs to keep them
              permanently.
            </p>
          </div>
        </motion.div>

        {/* Invoice List */}
        {!isLoaded ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading invoices...
          </div>
        ) : invoices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-muted-foreground" />
            </div>

            <h2 className="text-xl font-semibold mb-2">No invoices yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create your first invoice and it will appear here.
            </p>

            <Link href="/templates">
              <Button variant="gradient" size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Create Invoice
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {invoices.map((invoice, index) => (
              <motion.div
                key={invoice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border rounded-2xl p-4 sm:p-6 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold truncate">
                          {invoice.invoiceNumber}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {invoice.clientName || "No client name"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground ml-13">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(invoice.createdAt, "short")}
                      </span>

                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-medium",
                          invoice.status === "paid" &&
                            "bg-green-100 text-green-700",
                          invoice.status === "sent" &&
                            "bg-blue-100 text-blue-700",
                          invoice.status === "draft" &&
                            "bg-gray-100 text-gray-700",
                          invoice.status === "overdue" &&
                            "bg-red-100 text-red-700"
                        )}
                      >
                        {invoice.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold">
                      {formatCurrency(invoice.total, invoice.currency)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Due: {formatDate(invoice.dueDate, "short")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/invoice/${invoice.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </Link>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setDeleteTarget({
                          id: invoice.id,
                          invoiceNumber: invoice.invoiceNumber,
                        })
                      }
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <AdBanner variant="horizontal" className="mt-8" />
        <AlertDialog
          open={!!deleteTarget}
          onOpenChange={() => setDeleteTarget(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Invoice?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete invoice{" "}
                <strong>{deleteTarget?.invoiceNumber}</strong>? This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={() => {
                  deleteInvoice(deleteTarget.id);
                  toast.success("Invoice Deleted", {
                    description: `Invoice ${deleteTarget.invoiceNumber} has been removed.`,
                  });
                  setDeleteTarget(null);
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default MyInvoices;
