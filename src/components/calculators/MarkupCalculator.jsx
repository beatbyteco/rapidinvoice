"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';


export default function MarkupCalculator() {
  const [cost, setCost] = useState("");
  const [markup, setMarkup] = useState("");

  const calculate = useCallback(() => {
    const c = parseFloat(cost);
    const m = parseFloat(markup);

    if (!c || c <= 0 || isNaN(m) || m < 0) return null;

    const markupAmount = (c * m) / 100;
    const sellingPrice = c + markupAmount;
    const margin = (markupAmount / sellingPrice) * 100;

    return {
      markupAmount: markupAmount.toFixed(2),
      sellingPrice: sellingPrice.toFixed(2),
      margin: margin.toFixed(2),
    };
  }, [cost, markup]);

  const result = calculate();

  const reset = () => {
    setCost("");
    setMarkup("");
  };

  const copyResult = () => {
    if (!result) return;

    navigator.clipboard.writeText(
      `Cost: $${cost} | Markup: ${markup}% | Selling Price: $${result.sellingPrice}`
    );

    toast.success("Copied to clipboard");
  };

  return (
    <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
      <div>
        <Label htmlFor="mu-cost">Cost Price ($)</Label>
        <Input
          id="mu-cost"
          type="number"
          placeholder="Enter cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="mu-markup">Markup (%)</Label>
        <Input
          id="mu-markup"
          type="number"
          placeholder="e.g. 50"
          value={markup}
          onChange={(e) => setMarkup(e.target.value)}
          min="0"
          step="0.1"
          className="mt-1.5"
        />
      </div>

      {result && (
        <div className="bg-muted/50 rounded-lg p-4 border">
          <h3 className="font-semibold text-foreground mb-3">
            Results
          </h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-muted-foreground">
              Markup Amount
            </span>
            <span className="text-right font-medium text-foreground">
              ${result.markupAmount}
            </span>

            <span className="text-muted-foreground">
              Equivalent Margin
            </span>
            <span className="text-right font-medium text-foreground">
              {result.margin}%
            </span>

            <span className="text-muted-foreground font-semibold border-t pt-2">
              Selling Price
            </span>
            <span className="text-right font-bold text-foreground border-t pt-2">
              ${result.sellingPrice}
            </span>
          </div>
        </div>
      )}

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
  );
}