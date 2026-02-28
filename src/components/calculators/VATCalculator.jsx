"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export default function VATCalculator() {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("add");
  const [rate, setRate] = useState("20");

  const calculate = useCallback(() => {
    const amt = parseFloat(amount);
    const r = parseFloat(rate);
    if (!amt || amt <= 0 || !r || r <= 0) return null;

    let net, vat, gross;

    if (mode === "add") {
      net = amt;
      vat = (amt * r) / 100;
      gross = amt + vat;
    } else {
      gross = amt;
      net = amt / (1 + r / 100);
      vat = amt - net;
    }

    return {
      net: net.toFixed(2),
      vat: vat.toFixed(2),
      gross: gross.toFixed(2),
    };
  }, [amount, mode, rate]);

  const result = calculate();

  const reset = () => {
    setAmount("");
    setMode("add");
    setRate("20");
  };

  const copyResult = () => {
    if (!result) return;
    navigator.clipboard.writeText(
      `Net: £${result.net} | VAT: £${result.vat} | Gross: £${result.gross}`,
    );
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
        <div>
          <Label htmlFor="vat-amount">Amount (£)</Label>
          <Input
            id="vat-amount"
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
              <RadioGroupItem value="add" id="vat-add" />
              <Label htmlFor="vat-add" className="font-normal cursor-pointer">
                Add VAT
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="remove" id="vat-remove" />
              <Label
                htmlFor="vat-remove"
                className="font-normal cursor-pointer"
              >
                Remove VAT
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="vat-rate">VAT Rate (%)</Label>
          <Input
            id="vat-rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            step="0.1"
            className="mt-1.5 max-w-32"
          />
        </div>

        {result && (
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 border">
            <h3 className="font-semibold text-foreground mb-3">Results</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">Net Amount</span>
              <span className="text-right font-medium text-foreground">
                £{result.net}
              </span>

              <span className="text-muted-foreground">VAT ({rate}%)</span>
              <span className="text-right font-medium text-foreground">
                £{result.vat}
              </span>

              <span className="text-muted-foreground font-semibold border-t pt-2">
                Gross Total
              </span>
              <span className="text-right font-bold text-foreground border-t pt-2">
                £{result.gross}
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

      {/* Article Content */}
      <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-semibold mt-10 mb-4">What is VAT?</h2>
        <p className="mb-4">
          VAT (Value Added Tax) is a consumption tax used in the United Kingdom
          and many European countries. It is charged on most goods and services
          sold by VAT-registered businesses.
        </p>
        <p className="mb-4">
          Businesses collect VAT from customers and send it to HMRC. The final
          tax burden is paid by the end consumer.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          When Does VAT Apply?
        </h2>
        <p className="mb-4">
          VAT applies when a business makes taxable supplies of goods or
          services in the UK. <br /> You must register for VAT if your turnover
          exceeds:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="mb-2 font-semibold">
            £90,000 per year (UK VAT threshold)
          </p>
        </div>

        <p className="mb-4">VAT also applies when:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Selling digital products</li>
          <li>Software or SaaS</li>
          <li>E-commerce stores</li>
          <li>Consulting services</li>
          <li>Importing goods into the UK</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          VAT Rates in the UK
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">VAT Rate</th>
                <th className="border px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">0%</td>
                <td className="border px-4 py-2">Zero-rated items</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5%</td>
                <td className="border px-4 py-2">Reduced rate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">20%</td>
                <td className="border px-4 py-2">Standard rate</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-xl font-semibold mt-10 mb-4">Examples</h2>
          <h3 className="font-semibold">0% VAT</h3>
          <ol className="list-disc pt-2 pl-6 space-y-2">
            <li>Most food items</li>
            <li>Books</li>
            <li>Children’s clothing</li>
          </ol>
          <h3 className="font-semibold pt-1.5">5% VAT</h3>
          <ol className="list-disc pt-2 pl-6 space-y-2">
            <li>Home energy</li>
            <li>Child car seats</li>
          </ol>
          <h3 className="font-semibold pt-1.5">20% VAT (Standard Rate)</h3>
          <ol className="list-disc pt-2 pl-6 space-y-2">
            <li>Electronics</li>
            <li>Software</li>
            <li>Digital services</li>
            <li>Consulting services</li>
          </ol>
          <p className="pt-2">
            Most online businesses and freelancers charge 20% VAT.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Output VAT vs Input VAT
        </h2>
        <p className="mb-4">
          Output VAT is VAT you collect from customers. Input VAT is VAT you pay
          on business purchases.
        </p>
        <p className="mb-4 font-semibold">
          VAT payable = Output VAT − Input VAT
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold">Example</h3>
          <p>Customer charged: £1,200</p>
          <p>Input VAT paid: £200</p>
          <p className="font-bold">VAT to HMRC: £0</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Real VAT Invoice Example
        </h2>
        <p>A valid VAT invoice must include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Company details</li>
          <li>VAT Registration Number</li>
          <li>Invoice number & date</li>
          <li>Description of service</li>
          <li>VAT amount</li>
          <li>Total payable</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold">Example</h3>
          <p>Service Fee: £500</p>
          <p>VAT (20%): £100</p>
          <p className="font-bold">Total: £600</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Who Needs VAT Registration?
        </h2>
        <p>You must register if:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Turnover above £90,000</li>
          <li>E-commerce sellers</li>
          <li>SaaS businesses</li>
          <li>Importers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Late Filing Penalties
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Default</th>
                <th className="border px-4 py-2">Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Missing return</td>
                <td className="border px-4 py-2">Penalty points</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Repeated misses</td>
                <td className="border px-4 py-2">£200 fine</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Late payment</td>
                <td className="border px-4 py-2">Interest charges</td>
              </tr>
            </tbody>
          </table>
          <p className="pt-2">If returns are ignored:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>VAT account can be frozen</li>
            <li>Legal notices can be issued</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">VAT Returns</h2>
        <p className="mb-4">
          Most businesses file VAT returns quarterly using Making Tax Digital
          software.
        </p>
        <p>VAT return includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Sales VAT collected</li>
          <li>Purchase VAT paid</li>
          <li>VAT payable or refundable</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          VAT Rules for Freelancers
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>UK clients → charge VAT</li>
          <li>Non-UK clients → reverse charge (usually no VAT)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Common VAT Mistakes
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Wrong VAT rate</li>
          <li>Late returns</li>
          <li>Missing invoices</li>
          <li>Ignoring reverse charge</li>
        </ul>
      </div>
    </>
  );
}