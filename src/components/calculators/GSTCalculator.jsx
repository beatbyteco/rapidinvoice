"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const GST_RATES = [5, 12, 18, 28];

export default function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("exclusive");
  const [rate, setRate] = useState(18);

  const calculate = useCallback(() => {
    const amt = parseFloat(amount);

    if (!amt || amt <= 0) return null;

    let baseAmount, gstAmount, total;

    if (mode === "exclusive") {
      baseAmount = amt;
      gstAmount = (amt * rate) / 100;
      total = amt + gstAmount;
    } else {
      total = amt;
      baseAmount = amt / (1 + rate / 100);
      gstAmount = amt - baseAmount;
    }

    return {
      baseAmount: baseAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      cgst: (gstAmount / 2).toFixed(2),
      sgst: (gstAmount / 2).toFixed(2),
      total: total.toFixed(2),
    };
  }, [amount, mode, rate]);

  const result = calculate();

  const reset = () => {
    setAmount("");
    setMode("exclusive");
    setRate(18);
  };

  const copyResult = () => {
    if (!result) return;

    const text = `Base: ₹${result.baseAmount} | GST: ₹${result.gstAmount} (CGST: ₹${result.cgst} + SGST: ₹${result.sgst}) | Total: ₹${result.total}`;

    navigator.clipboard.writeText(text);

    toast.success("Copied to clipboard");
  };

  return (
    <>
      <div className="border rounded-xl p-6 bg-card shadow-sm">
        <div className="space-y-5">
          {/* Amount */}
          <div>
            <Label htmlFor="gst-amount">Amount (₹)</Label>
            <Input
              id="gst-amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.01"
              className="mt-1.5"
            />
          </div>

          {/* Mode */}
          <div>
            <Label>Calculation Type</Label>
            <RadioGroup
              value={mode}
              onValueChange={(v) => setMode(v)}
              className="flex gap-4 mt-1.5"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="exclusive" id="excl" />
                <Label htmlFor="excl" className="font-normal cursor-pointer">
                  GST Exclusive (Add GST)
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <RadioGroupItem value="inclusive" id="incl" />
                <Label htmlFor="incl" className="font-normal cursor-pointer">
                  GST Inclusive (Remove GST)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* GST Rate */}
          <div>
            <Label>GST Rate</Label>
            <div className="flex gap-2 mt-1.5 flex-wrap">
              {GST_RATES.map((r) => (
                <Button
                  key={r}
                  type="button"
                  variant={rate === r ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRate(r)}
                >
                  {r}%
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 border">
              <h3 className="font-semibold text-foreground mb-3">Results</h3>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-muted-foreground">Base Amount</span>
                <span className="text-right font-medium text-foreground">
                  ₹{result.baseAmount}
                </span>

                <span className="text-muted-foreground">
                  GST Amount ({rate}%)
                </span>
                <span className="text-right font-medium text-foreground">
                  ₹{result.gstAmount}
                </span>

                <span className="text-muted-foreground">
                  CGST ({rate / 2}%)
                </span>
                <span className="text-right font-medium text-foreground">
                  ₹{result.cgst}
                </span>

                <span className="text-muted-foreground">
                  SGST ({rate / 2}%)
                </span>
                <span className="text-right font-medium text-foreground">
                  ₹{result.sgst}
                </span>

                <span className="text-muted-foreground font-semibold border-t pt-2">
                  Total
                </span>
                <span className="text-right font-bold text-foreground border-t pt-2">
                  ₹{result.total}
                </span>
              </div>
            </div>
          )}

          {/* Buttons */}
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
      </div>

      {/* <!-- GST Article Content --> */}
      <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
        {/* What is GST */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What is GST in India?
        </h2>
        <p className="mb-4">
          Goods and Services Tax (GST) is an indirect tax system introduced in
          India on 1 July 2017 to replace multiple taxes such as VAT, Service
          Tax, and Excise Duty. Instead of paying different taxes to different
          authorities, businesses now pay one unified tax to the government.
        </p>
        <p className="mb-4">
          GST is a consumption-based tax, meaning the tax is charged where the
          product or service is consumed, not where it is produced. The end
          customer ultimately pays the tax, while businesses collect and deposit
          it on behalf of the government.
        </p>

        {/* When GST Applies */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          When Does GST Apply?
        </h2>
        <p className="mb-4">
          GST applies whenever a taxable supply of goods or services takes place
          in India, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Selling a product</li>
          <li>Providing a service</li>
          <li>Freelancing or consulting</li>
          <li>Subscription services</li>
          <li>Digital downloads</li>
          <li>E-commerce sales</li>
        </ul>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Business Type</th>
                <th className="border px-4 py-2 text-left">GST Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Goods business</td>
                <td className="border px-4 py-2">₹40 lakh</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Service business</td>
                <td className="border px-4 py-2">₹20 lakh</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Special category states</td>
                <td className="border px-4 py-2">₹10 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GST Slabs */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          GST Slab Rates in India
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">GST Rate</th>
                <th className="border px-4 py-2 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">0%</td>
                <td className="border px-4 py-2">Essential items</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5%</td>
                <td className="border px-4 py-2">Basic necessities</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12%</td>
                <td className="border px-4 py-2">Processed goods</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">18%</td>
                <td className="border px-4 py-2">Most services & goods</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">28%</td>
                <td className="border px-4 py-2">Luxury items</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CGST SGST IGST */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          CGST vs SGST vs IGST
        </h2>
        <p className="mb-4">
          GST is divided into three parts depending on buyer location.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Situation</th>
                <th className="border px-4 py-2 text-left">Tax Applied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Seller Delhi → Buyer Delhi</td>
                <td className="border px-4 py-2">CGST + SGST</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Seller Delhi → Buyer Maharashtra
                </td>
                <td className="border px-4 py-2">IGST</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Seller India → Foreign Client
                </td>
                <td className="border px-4 py-2">0% GST (Export)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Invoice Example */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Real GST Invoice Example
        </h2>
        <p className="mb-4">A valid GST invoice must include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Seller name and GSTIN</li>
          <li>Invoice number & date</li>
          <li>Buyer details</li>
          <li>Item description</li>
          <li>Taxable value</li>
          <li>CGST/SGST or IGST</li>
          <li>Total invoice amount</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p>
            <strong>Example:</strong>
          </p>
          <p>Service Value: ₹10,000</p>
          <p>GST (18%): ₹1,800</p>
          <p>
            <strong>Total Invoice: ₹11,800</strong>
          </p>
        </div>

        {/* Who must register */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Who Must Register for GST?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Businesses above turnover threshold</li>
          <li>Online sellers</li>
          <li>Freelancers with foreign clients</li>
          <li>Agencies and consultants</li>
          <li>Export service providers</li>
        </ul>

        {/* Penalty */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Late Filing Penalties
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Return</th>
                <th className="border px-4 py-2 text-left">Late Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">GSTR-1</td>
                <td className="border px-4 py-2">₹50/day</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GSTR-3B</td>
                <td className="border px-4 py-2">₹50/day</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Nil Return</td>
                <td className="border px-4 py-2">₹20/day</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Returns */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          GSTR-1 and GSTR-3B Explained
        </h2>
        <p className="mb-4">
          <strong>GSTR-1:</strong> Sales return showing all invoices issued.
        </p>
        <p className="mb-4">
          <strong>GSTR-3B:</strong> Summary return used to pay tax.
        </p>

        {/* Freelancer */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          GST Rules for Freelancers
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Foreign clients → 0% GST (export service)</li>
          <li>LUT filing required</li>
          <li>Registration still mandatory</li>
        </ul>

        {/* Mistakes */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Common GST Mistakes
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Wrong GST slab</li>
          <li>Missing returns</li>
          <li>Incorrect place of supply</li>
          <li>Charging GST but not depositing</li>
        </ul>

      </div>
    </>
  );
}
