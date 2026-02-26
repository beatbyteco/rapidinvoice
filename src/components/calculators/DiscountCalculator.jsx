"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';


export default function DiscountCalculator() {

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const calculate = useCallback(() => {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (!p || p <= 0 || isNaN(d) || d < 0) return null;

    const discountAmount = (p * d) / 100;
    const finalPrice = p - discountAmount;

    return {
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
      savings: d.toFixed(1),
    };
  }, [price, discount]);

  const result = calculate();

  const reset = () => {
    setPrice("");
    setDiscount("");
  };

  const copyResult = () => {
    if (!result) return;

    navigator.clipboard.writeText(
      `Original: $${price} | Discount: ${discount}% ($${result.discountAmount}) | Final: $${result.finalPrice}`
    );

    toast.success("Copied to clipboard");
  };

  return (
    <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
      <div>
        <Label htmlFor="dc-price">Original Price ($)</Label>
        <Input
          id="dc-price"
          type="number"
          placeholder="Enter original price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="dc-discount">Discount (%)</Label>
        <Input
          id="dc-discount"
          type="number"
          placeholder="e.g. 15"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          min="0"
          max="100"
          step="0.1"
          className="mt-1.5"
        />
      </div>

      {result && (
        <div className="bg-muted/50 rounded-lg p-4 border">
          <h3 className="font-semibold text-foreground mb-3">Results</h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-muted-foreground">
              Original Price
            </span>
            <span className="text-right font-medium text-foreground">
              ${price}
            </span>

            <span className="text-muted-foreground">
              You Save ({result.savings}%)
            </span>
            <span className="text-right font-medium text-green-600">
              ${result.discountAmount}
            </span>

            <span className="text-muted-foreground font-semibold border-t pt-2">
              Final Price
            </span>
            <span className="text-right font-bold text-foreground border-t pt-2">
              ${result.finalPrice}
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