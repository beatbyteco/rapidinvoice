"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export default function SalesTaxCalculator() {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("add");
  const [rate, setRate] = useState("7.25");

  const calculate = useCallback(() => {
    const amt = parseFloat(amount);
    const r = parseFloat(rate);
    if (!amt || amt <= 0 || !r || r <= 0) return null;

    let subtotal, tax, total;

    if (mode === "add") {
      subtotal = amt;
      tax = (amt * r) / 100;
      total = amt + tax;
    } else {
      total = amt;
      subtotal = amt / (1 + r / 100);
      tax = amt - subtotal;
    }

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  }, [amount, mode, rate]);

  const result = calculate();

  const reset = () => {
    setAmount("");
    setMode("add");
    setRate("7.25");
  };

  const copyResult = () => {
    if (!result) return;
    navigator.clipboard.writeText(
      `Subtotal: $${result.subtotal} | Tax: $${result.tax} | Total: $${result.total}`,
    );
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
        <div>
          <Label htmlFor="st-amount">Amount ($)</Label>
          <Input
            id="st-amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label>Mode</Label>
          <RadioGroup
            value={mode}
            onValueChange={(v) => setMode(v)}
            className="flex gap-4 mt-1.5"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="add" id="st-add" />
              <Label htmlFor="st-add" className="font-normal cursor-pointer">
                Add Tax
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="remove" id="st-remove" />
              <Label htmlFor="st-remove" className="font-normal cursor-pointer">
                Remove Tax
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="st-rate">Sales Tax Rate (%)</Label>
          <Input
            id="st-rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            step="0.01"
            className="mt-1.5 max-w-32"
          />
        </div>

        {result && (
          <div className="bg-muted/50 rounded-lg p-4 border">
            <h3 className="font-semibold text-foreground mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-right font-medium text-foreground">
                ${result.subtotal}
              </span>

              <span className="text-muted-foreground">Sales Tax ({rate}%)</span>
              <span className="text-right font-medium text-foreground">
                ${result.tax}
              </span>

              <span className="text-muted-foreground font-semibold border-t pt-2">
                Total
              </span>
              <span className="text-right font-bold text-foreground border-t pt-2">
                ${result.total}
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" onClick={reset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {result && (
            <Button
              variant="secondary"
              onClick={copyResult}
              className="gap-1.5"
            >
              <Copy className="h-4 w-4" /> Copy Result
            </Button>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
        

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What is Sales Tax?
        </h2>
        <p className="mb-4">
          Sales tax is a consumption tax in the United States charged when
          customers purchase goods or certain services. Businesses collect the
          tax and send it to the state government.
        </p>
        <p className="mb-4">
          The USA does not have a national sales tax. Each state sets its own
          rates and rules.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          When Does Sales Tax Apply?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Selling physical products</li>
          <li>Operating an online store</li>
          <li>Having business nexus in a state</li>
          <li>High sales volume in a state</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Typical State Tax Rates
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">State</th>
                <th className="border px-4 py-2">Typical Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">California</td>
                <td className="border px-4 py-2">~7.25%+</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Texas</td>
                <td className="border px-4 py-2">~6.25%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">New York</td>
                <td className="border px-4 py-2">~4% + local</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Florida</td>
                <td className="border px-4 py-2">~6%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          State vs Local Tax
        </h2>
        <p className="mb-4">
          Sales tax includes state tax and local city/county tax.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p>Example:</p>
          <p>Texas: 6.25%</p>
          <p>City: 2%</p>
          <p className="font-bold">Total: 8.25%</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Real Invoice Example
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p>Product price: $100</p>
          <p>Tax (8%): $8</p>
          <p className="font-bold">Total: $108</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Who Must Collect Sales Tax?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Shopify sellers</li>
          <li>Amazon/Etsy sellers</li>
          <li>Businesses with US inventory</li>
          <li>Businesses with economic nexus</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Late Filing Penalties
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Fines</li>
          <li>Interest</li>
          <li>License suspension</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Filing Returns</h2>
        <p className="mb-4">
          Businesses must register for a sales tax permit, collect tax, and file
          monthly or quarterly returns for each state.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Sales Tax Rules for SaaS & Freelancers
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Physical goods → taxable</li>
          <li>Services → state dependent</li>
          <li>SaaS → taxable in many states (NY, TX, WA, PA)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Ignoring nexus</li>
          <li>Wrong tax rate</li>
          <li>Not filing returns</li>
        </ul>
      </div>
    </>
  );
}
