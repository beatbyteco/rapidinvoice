"use client";

import { useState, useCallback } from "react";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from 'sonner';

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
      vat = amt * r / 100;
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
      `Net: £${result.net} | VAT: £${result.vat} | Gross: £${result.gross}`
    );
    toast.success("Copied to clipboard");
  };

  return (
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
            <Label htmlFor="vat-remove" className="font-normal cursor-pointer">
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
          <Button variant="secondary" onClick={copyResult} className="gap-1.5">
            <Copy className="h-4 w-4" /> Copy Result
          </Button>
        )}
      </div>
    </div>
  );
}