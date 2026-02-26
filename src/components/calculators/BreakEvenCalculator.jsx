"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';


export default function BreakEvenCalculator() {

  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const calculate = useCallback(() => {
    const fc = parseFloat(fixedCosts);
    const vc = parseFloat(variableCost);
    const sp = parseFloat(sellingPrice);

    if (!fc || fc <= 0 || isNaN(vc) || vc < 0 || !sp || sp <= 0)
      return null;

    const contribution = sp - vc;

    if (contribution <= 0) {
      return {
        error: "Selling price must exceed variable cost per unit.",
      };
    }

    const units = Math.ceil(fc / contribution);
    const revenue = (units * sp).toFixed(2);

    return {
      units: units.toString(),
      revenue,
      contribution: contribution.toFixed(2),
    };
  }, [fixedCosts, variableCost, sellingPrice]);

  const result = calculate();

  const reset = () => {
    setFixedCosts("");
    setVariableCost("");
    setSellingPrice("");
  };

  const copyResult = () => {
    if (!result || result.error) return;

    navigator.clipboard.writeText(
      `Break-even: ${result.units} units | Revenue needed: $${result.revenue}`
    );

    toast.success("Copied to clipboard");
  };

  return (
    <div className="border rounded-xl p-6 bg-card shadow-sm space-y-5">
      <div>
        <Label htmlFor="be-fixed">Fixed Costs ($)</Label>
        <Input
          id="be-fixed"
          type="number"
          placeholder="e.g. 5000"
          value={fixedCosts}
          onChange={(e) => setFixedCosts(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="be-variable">Variable Cost per Unit ($)</Label>
        <Input
          id="be-variable"
          type="number"
          placeholder="e.g. 10"
          value={variableCost}
          onChange={(e) => setVariableCost(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="be-price">Selling Price per Unit ($)</Label>
        <Input
          id="be-price"
          type="number"
          placeholder="e.g. 25"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1.5"
        />
      </div>

      {result && (
        <div className="bg-muted/50 rounded-lg p-4 border">
          <h3 className="font-semibold text-foreground mb-3">Results</h3>

          {result.error ? (
            <p className="text-red-600 text-sm">{result.error}</p>
          ) : (
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">
                Contribution Margin / Unit
              </span>
              <span className="text-right font-medium text-foreground">
                ${result.contribution}
              </span>

              <span className="text-muted-foreground">
                Break-Even Units
              </span>
              <span className="text-right font-bold text-foreground">
                {result.units}
              </span>

              <span className="text-muted-foreground font-semibold border-t pt-2">
                Revenue at Break-Even
              </span>
              <span className="text-right font-bold text-foreground border-t pt-2">
                ${result.revenue}
              </span>
            </div>
          )}
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

        {result && !result.error && (
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