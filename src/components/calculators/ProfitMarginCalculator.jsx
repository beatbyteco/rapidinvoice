"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';


export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");

  const calculate = useCallback(() => {
    const rev = parseFloat(revenue);
    const c = parseFloat(cost);

    if (!rev || rev <= 0 || isNaN(c) || c < 0) return null;

    const profit = rev - c;
    const margin = (profit / rev) * 100;

    return {
      profit: profit.toFixed(2),
      margin: margin.toFixed(2),
    };
  }, [revenue, cost]);

  const result = calculate();

  const reset = () => {
    setRevenue("");
    setCost("");
  };

  const copyResult = () => {
    if (!result) return;

    navigator.clipboard.writeText(
      `Profit: $${result.profit} | Margin: ${result.margin}%`
    );

    toast.success("Copied to clipboard");
  };

  return (
    <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
      <div>
        <Label htmlFor="pm-revenue">Revenue ($)</Label>
        <Input
          id="pm-revenue"
          type="number"
          placeholder="Total revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="pm-cost">Cost ($)</Label>
        <Input
          id="pm-cost"
          type="number"
          placeholder="Total cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          min="0"
          step="0.01"
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
              Profit
            </span>
            <span className="text-right font-medium text-foreground">
              ${result.profit}
            </span>

            <span className="text-muted-foreground font-semibold border-t pt-2">
              Profit Margin
            </span>
            <span
              className={`text-right font-bold border-t pt-2 ${
                parseFloat(result.margin) >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {result.margin}%
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