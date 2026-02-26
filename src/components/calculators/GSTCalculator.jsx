"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from 'sonner';


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
              <Label
                htmlFor="excl"
                className="font-normal cursor-pointer"
              >
                GST Exclusive (Add GST)
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="inclusive" id="incl" />
              <Label
                htmlFor="incl"
                className="font-normal cursor-pointer"
              >
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
            <h3 className="font-semibold text-foreground mb-3">
              Results
            </h3>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">
                Base Amount
              </span>
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
          <Button
            variant="outline"
            onClick={reset}
            className="gap-1.5"
          >
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
  );
}